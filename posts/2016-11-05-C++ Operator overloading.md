---
title: C++ Operator overloading
desc: List of how the operators are overloaded
category: Study
tags: [ comp2012 ]
date: 2016-11-05
filename: 2016-11-05-C++ Operator overloading
---

```cpp
#include <iostream>
using namespace std;

class A {
 private:
  int x;
  int* y;

 public:
  A() { x =1; y=new int[4]{1,2,3,4}; }

  // == != > < >= <= ! && ||
  bool operator==(const A& rhs) const {
   return this->x == rhs.x;
  }

  // + - * /
  A operator+(const A& rhs) const {
   A b = *this;
   b.x += rhs.x;

   return b;
  }

  // istream >>, ostream <<
  friend ostream& operator<<(ostream& out, const A& a) {
   out << a.x;
   return out;
  }

  // =
  A& operator=(A const &rhs) {
   // prevent self assigning
   if (this != &rhs)
   {
     this->x = rhs.x;
     return *this;
   }
  }
  
  // += -= *= /= %= &= |= ^= <<= >>=
  A& operator+=(const A& rhs) {
   this->x = rhs.x;
   return *this;
  }

  // ++ --
  // ++a
  A& operator++() {
   ++this->x;
   return *this;
  }
  //a++
  A operator++(int n) {
   A result = *this;
   this->x++; //or this->x += n;
   return result;
  }

  // []
  int& operator[](unsigned int i){ return y[i];}
  const int& operator[](unsigned int i) const { return y[i];}

};
```