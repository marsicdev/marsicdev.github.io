---
layout:     post
title:      "Programming is full of acronyms"
date:       2015-04-09 22:03:00
author:     "Marko Arsic"
summary:    SOLID, KISS, DRY, STUPID
---


Programming is full of acronyms

Nobody likes to hear that their code is stupid. It is offending. Don’t say it. But honestly: Most of the code being written around the globe is an unmaintainable, unreusable mess.

 __D__on’t __R__epeat __Y__ourself and stay __DRY__ 

__KISS__ is teling you to __K__eep __I__t __S__imple, __S__tupid!

What makes code __STUPID__?

 * __S__ingleton
 * __T__ight coupling
 * __U__ntestability
 * __P__remature Optimization
 * __I__ndescriptive Naming
 * __D__uplication

SOLID deciphers to:

 * __S__ingle responsibility principle
 * __O__pen/closed principle
 * __L__iskov substitution principle
 * __I__nterface segregation principle
 * __D__ependency inversion principle

__GRASP__ stands for __G__eneral __R__esponsibility __A__ssignment __S__oftware __P__rinciples, which are the following:

 * Information Expert
 * Creator
 * Controller
 * Low Coupling
 * High Cohesion
 * Polymorphism
 * Pure Fabrication
 * Indirection
 * Protected Variations

### Some lessons and conclusions

Unit testing is important. If you don’t test your code, you are bound to ship broken code. But still most people don’t properly cover their code with tests.
Whenever you don’t write unit tests because you “don’t have time” the real cause probably is that your code is bad. If your code is good you can test it in no time. Only with bad code unit testing becomes a burden.

Name your classes, methods, variables properly, so that people actually know what you mean. I’m not arguing about variables like $i, those are short, but still self-explanatory. The problem is functions like the ones named above. Functions like strpbrk or variables like $yysstk may be obvious the author, but also only to the author.

Programmers are lazy animals, so it would be only natural to type as little code as possible. Still duplication prevails. The most common reason for duplication is following the second _STUPID_ principle: _Tight Coupling_. If your code is tightly coupled, you just can’t reuse it. And here comes your duplication.

_Source:_ [Don't be STUPID: GRASP SOLID](http://nikic.github.io/2011/12/27/Dont-be-STUPID-GRASP-SOLID.html)
