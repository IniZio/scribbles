---
title: Do I really get Math 2111 for mid?
category: Study
tags: [ math2111 ]
date: 2016-11-01
filename: 2016-11-01-Do I really get Math 2111
---

# System of Linear equations

#### 'EROs' (Elementary Row operations): Row replacement, Row interchange, Row scaling

##### Do not use '=' for ERO

###### order of ERO matters, different orders give different matrices but row equivalent

#### 'REF' (row echelon form):

- row with all 0s must be at buttom
- leading non-zero shapes like step down (1 if RREF)
- no non-zero below leading non-zero

#### 'Pivot': leading 1s in rows

#### 'Pivot Column': pivots where no non-zero above the 1s



#### System of linear equations consistent $\Leftrightarrow$ last column of augmented matrix (i.e. RHS's) is not pivot column

#### 'Rank': number of pivot columns

### Solve System of linear equations:

1. EROs to reduce augmented matrix [M|b] to RREF [M'|b']
2. if b' is pivot column then system is inconsistent
3. Else locate free columns, if there are then infinite solutions. Otherwise unique

# Matrix Algebra

#### 'Linear combination' (L.C.): Let S = {$u_1, u_2....u_k$} be collection of vectors in $R^n$, vector V $\in R^n$ is linear combination of S if V = $c_1u_1+c_2u_2+...$ (i.e. reachable by S by using its vectors)

#### 'Span': Span(S) is collection of all linear combinations of S (i.e. V)

#### Finding linear combinations of vectors $\Leftrightarrow$ solving System of linear equations

#### 'Homogeneous equatioinis': Ax = 0. It is always consistent

### Notions in linear algebra: 'Spanning set ', 'linear independent set'

#### Collection of vectors/ matrix span/generate $R^m$ if it can reach the whole space

#### TO prove matrix/collection of vectors span $R^m$: e.g. $\begin{pmatrix}1&2&1\\3&5&2\\-1&1&3\end{pmatrix}$

Need to solve equation: 

$x_1\begin{pmatrix}1\\3\\-1\end{pmatrix}+x_2\begin{pmatrix}2\\5\\1\end{pmatrix}+x_3\begin{pmatrix}1\\2\\3\end{pmatrix} = \begin{pmatrix}b_1\\b_3\\b_3\end{pmatrix}$

if last column is not pivot column then it is consistent, therefore spans all $R^m$

###### Ax=b is consistent for each b $\in R^m$ $\Leftrightarrow$ each b $\in R^m$ is l.c. of A $\Leftrightarrow$ columns of A spans $R^m$ $\Leftrightarrow$ A has pivot on every row

'Linearly independent': each vector in matrix/collection is unique

Matrix A is linearly dependent $\Leftrightarrow$ det A = 0

|                                       | RREF of A                          | System of linear equations               | Vectors                               | Linear transformation Tx=Ax         |
| ------------------------------------- | ---------------------------------- | ---------------------------------------- | ------------------------------------- | ----------------------------------- |
| Columns of A spans $R^m$              | all rows of A have pivot           | [A\|b] is consistent for all b $\in R^m$ | Span of collection of vectors = $R^m$ | T: $R^n \to R^m$ is surjective/onto |
| Columns of A are linearly independent | All columns of A are pivot columns | [A\|0] only has trivial solution         | Only solution is all $x_i$ are 0      | T:  $R^n \to R^m$is one-to-one      |

#### To solve Ax=b:

1. find a solution of x, i.e. particular solution (express in terms of s and t)
2. Find solution of Ax=0
3. every solution of Ax=b is of form $u_0+w$

#### e.g. let A = $\begin{pmatrix}1&2&3\\2&-1&-5\end{pmatrix}$

- Matrix transformation T$\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}$ = $\begin{pmatrix}x_1+2x_2+3x_3\\2x_1-x_2+5x_3\end{pmatrix}$

'Linear transformation': T:$R^n \to R^m$ is linear transformation if:

- T(x+y) = T(x)+T(y) 
- T(c $\times$ x) = c $\times$ T(x)

##### Matrix transformation is a linear transformation

#### Expressing linear transformation:

Let $e_1, e_2....$ = $\begin{pmatrix}1\\0\\0...\end{pmatrix}, \begin{pmatrix}0\\1\\0...\end{pmatrix}$.., x = $\begin{pmatrix}x_1\\x_2\\...\end{pmatrix}$

We need to know the value of T$e_1$, T$e_2$...

Then Tx = [$Te_1, Te_2,...$]$\begin{pmatrix}x_1\\x_2\\...\end{pmatrix}$

A = [$Te_1 Te_2...$], a.k.a. ==standard matrix==. Tx=Ax.

##### L.I. $\Leftrightarrow$ has more than one solution

#### T is one-to-one/injective ⇔  has unique solution	⇔ {$Te_1$, … ,$Te_n$ }	are l.i.

#### T is onto/surjective ⇔ {$Te_1$, … ,$Te_n$ } spans $R^m$

#### Getting inverse for matrix A: Use ERO to make [A|$I^n$] into [$I^n$|B]

e.g. For 2$\times$2 matrix: $A^{-1}$ = $\frac{1}{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$

#### A linear transformation T is invertable $\Leftrightarrow$ T's standard matrix is invertable

##### aMatrix is invertible if det A != 0, Ax = 0 has only unique trivial solution

#### function f: U $\to$ V is invertible if:

- g ∘ f(u) = u for all u $\in$ U
- f ∘ g(v) = v for all v $\in$ V

#### Ax=b has unique solution $\Leftrightarrow$ det(A) != 0 $\Leftrightarrow$ A is invertible

Domain: $R^{row\ number}$ ,Co-Domain: $R^{column\ number}$ 

##### Determinant uses just a row/column, times the number itself. cofactor processes the whole matrix, does not include the number but only the sign.

##### Effects in EROs on determinant:

- swap one rows $\to$ change sign
- add multiple of one rows to another $\to$ no change
- multiple one row $\to$ determinant $\times$ the multiplier

#### Crammer's rule (i.e. find unique solutions for matrix)

For matrix A$\begin{pmatrix}x_1\\x_2\\..\end{pmatrix}$=$\begin{pmatrix}b_1\\b_2\\..\end{pmatrix}$,

$x_1$= $\frac{\begin{vmatrix}b_1&a_{12}&...\\b_2&a_{22}&...\\...\end{vmatrix}}{det(A)}$

$x_2$=$\frac{\begin{vmatrix}a_{12}&b_1&...\\a_{22}&b_2&...\\...\end{vmatrix}}{det(A)}$

a.k.a. $x_i$=$\frac{det A_i(b)}{det(A)}$

##### Finding area of triangle with vertices $(x_1,y_1),(x_2,y_2),(x_3,y_3)$  = $\frac{1}{2}\begin{vmatrix}1&x_1&y_1\\1&x_2&y_2\\1&x_3&y_3\end{vmatrix}$

#### Determinant tricks: (given matrix A,B are n*n matrix)

- det(-3A) = $(-3)^n$det(A)
- det($A^{-1}$)= 1/det(A)
- det(AB)  = det(A)$\times$det(B)

==MID-TERM END==

#### Vector space V: collection of vectors

##### Prove subset H is vector subspace of V:

1. 0 of V is in H
2. sum of two vectors in H is in H
3. scalar multiple of a vector in H is in H

##### Another way to prove subset H is in vector subspace of V:

1. 0 $\in$ H
2. if u and v are $\in$ H, then au + bv $\in$ H

#### Linear Combination : Let S={$v_1,v_2,...$}  be collection of vectors in vector space V, Linear combination = $c_1v_1+c_2v_2+...$

##### Collection of all possible linear combinations in S is ==span== of S. Span S = {$c_1v_1+c_2v_2+...$|$c_1 ... c_k$ $\in$ R}

##### For any $v_1,...v_p$ $\in$ V , the collection of vectors H = Span{$v_1,...v_p$} is a subspace of V

#### Null Space: Nul A = solution set of Ax=0    // a.k.a. { x| x$\in R^n$ and Ax=0 }

e,g, Null space of A = $\begin{pmatrix}1&1&-1&2\\0&-3&2&5\end{pmatrix}$:

A $\begin{pmatrix}x_1\\x_2\\x_3\\x_4\end{pmatrix}$=$\begin{pmatrix}0\\0\end{pmatrix}$

Use free columns (here is 3,4) as s, t. $\to$solve $x_1+x_2-x+2t=0$ and $-3x_2+2s+5t=0$.

Nul A is the solution, can also transform to $\begin{pmatrix}.5\\2/3\\1\\0\end{pmatrix}s+\begin{pmatrix}-11/3\\5/3\\0\\1\end{pmatrix}t$ = span {$\begin{pmatrix}.5\\2/3\\1\\0\end{pmatrix},\begin{pmatrix}-11/3\\5/3\\0\\1\end{pmatrix}$}

##### Nul A is subspace of $R^n$

##### Nul A is {0} is Ax=0 has unique solution

##### When Ax=0 has basic solutions i.e. {$x_1,...x_k$}, then Nul A = span {$x_1,...x_k$}

#### Column Space: Let matrix A = [$a_1,...a_n$], col A = Span {$a_1,...a_n$}

##### v $\in$ col A $\Leftrightarrow$ [A|v] is consistent

#### Row Space: Let matrix A = [$\begin{pmatrix}r_1\\..\\r_m\end{pmatrix}$], row A = Span{$r_1^T, r_2^T...$}

##### row A is subspace of $R^n$

##### If B is EROs from A, then row A = row B, if B is ECOs from A, then col A = col B

### Linear transformation for vector space

#### Kernel of Linear transformation (T: V $\to$ W): Ker T:= {v $\in$V|T(v)=0}

#### Image of T: im T:= {w $\in$ W| w = T(V)}

##### For linear transformation T:$R^n \to R^m$ with standard matrix A:

- ket T = Nul A
- im T = Col A

##### T is injective $\Leftrightarrow$ Ax=0 has only trivial solution $\Leftrightarrow$ Nul A = {0}

##### T is surjective $\Leftrightarrow$ Ax=b consistent $\Leftrightarrow$ Col A = $R^m$

##### T is injective $\Leftrightarrow$ ket T = {0}

##### T is surjective $\Leftrightarrow$ im T = $R^m$

 

##### With T:$V \to W$ker T , im T are both vector subspaces of V, W respectively

