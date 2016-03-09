---
layout:     post
title:      "EventBus analogy"
date:       2016-03-07 20:00:00
author:     "Marko Arsic"
summary:	  Loose coupling. Do you want to achieve that?
---

Have you seen any movie, or a real wedding, where the bride tosses the bouquet? She turns her back and tosses it behind her. Is she aiming at someone? No. Does it matter to her, who catches it? Not really. That's an event bus analogy right there!

Loose coupling. When you want to achieve that, go for using event bus. 

EventBus is flexible enough to accomodate any broadcaster consumer pattern. The advantage is that broadcaster does not know nor care who would consume the event.

#### EvenBus frameworks for java/android

* [Otto](https://github.com/square/otto)
* [EventBus](https://github.com/greenrobot/EventBus)
