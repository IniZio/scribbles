e.g. Let X be the increment of the avg temperature at a random day relative to the preceeding day

Then assume that X is normally distributed with E(X) = 0, Var(X) = $\sigma^2$, want a 90% confidence interval of $\sigma^2$

e.g. Let $X_1, ... X_n$ be a sample which is normally distributed with unknown mean u and unknown variance $\sigma^2$
$$
\frac{\overline{X} - u}{\sqrt{\frac{\sum_j(X_j - \overline{X})^2}{n(n-1)}}} = \frac{(\overline{X} - u)/\frac{\sigma}{\sqrt{n}}}{\sqrt{\frac{1}{x-1}\frac{\sum_j(X_j - \overline{X})^2}{\sigma^2}}}
$$
this follows the student's distribution with n-1 degree of freedom

In particular P($-t_{n-1, \frac{1-\alpha}{2}}$ < $\frac{\overline{X} - u}{\sqrt{S^2/n}}$ < $t_{n-1, \frac{1-\alpha}{2}}$) = $\alpha$	

**Def:** A null hypothsis is a statement (concerning an unknown parameter) which one would like to disprove experimentally. The alternative hypothesis is a statement which one would like to conclude in case the null hypothesis is rejected.

Remark: We always formulate the null hypothesis as one of the followings: $\theta = \theta_0, \theta <= \theta_0, \theta >= \theta_0$

e.g. Let X be the IQ of a random picked 4 year old, and Y be that of 5 year old.

Denote u_4 = E(X), u_5 = E(Y)

Test H_0: u_5 = u_4

vs H_1: u_5 > u_4

Remark: The alternaive hypothesis need not be the logical negation of the null hypothesis

e.g. We measure $\overline{X}$ and reject H_o if the experimental result is in (a, +$\infty$) $\or$ (-$\infty$, -a)

e.g. We measure $\overline{Y} - \overline{X}$ and reject H_0 if the experimental result is in (a, +$\infty$)

To test a hypothesis, it usually consists of a test statistic, a critical region.

**e.g.** Let 4 letters be distributed into 3 pigeon holes. prove that at least 1 pigeon hole contains 2 or more letters

Proof: assume tht all pigeon holes contain at most 1 letter. Then 3 pigeon holes together contain at most 3 letters which is impossible.

**Def:** Given a testing procedure of a hypothesis.
Its type I error is the probaiblity of rejecting H_0 given H_0 is true
Its type II error is the probability of rejecting H_1 given H_1 is true

**e.g.**: Given a coin with the probability of getting a head p.
Test H_0: p = .5 vs H_1: p != .5 by flipping the coin for 10 times, and let X = the total number of heads obtained, with critical region {0, 1, 2, 3, 7,8,9,10}. Calculate the type I error of this test.

Sol: Assume that H_0 is true.
Type I error of this test
$$
= P(1 or .... 10 | p = 1/2)\\
= 1 - 16 P 5 * ...
$$
**e.g.**: Calculate the type II of the test

Sol: Assume that H_1 is true
P(X = 4 or 5 or 6)

= $10P4 * .4^4 * .6^6 + 10P5 * .4^5 + 0.6^5 + ...$

Remark: Usually finding H_1 error is harder to calculate than H_0

**e.g.** Let X_1, ... X_n be a sample normally distributed with unknown mean u and known variance $\sigma^2$. Design a test of H_0: u = u_0 vs H_1: u != u_0 so that the type I error of such a test is at most $\alpha$

Solution: Assume that H_0 is true
$\frac{\overline{X} - u_0}{\sigma/\sqrt{n}}$ follows the standard normal. In particular P($-Z_{\alpha/2}$ < $\frac{\overline{X} - u_0}{\sigma/\sqrt{n}}$ < $Z_{\alpha/2}$) = 1 - $\alpha$
If we make $(\overline{X} - u_0) / \frac{\sigma}{\sqrt{n}}$ the test statistic and critical region R \ ($-Z_{\frac{\alpha}{2}}$, $Z_{\frac{\alpha}{2}}$), then its significance level is $\alpha$

**e.g.** Let X_1, ... X_n be a large sample with unknown mean u and known variance $\sigma^2$. Design a test of H_0: u = u_0 and H_1: u > u_0 of significance level $\alpha$

Solution: Assume that H_0 is true.

**Lemma:** Given (x_j, y_j), n($\overline{xy} - \overline{x}\overline{y}$) = $\sum_j(x_j-\overline{x})(y_j - \overline{y})$

Proof: $\sum_j(x_j-\overline{x})(y_j - \overline{y})$ = $\sum_j(x_jy_j - \overline{x}x_j - \overline{y}x_j + \overline{x}\overline{y})$ = $n(\overline{xy} - \overline{x}\overline{y})$

Cor: if te line defined by y = ax + b is the least square fit of (x_j, y_j), then a = $\frac{\sum_j(x_j - \overline{x}(y_j - \overline{y}))}{\sum_j(x_j-\overline{x})^2}$ and b = $\overline{y} - a\overline{x}$

**Def:** Let X, Y be random variables. By linear regression model is meant to be the way to express the relation between X and Y as Y = aX + b + $\theta$ is called the least fit model if a,b are so chosen such that var($\theta$) is mimized

**Theorem: ** given (X_j, Y_j) be a sample of the pair (X, Y) and Y = aX + b + $\theta$ is a least square linear regression model. Then 

**Def:** Random variable X is categorical if X is a function from the sample space to a finite set

e.g. Let S = set of all studens in this class. Define:
X: S -> {male, female}, X(s) = gender of s for al s $\in$ S, Y: S -> {A, B, AB, O}, Y(s) = blood type of s for all s $\in$ S

Def: Let X: S -> {$x_1, x_2, ... x_n$} be a categorical random variable. Y is a random variable and let u_j = E(Y | X = x_j)



**One way ANOVA:**

let X: S -> {x_1, ... x_n} be categorical. Y is a random variable s.t. u_j = E(Y | X = x_j).

Test H_0: u_1 = u_2 = ...
vs H_1: u_1 != u_2 != ...

Let n_1, n_2, ... n_k be positive integers.
Let  $\{y_{ij}\}_{1<= i <= k, 1 <= j <= n_i}$ be a double sequence

$\sum_{i=1}^k \sum_{j=1}^{n_i} (y_{ij} - \overline{y})^2$ = $\sum_{i=1}^k \sum_{j=1}^{n_i} (y_{ij} - \overline{y_i})^2 + \sum_{i=1}^k (\overline{y_i} + \overline{y})^2$

**Def: ** Let X : S -> {1, ... x} be categorical, Y is a random variable. Let $Y_{ij}$ be a sample so that $Y_{ij}$ is measured to be i when X is observed. Then:

sum of squares SS = $\sum_{i=1}^k \sum_{j=1}^{n_i} (y_{ij} - \overline{y})^2$

sum of squares between groups SSb = $\sum_{i=1}^k n_i (y_{ij} - \overline{y})^2$ e.g. difference between year 2 and year 3

sum of squares within groups SSw = $\sum_{i=1}^k \sum_{j=1}^{n_i} (y_{ij} - \overline{y_i})^2$ e.g. average of year2 group

SS = SSb + SSw

>  These are for comparing average of a group to average of all groups

**Theorem: ** (not in finals)

In a one way ANOVA, we make F = $\frac{SSb}{k-1}/\frac{SSw}{n_1+....n_k-k}$ the test statistic, and critical region ($f_{x_1, n_1 + .. n_k - k}$, $\alpha$, +$\infty$)

Then this test is of level $\alpha$. WHen $f_{n,m,\alpha}$ is the 1-$\alpha$ quantile of the F-distribution with n, m deg of freedom

**e.g.**

three sentences. one is englihs, german, french. the null hypothesis is that length of them are equal. 



Finals

comparison between two sample will not be tested

FAQ has syllabus

no theoritical proves

