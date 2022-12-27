# Demo Preview coverage report

Use Firebase hosting to host jest and playwright reports per PR

jest-lcov-report
<https://jest-coverage-demo.web.app/>

playwright-report
<https://playwright-report-demo.web.app/>

## Reproduce

1. remove .firebaserc
2. cp .firebaserc.example .firebaserc
3. set firebase hosting and create New Site
4. edit .firebaserc using project_id and site_id you created

## local confirm

1. setting up firebase emulators
2. pnpm local:e2e or pnpm local:cov
