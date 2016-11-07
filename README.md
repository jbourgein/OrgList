# JS Testing
This shows an example of how to test a simlpe program for fetching orgs and displaying their sandboxes with login details.

## Example pages
The [index.html](/index.html) is the example of well structured JS code that is easier to test. The [indexBad.html](/indexBad.html) is an example of difficult to test JS code. All the testing stuff is in the /tests/ directory.

## forcejs
The test app uses [forcejs](https://github.com/ccoenraets/forcejs) for all the Salesforce API calls. If you run it locally I recommend using [force-server](https://github.com/ccoenraets/force-server) (as opposed to IIS) as it proxies all API calls so you can get round cross-origin issues.

## Useful Links
### Testing frameworks
* [QUnit](https://qunitjs.com/)
* [Mocha](https://mochajs.org/)
* [Jasmine](https://jasmine.github.io/)
* [Sinon](http://sinonjs.org/)

### Useful Guides
* [http://alistapart.com/article/writing-testable-javascript](http://alistapart.com/article/writing-testable-javascript)
* [http://www.adequatelygood.com/Writing-Testable-JavaScript.html](http://www.adequatelygood.com/Writing-Testable-JavaScript.html)
* [https://gist.github.com/jbranchaud/60146038904b78f22126](https://gist.github.com/jbranchaud/60146038904b78f22126) - useful list of resources