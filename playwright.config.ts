/// <reference types="node" />

import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
	features: 'features/*.feature',
	steps: ['src/steps/*.ts', 'src/fixtures/*.ts'],
});

export default defineConfig({
	testDir,
	fullyParallel: true,
	workers: process.env.CI ? 2 : undefined,
	reporter: [
		['list'],
		['allure-playwright', { outputFolder: 'allure-results' }],
	],
	use: {
		baseURL: process.env.BASE_URL ?? 'https://saucedemo.com',
		screenshot: 'only-on-failure',
		video: 'retain-on-failure',
		trace: 'on-first-retry',
	},
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] },
		},
	],
});