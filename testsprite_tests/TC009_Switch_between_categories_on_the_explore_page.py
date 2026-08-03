import asyncio
import re
from playwright import async_api
from playwright.async_api import expect

async def run_test():
    pw = None
    browser = None
    context = None

    try:
        # Start a Playwright session in asynchronous mode
        pw = await async_api.async_playwright().start()

        # Launch a Chromium browser in headless mode with custom arguments
        browser = await pw.chromium.launch(
            headless=True,
            args=[
                "--window-size=1280,720",
                "--disable-dev-shm-usage",
                "--ipc=host",
                "--single-process"
            ],
        )

        # Create a new browser context (like an incognito window)
        context = await browser.new_context()
        # Wider default timeout to match the agent's DOM-stability budget;
        # auto-waiting Playwright APIs (expect, locator.wait_for) inherit this.
        context.set_default_timeout(15000)

        # Open a new page in the browser context
        page = await context.new_page()

        # Interact with the page elements to simulate user flow
        # -> navigate
        await page.goto("http://localhost:3000")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Open the Explore page by navigating to the '/explore' URL.
        await page.goto("http://localhost:3000/explore")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Open the Global Menu by clicking the 'Menu' button so the category list is revealed.
        # Menu Close button
        elem = page.get_by_role('button', name='Open menu', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'The Universe' link in the Global Menu to switch the explore page to that category.
        # The Universe link
        elem = page.get_by_role('link', name='The Universe', exact=True)
        await elem.click(timeout=10000)
        
        # -> Scroll the Global Menu panel so hidden category links (for example the 'The Atlas' link) become visible.
        await page.mouse.wheel(0, 300)
        
        # -> Open the Global Menu by clicking the 'Menu' button so the category list becomes visible.
        # Close Menu Close Menu Menu button
        elem = page.get_by_role('button', name='Open menu', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'The Atlas' link in the Global Menu to switch the explore category and observe whether the main content updates to 'The Atlas'.
        # The Atlas link
        elem = page.get_by_role('link', name='The Atlas', exact=True)
        await elem.click(timeout=10000)
        
        # --> Assertions to verify final state
        
        # --> Verify category-focused content is displayed
        # Assert: Expected the URL to contain 'the-atlas' to reflect the selected category.
        await expect(page).to_have_url(re.compile("the\\-atlas"), timeout=15000), "Expected the URL to contain 'the-atlas' to reflect the selected category."
        
        # --> Verify the displayed content changes to the newly selected category
        # Assert: Expected the URL to change to '/explore/the-atlas' after selecting a different category.
        await expect(page).to_have_url(re.compile("/explore/the\\-atlas"), timeout=15000), "Expected the URL to change to '/explore/the-atlas' after selecting a different category."
        # Assert: Expected main content to display 'The Atlas' after selecting that category.
        await expect(page.locator("xpath=/html/body/div[5]/div/div[2]/a").nth(0)).to_contain_text("The Atlas", timeout=15000), "Expected main content to display 'The Atlas' after selecting that category."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    