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
* _Split into smaller interfaces._

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

* Use a test double ('mock') when you need speed or ....

## Typescript/Javascript Notes

* Jasmine - [https://jasmine.github.io/]
* Jasmine 2 Spy Cheat Sheet - https://daveceddia.com/jasmine-2-spy-cheat-sheet/
