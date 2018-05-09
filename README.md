# CSD Notes

2018-05-09

## Test-Driven Development

* Think -> Red -> Green -> Refactor (returning to Green multiple times) -> Think
* **Baby steps!**

### Three Laws of TDD

1.  You may not write any production code until you have written a failing test.
2.  You may not write more of a unit test than is sufficient to fail, and not compiling is failing.
3.  You may not write more production code than is sufficient to pass the currently failing test.

## Unit Testing

* Code written by the developer to test production code.
* Single class only (Class Under Test)
* Independent of configuration, isolated from other objects
* Doesn't talk to database, file system, network
* Should run in under a second
* 3-4x or more test code as production code
* Start _extremely_ simple

### Unit Test F.I.R.S.T.

* Fast (<1 second per test)
* Isolated (Arrange, Act, Assert; only needs the Class Under Test)
* Repeatable (all necessary setup/teardown; no traces left)
* Self-Verifying ('pass' should be good enough)
* Timely (written at the same time as the code)

## Javascript Notes

* Jasmine - [https://jasmine.github.io/]