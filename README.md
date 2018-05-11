# CSD Notes

2018-05-09

## Test-Driven Development

* Think -> Red -> Green -> Refactor (returning to Green multiple times) -> Think
* **Baby steps!**

### Three Laws of TDD

1.  You may not write any production code until you have written a failing test.
2.  You may not write more of a unit test than is sufficient to fail, and not compiling is failing.
3.  You may not write more production code than is sufficient to pass the currently failing test.

## Testing Quadrant

|                     |                         | Business Facing   |                                   |                  |
| ------------------- | ----------------------- | ----------------- | --------------------------------- | ---------------- |
|                     | Functional, Acceptance  | ^^                | Showcases, Exploratory, Usability |                  |
| Support Programming | - - - - - - - - - - - - | ++                | - - - - - - - - - - - - - - - - - | Critique Product |
|                     | Unit, Component, System | vv                | Performance, Security             |                  |
|                     |                         | Technology Facing |                                   |                  |

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

### As you build up unit tests

* If you test that a.x() succeeds in one test, and a test of a.y() depends on that, don't duplicate the Assert about a.x() in the a.y() test, just expect it to work.
* When a test fails because it assumed things not true, fix the test (don't just delete).
* Refactor your tests, but don't remove or consolidate test cases.

## S.O.L.I.D. Principles

_Recommended reading: Clean Code_

* They are principles, not commandments.
* You usually find violations as your code grows and you then refactor using these principles as your guide.
* Don't worry about these when you write the first object.
* Encapsulate what varies.
* Favor composition over inheritance.
* Program to interfaces, not implementations.
* Strive for loosely coupled designs between objects that interact.

|     |     |     |                                 |
| --- | --- | --- | ------------------------------- |
| S   | R   | P   | Single Responsibility Principle |
| O   | C   | P   | Open Closed Principle           |
| L   | S   | P   | Liskov Substitution Principle   |
| I   | S   | P   | Interface Segregation Principle |
| D   | I   | P   | Dependency Inversion Principle  |

### S -- Single Responsibility Principle

* Only one (business) reason for a class to change.
* Think of stakeholders who will request/demand/trigger a change.
* Avoid surprising changes. If tax law changes, I'd hope to see a Tax class change, not a Billing or Invoice class change.
* Related: separate out the code to improve testability.
* _Move methods out of a class into related classes._

### O -- Open Closed Principle

* "Open for extension"
* "Closed for modification"
* Create multiple classes that inherit from a common parent.
* Avoid configuration options in a Class.
* Different behavior belongs in a different Class.
* _Move branched behavior into sub-classes._

### L -- Liskov Substitution Principle

* Inherit the behaviors, not the class.
* Hardest to understand and resolve of the five SOLID principles.
* Once you smell this, address it quickly before it gets even worse.
* Barbara Liskov's principle that derived classes must be substitutable for their base classes.
* If you can call `quack()` on the `Duck` class, and `Mallard` is derived from `Duck`, then you should be able to safely call `quack()` on `Mallard`.
* Sadly, you discover LSP violations late in a project.
* So a `rubberDuck` and a `mallardDuck` both implement `Floater`.
* _Implement interfaces/behaviors instead of extending a base class._

```typescript
// Bad:
Duck.quack(); //success
MallardDuck.quack(); //failure

// Good:
Duck.quack(); //success
MallardDuck.quack(); //success

// Implements instead of extends
export class Mallard implements IFly {
  private flyer: IFly = new Flyer();
}
```

### I -- Interface Segregation Principle

* Split up interfaces so that clients can use a portion and combine as needed.
* _Split signatures (method calls) into smaller interfaces._

### D -- Dependency Inversion Principle

* "Don't call me, I'll call you."
* Don't "hard-code" your dependencies.
* Use an abstraction.
* _Pass the dependency as an argument to construction._

```typescript
// Good:
export class Invoice {
  constructor(private logger?: ILogger = new ConsoleLogger()) {
    // Not sure about this TypeScript syntax
  }

  print() {
    this.logger.log("logging message");
  }
}

// Usage:
let myInvoice = new Invoice();
myInvoice.print();
let differentInvoice = new Invoice(new DbLogger());
differentInvoice.print();
```

## Test Doubles

1.  Dummy Object - simply exists.
2.  Test Stub - hard-coded response.
3.  Mock Object - programmatic response.
4.  Fake Object - light-weight implementation (SQLite instead of Postgres).
5.  Test Spy - reports back on what the code did.

* Use a test double ('mock') when you need speed or simplicity.

## Integration/System Testing

* _By definition, testing two or more classes is an Integration Test._
* Integration Testing and System Testing and the same thing, just on a spectrum.
* Mocking/spying is allowed but not necessary for Integration Tests.
* Mock/spy when it's expensive, not as a hard and fast rule.
* Still want it to be Repeatable, Self-Verifying, and Timely.
* "Fast" is still good, with the understanding that it won't be as fast.
* "Isolated" is obviously violated, but keep in mind the boundaries of each test.

### Example Database Approach

1.  Create database (on demand, scripted, maybe a "Fake"/lightweight stand-in)
2.  Load seed data (the static data expected by the application)
3.  Load test data (minimal set to support tests)
4.  Open transaction (per test so they can be repeatable in any order)
5.  Run test
6.  Retrieve data
7.  Assert
8.  Rollback transaction (opened above)
9.  Delete data
10. Destroy database

## Acceptance Tests

* No human should have to follow a script.
* Gherkin should be written by the business people responsible for writing user stories.
* Developers write the code glue to write interpretations of the Gherkin.
* Testing should not be a phase that follows development, but part of the development process that is done when development is done.

### Gherkin Feature File

**Feature:** Buy Product<br/>
_As a vending machine customer,_<br/>
_I want to buy products_<br/>
_So that I can enjoy a tasty treat._

**Background:** I am at the vending machine.

**Scenario:** Buy a product from the vending machine<br/>
Given I have inserted a quarter<br/>
When I purchase the product<br/>
Then I should receive the product

### ATDD Cycle

1.  Scenario step fails
2.  Create failing unit test
3.  Implement production code
4.  Unit test passes
5.  Scenario step passes
6.  Next scenario step fails

## WebDriver

* Example took 1000x as long as the React shallow rendering tests.

## Testing Triangle

1.  Most: unit
2.  Integration
3.  System
4.  Functional/Acceptance
5.  UI/WebDriver
6.  Least: Explatory

### Why?

* Feedback loop length.
* Completeness of coverage.
* Maintainability.
* Specificity of feedback.

## Test Strategy

1.  With an existing codebase, start from the top with WebDriver tests to provide smoke tests/sanity tests.
2.  Don't add tests to terrible code. That's not "Timely." It's probably also next to impossible.
3.  When you need to change code, first wrap the code in system/integration tests. Then, refactor, adding unit tests to the refactored code.
4.  When adding new code, do TDD, writing more test code than production code.

## Pair Programming

* Techniques: ping-pong, remote, promiscuous, pomodoro
* Station: flat desk, fast machine, 2 large monitors, 2 keyboards, 2 mice
* Find the level of pairing that works for the people on the team, but try more.
* Pairing is especially valuable for new team members, for complex problems, and for learning new technology.

### Ping-pong

1.  A writes a failing test
2.  B writes code until the test passes
3.  B writes a failing test
4.  A writes code until the test passes

## Code Quality

### Code Smells

* Not...

### Clean Code

1.  a
2.  b
3.  c
4.  d
5.  e
6.  f
7.  g
8.  h
9.  i
10. j

* Bonus: you clean code for yourself, your future self, and for your team.

### Static Analysis

* Fadi: https://www.sonarqube.org/
* Instanbul for Code Coverage
* TypeScript includes its own static analysis
* JSLint, TSLint

## Technical Debt

* X

## Typescript/Javascript Notes

* Jasmine - [https://jasmine.github.io/]
* Jasmine 2 Spy Cheat Sheet - https://daveceddia.com/jasmine-2-spy-cheat-sheet/
