<h1>Default Arguments</h1>
<div class="markdown prose max-w-none" id="description"><p>Write a function <code>defaultArguments</code>. It takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the right values. </p>
<p>You cannot assume that the function's arguments have any particular names.</p>
<p>You should be able to call <code>defaultArguments</code> repeatedly to change the defaults.</p>
<pre style="position: relative;"><code class="language-javascript"><span class="cm-keyword">function</span> <span class="cm-def">add</span>(<span class="cm-def">a</span>,<span class="cm-def">b</span>) { <span class="cm-keyword">return</span> <span class="cm-variable-2">a</span><span class="cm-operator">+</span><span class="cm-variable-2">b</span>;};

<span class="cm-keyword">var</span> <span class="cm-def">add_</span> <span class="cm-operator">=</span> <span class="cm-variable">defaultArguments</span>(<span class="cm-variable">add</span>,{<span class="cm-property">b</span>:<span class="cm-number">9</span>});
<span class="cm-variable">add_</span>(<span class="cm-number">10</span>); <span class="cm-comment">// returns 19</span>
<span class="cm-variable">add_</span>(<span class="cm-number">10</span>,<span class="cm-number">7</span>); <span class="cm-comment">// returns 17</span>
<span class="cm-variable">add_</span>(); <span class="cm-comment">// returns NaN</span>

<span class="cm-variable">add_</span> <span class="cm-operator">=</span> <span class="cm-variable">defaultArguments</span>(<span class="cm-variable">add_</span>,{<span class="cm-property">b</span>:<span class="cm-number">3</span>, <span class="cm-property">a</span>:<span class="cm-number">2</span>});
<span class="cm-variable">add_</span>(<span class="cm-number">10</span>); <span class="cm-comment">// returns 13 now</span>
<span class="cm-variable">add_</span>(); <span class="cm-comment">// returns 5</span>

<span class="cm-variable">add_</span> <span class="cm-operator">=</span> <span class="cm-variable">defaultArguments</span>(<span class="cm-variable">add_</span>,{<span class="cm-property">c</span>:<span class="cm-number">3</span>}); <span class="cm-comment">// doesn't do anything, since c isn't an argument</span>
<span class="cm-variable">add_</span>(<span class="cm-number">10</span>); <span class="cm-comment">// returns NaN</span>
<span class="cm-variable">add_</span>(<span class="cm-number">10</span>,<span class="cm-number">10</span>); <span class="cm-comment">// returns 20</span>
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
<pre style="display: none; position: relative;"><code class="language-coffeescript"><span class="cm-variable">add</span> <span class="cm-punctuation">=</span> <span class="cm-punctuation">(</span><span class="cm-variable">a</span><span class="cm-punctuation">,</span> <span class="cm-variable">b</span><span class="cm-punctuation">)</span> <span class="cm-operator">-&gt;</span> <span class="cm-variable">a</span> <span class="cm-operator">+</span> <span class="cm-variable">b</span>

<span class="cm-variable">add_</span> <span class="cm-punctuation">=</span> <span class="cm-variable">defaultArguments</span><span class="cm-punctuation">(</span><span class="cm-variable">add</span><span class="cm-punctuation">,</span> <span class="cm-punctuation">{</span><span class="cm-variable">b</span><span class="cm-punctuation">:</span> <span class="cm-number">9</span><span class="cm-punctuation">}</span><span class="cm-punctuation">)</span>
<span class="cm-variable">add_</span> <span class="cm-number">10</span> <span class="cm-comment"># returns 19</span>
<span class="cm-variable">add_</span> <span class="cm-number">10</span><span class="cm-punctuation">,</span> <span class="cm-number">7</span> <span class="cm-comment"># returns 17</span>
<span class="cm-variable">add_</span><span class="cm-punctuation">(</span><span class="cm-punctuation">)</span> <span class="cm-comment"># returns NaN</span>

<span class="cm-variable">add_</span> <span class="cm-punctuation">=</span> <span class="cm-variable">defaultArguments</span><span class="cm-punctuation">(</span><span class="cm-variable">add_</span><span class="cm-punctuation">,</span> <span class="cm-punctuation">{</span><span class="cm-variable">b</span><span class="cm-punctuation">:</span> <span class="cm-number">3</span><span class="cm-punctuation">,</span> <span class="cm-variable">a</span><span class="cm-punctuation">:</span> <span class="cm-number">2</span><span class="cm-punctuation">}</span><span class="cm-punctuation">)</span>
<span class="cm-variable">add_</span> <span class="cm-number">10</span> <span class="cm-comment"># returns 13 now</span>
<span class="cm-variable">add_</span><span class="cm-punctuation">(</span><span class="cm-punctuation">)</span> <span class="cm-comment"># returns 5</span>

<span class="cm-variable">add_</span> <span class="cm-punctuation">=</span> <span class="cm-variable">defaultArguments</span><span class="cm-punctuation">(</span><span class="cm-variable">add_</span><span class="cm-punctuation">,</span> <span class="cm-punctuation">{</span><span class="cm-variable">c</span><span class="cm-punctuation">:</span><span class="cm-number">3</span><span class="cm-punctuation">}</span><span class="cm-punctuation">)</span> <span class="cm-comment"># doesn't do anything, since c isn't an argument of add_</span>
<span class="cm-variable">add_</span> <span class="cm-number">10</span> <span class="cm-comment"># returns NaN</span>
<span class="cm-variable">add_</span> <span class="cm-number">10</span><span class="cm-punctuation">,</span> <span class="cm-number">10</span> <span class="cm-comment"># returns 20</span>
</code><div class="open_grepper_editor" title="Edit &amp; Save To Grepper"></div></pre>
<p>HINT:  This problem requires using <code>Fuction.prototype.toString()</code> in order to extract a function's argument list</p>
</div>