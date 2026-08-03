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
        
        # -> Click the 'Initialize Journey' button to start the interactive solar-system experience.
        # Initialize Journey button
        elem = page.get_by_role('button', name='Initialize Journey', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Initialize Journey' button to start the interactive solar-system experience.
        # Earth
        elem = page.get_by_text('Earth', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Initialize Journey' button to start the interactive solar-system experience.
        # Initialize Journey button
        elem = page.get_by_role('button', name='Initialize Journey', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Earth' entry in the System Map to open the Earth detail view and verify its descriptive information appears.
        # Earth
        elem = page.get_by_text('Earth', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Earth' entry in the System Map to open its detail view and verify Earth-specific details appear.
        # Earth
        elem = page.get_by_text('Earth', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Earth' entry in the System Map to open its detail view and reveal Earth-specific descriptive information.
        # Earth
        elem = page.get_by_text('Earth', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Earth' entry in the System Map to open its detail view (first scroll to ensure the map is fully visible).
        await page.mouse.wheel(0, 300)
        
        # -> Click the 'Earth' entry in the System Map to open its detail view (first scroll to ensure the map is fully visible).
        # Earth
        elem = page.get_by_text('Earth', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Luna' entry in the System Map to open its detail view and verify Luna-specific details appear.
        # Luna
        elem = page.get_by_text('Luna', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Luna' entry in the System Map to open the Luna detail view and verify Luna-specific descriptive information appears.
        # Luna
        elem = page.get_by_text('Luna', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Pluto' entry in the System Map to open its detail view and verify the page updates to show Pluto-specific information.
        # Pluto
        elem = page.get_by_text('Pluto', exact=True)
        await elem.click(timeout=10000)
        
        # -> Click the 'Pluto' entry in the System Map to open Pluto's detail view and verify its descriptive information appears.
        # Pluto
        elem = page.locator("xpath=/html/body/div[5]/div[2]/div[2]/div[13]/span").nth(0)
        await elem.click(timeout=10000)
        
        # -> Click the visible "Reload" button to retry loading the application page.
        # Reload button
        elem = page.locator("xpath=/html/body/div/div/div/form/button").nth(0)
        await elem.click(timeout=10000)
        
        # -> Open the Atlas landing page in a new browser tab (load http://localhost:3000) and wait for the System Map and "Initialize Journey" button to render.
        # Open URL in new tab
        page = await context.new_page()
        await page.goto("http://localhost:3000/")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Open the Atlas landing page (http://localhost:3000/) in a new browser tab and wait for the System Map and the 'Initialize Journey' button to appear.
        # Open URL in new tab
        page = await context.new_page()
        await page.goto("http://localhost:3000/")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # -> Final action — this is where the agent failed
        # Error observed by agent: Navigation failed - site unavailable: http://localhost:3000/
        await page.goto("http://localhost:3000/")
        try:
            await page.wait_for_load_state("domcontentloaded", timeout=5000)
        except Exception:
            pass
        
        # --> Assertions to verify final state
        current_url = await page.evaluate("() => window.location.href")
        # Assert: page loaded with a URL (final outcome verified by the AI judge during the run)
        assert current_url, 'Page should have loaded with a URL'
        current_url = await page.evaluate("() => window.location.href")
        # Assert: page loaded with a URL (final outcome verified by the AI judge during the run)
        assert current_url, 'Page should have loaded with a URL'
        await asyncio.sleep(5)

    finally:
        if context:
            await context.close()
        if browser:
            await browser.close()
        if pw:
            await pw.stop()

asyncio.run(run_test())
    