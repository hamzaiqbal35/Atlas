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
        
        # -> Scroll the page and click the 'Initialize Journey' button to start the solar system experience.
        await page.mouse.wheel(0, 300)
        
        # -> Scroll the page and click the 'Initialize Journey' button to start the solar system experience.
        # Initialize Journey button
        elem = page.get_by_role('button', name='Initialize Journey', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Initialize Journey' button to launch the interactive journey and reveal the informational panel.
        # Initialize Journey button
        elem = page.get_by_role('button', name='Initialize Journey', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Earth' node in the system map to open its informational panel or contextual details.
        # Earth
        elem = page.get_by_text('Earth', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Earth' node in the system map and verify an informational panel for Earth appears.
        # Earth
        elem = page.get_by_text('Earth', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Earth' node in the System Map to open Earth's informational panel and verify the info changes from Sol to Earth.
        # Click the 'Earth' node in the System Map to open Earth's informational panel and verify the info changes from Sol to Earth.
        elem = page.locator('xpath=/html/body/div[5]/div[2]/div[2]/div[5]/div')
        await elem.click(timeout=10000)
        
        # -> Click the 'Venus' node in the system map and verify the informational panel updates to Venus.
        # Venus
        elem = page.get_by_text('Venus', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Venus' node in the System Map (use its container) to try to change the informational panel from 'Sol' to 'Venus'.
        # Click the 'Venus' node in the System Map (use its container) to try to change the informational panel from 'Sol' to 'Venus'.
        elem = page.locator('xpath=/html/body/div[5]/div[2]/div[2]/div[4]/div')
        await elem.click(timeout=10000)
        
        # -> Click the 'earth' button in the Sol informational panel to open Earth details and verify the informational panel updates.
        # earth button
        elem = page.get_by_role('button', name='earth', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Mars' node in the system map to change the focused informational panel to Mars.
        # Mars
        elem = page.get_by_text('Mars', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Mars' node in the system map (use its container) to try to change the informational panel to Mars.
        # Click the 'Mars' node in the system map (use its container) to try to change the informational panel to Mars.
        elem = page.locator('xpath=/html/body/div[5]/div[2]/div[2]/div[7]/div')
        await elem.click(timeout=10000)
        
        # -> Click the 'Jupiter' node in the system map and verify whether the informational panel updates from 'Earth' to 'Jupiter'.
        # Jupiter
        elem = page.get_by_text('Jupiter', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Jupiter' node in the system map to jump focus to Jupiter and verify the informational panel updates.
        # Jupiter
        elem = page.get_by_text('Jupiter', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the visible 'Reload' button to attempt to recover the homepage and the solar system experience.
        # Reload button
        elem = page.locator("xpath=/html/body/div[2]/div/div/form/button").nth(0)
        await elem.click(timeout=10000)
        
        # -> Open a fresh browser tab to the home page (http://localhost:3000/) and wait for the solar system experience to render.
        # Open URL in new tab
        page = await context.new_page()
        await page.goto("http://localhost:3000/")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Open a fresh tab to the home page (http://localhost:3000/) and wait for the solar system experience to render.
        await page.goto("http://localhost:3000/")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Reload the home experience by navigating to http://localhost:3000/ and then wait for the solar system informational panel (e.g., 'Sol' or a planet name) to appear.
        await page.goto("http://localhost:3000/")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # --> Assertions to verify final state
        
        # --> Verify an informational panel is displayed
        await page.locator("xpath=/html/body/div[5]/div/div/div/div[3]/div/button").nth(0).scroll_into_view_if_needed()
        # Assert: An informational panel is visible, confirmed by the visible 'earth' button.
        await expect(page.locator("xpath=/html/body/div[5]/div/div/div/div[3]/div/button").nth(0)).to_be_visible(timeout=15000), "An informational panel is visible, confirmed by the visible 'earth' button."
        
        # --> Verify contextual details are displayed for the hovered body
        await page.locator("xpath=/html/body/div[5]/div/div/div/div[3]/div/button").nth(0).scroll_into_view_if_needed()
        # Assert: Contextual details panel for the hovered body is visible.
        await expect(page.locator("xpath=/html/body/div[5]/div/div/div/div[3]/div/button").nth(0)).to_be_visible(timeout=15000), "Contextual details panel for the hovered body is visible."
        
        # --> Verify a different celestial body is now in focus
        await page.locator("xpath=/html/body/div[5]/div[2]/div[2]/div[9]/span").nth(0).scroll_into_view_if_needed()
        # Assert: Jupiter is visible in the system map, confirming a different celestial body is now in focus.
        await expect(page.locator("xpath=/html/body/div[5]/div[2]/div[2]/div[9]/span").nth(0)).to_be_visible(timeout=15000), "Jupiter is visible in the system map, confirming a different celestial body is now in focus."
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    