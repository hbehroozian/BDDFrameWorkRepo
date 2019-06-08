$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/TekSchoolTest.feature");
formatter.feature({
  "line": 2,
  "name": "Tek School Test",
  "description": "",
  "id": "tek-school-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@TekSchoolTest"
    },
    {
      "line": 1,
      "name": "@alltest"
    }
  ]
});
formatter.before({
  "duration": 4084304500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 5634471000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1483140100,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Login to test environment",
  "description": "",
  "id": "tek-school-test;login-to-test-environment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@loginTest"
    },
    {
      "line": 8,
      "name": "@smoketest"
    },
    {
      "line": 8,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "User see test environment page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User verify test environment title",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_see_test_environment_page()"
});
formatter.result({
  "duration": 10000000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_verify_test_environment_title()"
});
formatter.result({
  "duration": 6424400,
  "status": "passed"
});
formatter.after({
  "duration": 835689800,
  "status": "passed"
});
formatter.before({
  "duration": 3295406400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User go to Tek School page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on test environment",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinations.user_go_to_Tek_School_page()"
});
formatter.result({
  "duration": 4973299000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_click_on_test_environment()"
});
formatter.result({
  "duration": 1488745600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login to My Account",
  "description": "",
  "id": "tek-school-test;login-to-my-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@loginPage"
    },
    {
      "line": 13,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "User click on myAccount",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User select login from dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User should see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.user_click_on_myAccount()"
});
formatter.result({
  "duration": 346383300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_select_login_from_dropdown()"
});
formatter.result({
  "duration": 471106400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.user_should_see_login_page()"
});
formatter.result({
  "duration": 23729200,
  "status": "passed"
});
formatter.after({
  "duration": 848403700,
  "status": "passed"
});
});