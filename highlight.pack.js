/*! highlight.js v9.15.10 | BSD3 License | git.io/hljslicense */ ! function (e) {
	var n = "object" == typeof window && window || "object" == typeof self && self;
	"undefined" == typeof exports || exports.nodeType ? n && (n.hljs = e({}), "function" == typeof define && define.amd && define([], function () {
		return n.hljs
	})) : e(exports)
}(function (a) {
	var f = [],
		u = Object.keys,
		N = {},
		c = {},
		n = /^(no-?highlight|plain|text)$/i,
		s = /\blang(?:uage)?-([\w-]+)\b/i,
		t = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
		r = {
			case_insensitive: "cI",
			lexemes: "l",
			contains: "c",
			keywords: "k",
			subLanguage: "sL",
			className: "cN",
			begin: "b",
			beginKeywords: "bK",
			end: "e",
			endsWithParent: "eW",
			illegal: "i",
			excludeBegin: "eB",
			excludeEnd: "eE",
			returnBegin: "rB",
			returnEnd: "rE",
			relevance: "r",
			variants: "v",
			IDENT_RE: "IR",
			UNDERSCORE_IDENT_RE: "UIR",
			NUMBER_RE: "NR",
			C_NUMBER_RE: "CNR",
			BINARY_NUMBER_RE: "BNR",
			RE_STARTERS_RE: "RSR",
			BACKSLASH_ESCAPE: "BE",
			APOS_STRING_MODE: "ASM",
			QUOTE_STRING_MODE: "QSM",
			PHRASAL_WORDS_MODE: "PWM",
			C_LINE_COMMENT_MODE: "CLCM",
			C_BLOCK_COMMENT_MODE: "CBCM",
			HASH_COMMENT_MODE: "HCM",
			NUMBER_MODE: "NM",
			C_NUMBER_MODE: "CNM",
			BINARY_NUMBER_MODE: "BNM",
			CSS_NUMBER_MODE: "CSSNM",
			REGEXP_MODE: "RM",
			TITLE_MODE: "TM",
			UNDERSCORE_TITLE_MODE: "UTM",
			COMMENT: "C",
			beginRe: "bR",
			endRe: "eR",
			illegalRe: "iR",
			lexemesRe: "lR",
			terminators: "t",
			terminator_end: "tE"
		},
		b = "</span>",
		h = {
			classPrefix: "hljs-",
			tabReplace: null,
			useBR: !1,
			languages: void 0
		};

	function _(e) {
		return e.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">")
	}

	function E(e) {
		return e.nodeName.toLowerCase()
	}

	function v(e, n) {
		var t = e && e.exec(n);
		return t && 0 === t.index
	}

	function l(e) {
		return n.test(e)
	}

	function g(e) {
		var n, t = {},
			r = Array.prototype.slice.call(arguments, 1);
		for (n in e) t[n] = e[n];
		return r.forEach(function (e) {
			for (n in e) t[n] = e[n]
		}), t
	}

	function R(e) {
		var a = [];
		return function e(n, t) {
			for (var r = n.firstChild; r; r = r.nextSibling) 3 === r.nodeType ? t += r.nodeValue.length : 1 === r.nodeType && (a.push({
				event: "start",
				offset: t,
				node: r
			}), t = e(r, t), E(r).match(/br|hr|img|input/) || a.push({
				event: "stop",
				offset: t,
				node: r
			}));
			return t
		}(e, 0), a
	}

	function i(e) {
		if (r && !e.langApiRestored) {
			for (var n in e.langApiRestored = !0, r) e[n] && (e[r[n]] = e[n]);
			(e.c || []).concat(e.v || []).forEach(i)
		}
	}

	function m(o) {
		function s(e) {
			return e && e.source || e
		}

		function c(e, n) {
			return new RegExp(s(e), "m" + (o.cI ? "i" : "") + (n ? "g" : ""))
		}! function n(t, e) {
			if (!t.compiled) {
				if (t.compiled = !0, t.k = t.k || t.bK, t.k) {
					function r(t, e) {
						o.cI && (e = e.toLowerCase()), e.split(" ").forEach(function (e) {
							var n = e.split("|");
							a[n[0]] = [t, n[1] ? Number(n[1]) : 1]
						})
					}
					var a = {};
					"string" == typeof t.k ? r("keyword", t.k) : u(t.k).forEach(function (e) {
						r(e, t.k[e])
					}), t.k = a
				}
				t.lR = c(t.l || /\w+/, !0), e && (t.bK && (t.b = "\\b(" + t.bK.split(" ").join("|") + ")\\b"), t.b || (t.b = /\B|\b/), t.bR = c(t.b), t.endSameAsBegin && (t.e = t.b), t.e || t.eW || (t.e = /\B|\b/), t.e && (t.eR = c(t.e)), t.tE = s(t.e) || "", t.eW && e.tE && (t.tE += (t.e ? "|" : "") + e.tE)), t.i && (t.iR = c(t.i)), null == t.r && (t.r = 1), t.c || (t.c = []), t.c = Array.prototype.concat.apply([], t.c.map(function (e) {
					return function (n) {
						return n.v && !n.cached_variants && (n.cached_variants = n.v.map(function (e) {
							return g(n, {
								v: null
							}, e)
						})), n.cached_variants || n.eW && [g(n)] || [n]
					}("self" === e ? t : e)
				})), t.c.forEach(function (e) {
					n(e, t)
				}), t.starts && n(t.starts, e);
				var i = t.c.map(function (e) {
					return e.bK ? "\\.?(?:" + e.b + ")\\.?" : e.b
				}).concat([t.tE, t.i]).map(s).filter(Boolean);
				t.t = i.length ? c(function (e, n) {
					for (var t = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, r = 0, a = "", i = 0; i < e.length; i++) {
						var o = r,
							c = s(e[i]);
						for (0 < i && (a += n); 0 < c.length;) {
							var u = t.exec(c);
							if (null == u) {
								a += c;
								break
							}
							a += c.substring(0, u.index), c = c.substring(u.index + u[0].length), "\\" == u[0][0] && u[1] ? a += "\\" + String(Number(u[1]) + o) : (a += u[0], "(" == u[0] && r++)
						}
					}
					return a
				}(i, "|"), !0) : {
					exec: function () {
						return null
					}
				}
			}
		}(o)
	}

	function C(e, n, i, t) {
		function c(e, n, t, r) {
			var a = '<span class="' + (r ? "" : h.classPrefix);
			return e ? (a += e + '">') + n + (t ? "" : b) : n
		}

		function o() {
			E += null != l.sL ? function () {
				var e = "string" == typeof l.sL;
				if (e && !N[l.sL]) return _(g);
				var n = e ? C(l.sL, g, !0, f[l.sL]) : O(g, l.sL.length ? l.sL : void 0);
				return 0 < l.r && (R += n.r), e && (f[l.sL] = n.top), c(n.language, n.value, !1, !0)
			}() : function () {
				var e, n, t, r, a, i, o;
				if (!l.k) return _(g);
				for (r = "", n = 0, l.lR.lastIndex = 0, t = l.lR.exec(g); t;) r += _(g.substring(n, t.index)), a = l, i = t, void 0, o = s.cI ? i[0].toLowerCase() : i[0], (e = a.k.hasOwnProperty(o) && a.k[o]) ? (R += e[1], r += c(e[0], _(t[0]))) : r += _(t[0]), n = l.lR.lastIndex, t = l.lR.exec(g);
				return r + _(g.substr(n))
			}(), g = ""
		}

		function u(e) {
			E += e.cN ? c(e.cN, "", !0) : "", l = Object.create(e, {
				parent: {
					value: l
				}
			})
		}

		function r(e, n) {
			if (g += e, null == n) return o(), 0;
			var t = function (e, n) {
				var t, r, a;
				for (t = 0, r = n.c.length; t < r; t++)
					if (v(n.c[t].bR, e)) return n.c[t].endSameAsBegin && (n.c[t].eR = (a = n.c[t].bR.exec(e)[0], new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"), "m"))), n.c[t]
			}(n, l);
			if (t) return t.skip ? g += n : (t.eB && (g += n), o(), t.rB || t.eB || (g = n)), u(t), t.rB ? 0 : n.length;
			var r = function e(n, t) {
				if (v(n.eR, t)) {
					for (; n.endsParent && n.parent;) n = n.parent;
					return n
				}
				if (n.eW) return e(n.parent, t)
			}(l, n);
			if (r) {
				var a = l;
				for (a.skip ? g += n : (a.rE || a.eE || (g += n), o(), a.eE && (g = n)); l.cN && (E += b), l.skip || l.sL || (R += l.r), (l = l.parent) !== r.parent;);
				return r.starts && (r.endSameAsBegin && (r.starts.eR = r.eR), u(r.starts)), a.rE ? 0 : n.length
			}
			if (function (e, n) {
					return !i && v(n.iR, e)
				}(n, l)) throw new Error('Illegal lexeme "' + n + '" for mode "' + (l.cN || "<unnamed>") + '"');
			return g += n, n.length || 1
		}
		var s = B(e);
		if (!s) throw new Error('Unknown language: "' + e + '"');
		m(s);
		var a, l = t || s,
			f = {},
			E = "";
		for (a = l; a !== s; a = a.parent) a.cN && (E = c(a.cN, "", !0) + E);
		var g = "",
			R = 0;
		try {
			for (var d, p, M = 0; l.t.lastIndex = M, d = l.t.exec(n);) p = r(n.substring(M, d.index), d[0]), M = d.index + p;
			for (r(n.substr(M)), a = l; a.parent; a = a.parent) a.cN && (E += b);
			return {
				r: R,
				value: E,
				language: e,
				top: l
			}
		} catch (e) {
			if (e.message && -1 !== e.message.indexOf("Illegal")) return {
				r: 0,
				value: _(n)
			};
			throw e
		}
	}

	function O(t, e) {
		e = e || h.languages || u(N);
		var r = {
				r: 0,
				value: _(t)
			},
			a = r;
		return e.filter(B).filter(M).forEach(function (e) {
			var n = C(e, t, !1);
			n.language = e, n.r > a.r && (a = n), n.r > r.r && (a = r, r = n)
		}), a.language && (r.second_best = a), r
	}

	function d(e) {
		return h.tabReplace || h.useBR ? e.replace(t, function (e, n) {
			return h.useBR && "\n" === e ? "<br>" : h.tabReplace ? n.replace(/\t/g, h.tabReplace) : ""
		}) : e
	}

	function o(e) {
		var n, t, r, a, i, o = function (e) {
			var n, t, r, a, i = e.className + " ";
			if (i += e.parentNode ? e.parentNode.className : "", t = s.exec(i)) return B(t[1]) ? t[1] : "no-highlight";
			for (n = 0, r = (i = i.split(/\s+/)).length; n < r; n++)
				if (l(a = i[n]) || B(a)) return a
		}(e);
		l(o) || (h.useBR ? (n = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n") : n = e, i = n.textContent, r = o ? C(o, i, !0) : O(i), (t = R(n)).length && ((a = document.createElementNS("http://www.w3.org/1999/xhtml", "div")).innerHTML = r.value, r.value = function (e, n, t) {
			var r = 0,
				a = "",
				i = [];

			function o() {
				return e.length && n.length ? e[0].offset !== n[0].offset ? e[0].offset < n[0].offset ? e : n : "start" === n[0].event ? e : n : e.length ? e : n
			}

			function c(e) {
				a += "<" + E(e) + f.map.call(e.attributes, function (e) {
					return " " + e.nodeName + '="' + _(e.value).replace('"', """) + '"'
				}).join("") + ">"
			}

			function u(e) {
				a += "</" + E(e) + ">"
			}

			function s(e) {
				("start" === e.event ? c : u)(e.node)
			}
			for (; e.length || n.length;) {
				var l = o();
				if (a += _(t.substring(r, l[0].offset)), r = l[0].offset, l === e) {
					for (i.reverse().forEach(u); s(l.splice(0, 1)[0]), (l = o()) === e && l.length && l[0].offset === r;);
					i.reverse().forEach(c)
				} else "start" === l[0].event ? i.push(l[0].node) : i.pop(), s(l.splice(0, 1)[0])
			}
			return a + _(t.substr(r))
		}(t, R(a), i)), r.value = d(r.value), e.innerHTML = r.value, e.className = function (e, n, t) {
			var r = n ? c[n] : t,
				a = [e.trim()];
			return e.match(/\bhljs\b/) || a.push("hljs"), -1 === e.indexOf(r) && a.push(r), a.join(" ").trim()
		}(e.className, o, r.language), e.result = {
			language: r.language,
			re: r.r
		}, r.second_best && (e.second_best = {
			language: r.second_best.language,
			re: r.second_best.r
		}))
	}

	function p() {
		if (!p.called) {
			p.called = !0;
			var e = document.querySelectorAll("pre code");
			f.forEach.call(e, o)
		}
	}

	function B(e) {
		return e = (e || "").toLowerCase(), N[e] || N[c[e]]
	}

	function M(e) {
		var n = B(e);
		return n && !n.disableAutodetect
	}
	return a.highlight = C, a.highlightAuto = O, a.fixMarkup = d, a.highlightBlock = o, a.configure = function (e) {
		h = g(h, e)
	}, a.initHighlighting = p, a.initHighlightingOnLoad = function () {
		addEventListener("DOMContentLoaded", p, !1), addEventListener("load", p, !1)
	}, a.registerLanguage = function (n, e) {
		var t = N[n] = e(a);
		i(t), t.aliases && t.aliases.forEach(function (e) {
			c[e] = n
		})
	}, a.listLanguages = function () {
		return u(N)
	}, a.getLanguage = B, a.autoDetection = M, a.inherit = g, a.IR = a.IDENT_RE = "[a-zA-Z]\\w*", a.UIR = a.UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*", a.NR = a.NUMBER_RE = "\\b\\d+(\\.\\d+)?", a.CNR = a.C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", a.BNR = a.BINARY_NUMBER_RE = "\\b(0b[01]+)", a.RSR = a.RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", a.BE = a.BACKSLASH_ESCAPE = {
		b: "\\\\[\\s\\S]",
		r: 0
	}, a.ASM = a.APOS_STRING_MODE = {
		cN: "string",
		b: "'",
		e: "'",
		i: "\\n",
		c: [a.BE]
	}, a.QSM = a.QUOTE_STRING_MODE = {
		cN: "string",
		b: '"',
		e: '"',
		i: "\\n",
		c: [a.BE]
	}, a.PWM = a.PHRASAL_WORDS_MODE = {
		b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
	}, a.C = a.COMMENT = function (e, n, t) {
		var r = a.inherit({
			cN: "comment",
			b: e,
			e: n,
			c: []
		}, t || {});
		return r.c.push(a.PWM), r.c.push({
			cN: "doctag",
			b: "(?:TODO|FIXME|NOTE|BUG|XXX):",
			r: 0
		}), r
	}, a.CLCM = a.C_LINE_COMMENT_MODE = a.C("//", "$"), a.CBCM = a.C_BLOCK_COMMENT_MODE = a.C("/\\*", "\\*/"), a.HCM = a.HASH_COMMENT_MODE = a.C("#", "$"), a.NM = a.NUMBER_MODE = {
		cN: "number",
		b: a.NR,
		r: 0
	}, a.CNM = a.C_NUMBER_MODE = {
		cN: "number",
		b: a.CNR,
		r: 0
	}, a.BNM = a.BINARY_NUMBER_MODE = {
		cN: "number",
		b: a.BNR,
		r: 0
	}, a.CSSNM = a.CSS_NUMBER_MODE = {
		cN: "number",
		b: a.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
		r: 0
	}, a.RM = a.REGEXP_MODE = {
		cN: "regexp",
		b: /\//,
		e: /\/[gimuy]*/,
		i: /\n/,
		c: [a.BE, {
			b: /\[/,
			e: /\]/,
			r: 0,
			c: [a.BE]
		}]
	}, a.TM = a.TITLE_MODE = {
		cN: "title",
		b: a.IR,
		r: 0
	}, a.UTM = a.UNDERSCORE_TITLE_MODE = {
		cN: "title",
		b: a.UIR,
		r: 0
	}, a.METHOD_GUARD = {
		b: "\\.\\s*" + a.UIR,
		r: 0
	}, a
});
hljs.registerLanguage("puppet", function (e) {
	var s = e.C("#", "$"),
		r = "([A-Za-z_]|::)(\\w|::)*",
		a = e.inherit(e.TM, {
			b: r
		}),
		i = {
			cN: "variable",
			b: "\\$" + r
		},
		o = {
			cN: "string",
			c: [e.BE, i],
			v: [{
				b: /'/,
				e: /'/
			}, {
				b: /"/,
				e: /"/
			}]
		};
	return {
		aliases: ["pp"],
		c: [s, i, o, {
			bK: "class",
			e: "\\{|;",
			i: /=/,
			c: [a, s]
		}, {
			bK: "define",
			e: /\{/,
			c: [{
				cN: "section",
				b: e.IR,
				endsParent: !0
			}]
		}, {
			b: e.IR + "\\s+\\{",
			rB: !0,
			e: /\S/,
			c: [{
				cN: "keyword",
				b: e.IR
			}, {
				b: /\{/,
				e: /\}/,
				k: {
					keyword: "and case default else elsif false if in import enherits node or true undef unless main settings $string ",
					literal: "alias audit before loglevel noop require subscribe tag owner ensure group mode name|0 changes context force incl lens load_path onlyif provider returns root show_diff type_check en_address ip_address realname command environment hour monute month monthday special target weekday creates cwd ogoutput refresh refreshonly tries try_sleep umask backup checksum content ctime force ignore links mtime purge recurse recurselimit replace selinux_ignore_defaults selrange selrole seltype seluser source souirce_permissions sourceselect validate_cmd validate_replacement allowdupe attribute_membership auth_membership forcelocal gid ia_load_module members system host_aliases ip allowed_trunk_vlans description device_url duplex encapsulation etherchannel native_vlan speed principals allow_root auth_class auth_type authenticate_user k_of_n mechanisms rule session_owner shared options device fstype enable hasrestart directory present absent link atboot blockdevice device dump pass remounts poller_tag use message withpath adminfile allow_virtual allowcdrom category configfiles flavor install_options instance package_settings platform responsefile status uninstall_options vendor unless_system_user unless_uid binary control flags hasstatus manifest pattern restart running start stop allowdupe auths expiry gid groups home iterations key_membership keys managehome membership password password_max_age password_min_age profile_membership profiles project purge_ssh_keys role_membership roles salt shell uid baseurl cost descr enabled enablegroups exclude failovermethod gpgcheck gpgkey http_caching include includepkgs keepalive metadata_expire metalink mirrorlist priority protect proxy proxy_password proxy_username repo_gpgcheck s3_enabled skip_if_unavailable sslcacert sslclientcert sslclientkey sslverify mounted",
					built_in: "architecture augeasversion blockdevices boardmanufacturer boardproductname boardserialnumber cfkey dhcp_servers domain ec2_ ec2_userdata facterversion filesystems ldom fqdn gid hardwareisa hardwaremodel hostname id|0 interfaces ipaddress ipaddress_ ipaddress6 ipaddress6_ iphostnumber is_virtual kernel kernelmajversion kernelrelease kernelversion kernelrelease kernelversion lsbdistcodename lsbdistdescription lsbdistid lsbdistrelease lsbmajdistrelease lsbminordistrelease lsbrelease macaddress macaddress_ macosx_buildversion macosx_productname macosx_productversion macosx_productverson_major macosx_productversion_minor manufacturer memoryfree memorysize netmask metmask_ network_ operatingsystem operatingsystemmajrelease operatingsystemrelease osfamily partitions path physicalprocessorcount processor processorcount productname ps puppetversion rubysitedir rubyversion selinux selinux_config_mode selinux_config_policy selinux_current_mode selinux_current_mode selinux_enforced selinux_policyversion serialnumber sp_ sshdsakey sshecdsakey sshrsakey swapencrypted swapfree swapsize timezone type uniqueid uptime uptime_days uptime_hours uptime_seconds uuid virtual vlans xendomains zfs_version zonenae zones zpool_version"
				},
				r: 0,
				c: [o, s, {
					b: "[a-zA-Z_]+\\s*=>",
					rB: !0,
					e: "=>",
					c: [{
						cN: "attr",
						b: e.IR
					}]
				}, {
					cN: "number",
					b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
					r: 0
				}, i]
			}],
			r: 0
		}]
	}
});
hljs.registerLanguage("bash", function (e) {
	var t = {
			cN: "variable",
			v: [{
				b: /\$[\w\d#@][\w\d_]*/
			}, {
				b: /\$\{(.*?)}/
			}]
		},
		s = {
			cN: "string",
			b: /"/,
			e: /"/,
			c: [e.BE, t, {
				cN: "variable",
				b: /\$\(/,
				e: /\)/,
				c: [e.BE]
			}]
		};
	return {
		aliases: ["sh", "zsh"],
		l: /\b-?[a-z\._]+\b/,
		k: {
			keyword: "if then else elif fi for while in do done case esac function",
			literal: "true false",
			built_in: "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
			_: "-ne -eq -lt -gt -f -d -e -s -l -a"
		},
		c: [{
			cN: "meta",
			b: /^#![^\n]+sh\s*$/,
			r: 10
		}, {
			cN: "function",
			b: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
			rB: !0,
			c: [e.inherit(e.TM, {
				b: /\w[\w\d_]*/
			})],
			r: 0
		}, e.HCM, s, {
			cN: "",
			b: /\\"/
		}, {
			cN: "string",
			b: /'/,
			e: /'/
		}, t]
	}
});
hljs.registerLanguage("shell", function (s) {
	return {
		aliases: ["console"],
		c: [{
			cN: "meta",
			b: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]",
			starts: {
				e: "$",
				sL: "bash"
			}
		}]
	}
});
hljs.registerLanguage("properties", function (r) {
	var t = "[ \\t\\f]*",
		e = "(" + t + "[:=]" + t + "|[ \\t\\f]+)",
		s = "([^\\\\\\W:= \\t\\f\\n]|\\\\.)+",
		n = "([^\\\\:= \\t\\f\\n]|\\\\.)+",
		a = {
			e: e,
			r: 0,
			starts: {
				cN: "string",
				e: /$/,
				r: 0,
				c: [{
					b: "\\\\\\n"
				}]
			}
		};
	return {
		cI: !0,
		i: /\S/,
		c: [r.C("^\\s*[!#]", "$"), {
			b: s + e,
			rB: !0,
			c: [{
				cN: "attr",
				b: s,
				endsParent: !0,
				r: 0
			}],
			starts: a
		}, {
			b: n + e,
			rB: !0,
			r: 0,
			c: [{
				cN: "meta",
				b: n,
				endsParent: !0,
				r: 0
			}],
			starts: a
		}, {
			cN: "attr",
			r: 0,
			b: n + t + "$"
		}]
	}
});
hljs.registerLanguage("powershell", function (e) {
	var t = {
			b: "`[\\s\\S]",
			r: 0
		},
		o = {
			cN: "variable",
			v: [{
				b: /\$[\w\d][\w\d_:]*/
			}]
		},
		r = {
			cN: "string",
			v: [{
				b: /"/,
				e: /"/
			}, {
				b: /@"/,
				e: /^"@/
			}],
			c: [t, o, {
				cN: "variable",
				b: /\$[A-z]/,
				e: /[^A-z]/
			}]
		},
		i = e.inherit(e.C(null, null), {
			v: [{
				b: /#/,
				e: /$/
			}, {
				b: /<#/,
				e: /#>/
			}],
			c: [{
				cN: "doctag",
				v: [{
					b: /\.(synopsis|description|example|inputs|outputs|notes|link|component|role|functionality)/
				}, {
					b: /\.(parameter|forwardhelptargetname|forwardhelpcategory|remotehelprunspace|externalhelp)\s+\S+/
				}]
			}]
		});
	return {
		aliases: ["ps"],
		l: /-?[A-z\.\-]+/,
		cI: !0,
		k: {
			keyword: "if else foreach return function do while until elseif begin for trap data dynamicparam end break throw param continue finally in switch exit filter try process catchValidateNoCircleInNodeResources ValidateNodeExclusiveResources ValidateNodeManager ValidateNodeResources ValidateNodeResourceSource ValidateNoNameNodeResources ThrowError IsHiddenResourceIsPatternMatched ",
			built_in: "Add-Computer Add-Content Add-History Add-JobTrigger Add-Member Add-PSSnapin Add-Type Checkpoint-Computer Clear-Content Clear-EventLog Clear-History Clear-Host Clear-Item Clear-ItemProperty Clear-Variable Compare-Object Complete-Transaction Connect-PSSession Connect-WSMan Convert-Path ConvertFrom-Csv ConvertFrom-Json ConvertFrom-SecureString ConvertFrom-StringData ConvertTo-Csv ConvertTo-Html ConvertTo-Json ConvertTo-SecureString ConvertTo-Xml Copy-Item Copy-ItemProperty Debug-Process Disable-ComputerRestore Disable-JobTrigger Disable-PSBreakpoint Disable-PSRemoting Disable-PSSessionConfiguration Disable-WSManCredSSP Disconnect-PSSession Disconnect-WSMan Disable-ScheduledJob Enable-ComputerRestore Enable-JobTrigger Enable-PSBreakpoint Enable-PSRemoting Enable-PSSessionConfiguration Enable-ScheduledJob Enable-WSManCredSSP Enter-PSSession Exit-PSSession Export-Alias Export-Clixml Export-Console Export-Counter Export-Csv Export-FormatData Export-ModuleMember Export-PSSession ForEach-Object Format-Custom Format-List Format-Table Format-Wide Get-Acl Get-Alias Get-AuthenticodeSignature Get-ChildItem Get-Command Get-ComputerRestorePoint Get-Content Get-ControlPanelItem Get-Counter Get-Credential Get-Culture Get-Date Get-Event Get-EventLog Get-EventSubscriber Get-ExecutionPolicy Get-FormatData Get-Host Get-HotFix Get-Help Get-History Get-IseSnippet Get-Item Get-ItemProperty Get-Job Get-JobTrigger Get-Location Get-Member Get-Module Get-PfxCertificate Get-Process Get-PSBreakpoint Get-PSCallStack Get-PSDrive Get-PSProvider Get-PSSession Get-PSSessionConfiguration Get-PSSnapin Get-Random Get-ScheduledJob Get-ScheduledJobOption Get-Service Get-TraceSource Get-Transaction Get-TypeData Get-UICulture Get-Unique Get-Variable Get-Verb Get-WinEvent Get-WmiObject Get-WSManCredSSP Get-WSManInstance Group-Object Import-Alias Import-Clixml Import-Counter Import-Csv Import-IseSnippet Import-LocalizedData Import-PSSession Import-Module Invoke-AsWorkflow Invoke-Command Invoke-Expression Invoke-History Invoke-Item Invoke-RestMethod Invoke-WebRequest Invoke-WmiMethod Invoke-WSManAction Join-Path Limit-EventLog Measure-Command Measure-Object Move-Item Move-ItemProperty New-Alias New-Event New-EventLog New-IseSnippet New-Item New-ItemProperty New-JobTrigger New-Object New-Module New-ModuleManifest New-PSDrive New-PSSession New-PSSessionConfigurationFile New-PSSessionOption New-PSTransportOption New-PSWorkflowExecutionOption New-PSWorkflowSession New-ScheduledJobOption New-Service New-TimeSpan New-Variable New-WebServiceProxy New-WinEvent New-WSManInstance New-WSManSessionOption Out-Default Out-File Out-GridView Out-Host Out-Null Out-Printer Out-String Pop-Location Push-Location Read-Host Receive-Job Register-EngineEvent Register-ObjectEvent Register-PSSessionConfiguration Register-ScheduledJob Register-WmiEvent Remove-Computer Remove-Event Remove-EventLog Remove-Item Remove-ItemProperty Remove-Job Remove-JobTrigger Remove-Module Remove-PSBreakpoint Remove-PSDrive Remove-PSSession Remove-PSSnapin Remove-TypeData Remove-Variable Remove-WmiObject Remove-WSManInstance Rename-Computer Rename-Item Rename-ItemProperty Reset-ComputerMachinePassword Resolve-Path Restart-Computer Restart-Service Restore-Computer Resume-Job Resume-Service Save-Help Select-Object Select-String Select-Xml Send-MailMessage Set-Acl Set-Alias Set-AuthenticodeSignature Set-Content Set-Date Set-ExecutionPolicy Set-Item Set-ItemProperty Set-JobTrigger Set-Location Set-PSBreakpoint Set-PSDebug Set-PSSessionConfiguration Set-ScheduledJob Set-ScheduledJobOption Set-Service Set-StrictMode Set-TraceSource Set-Variable Set-WmiInstance Set-WSManInstance Set-WSManQuickConfig Show-Command Show-ControlPanelItem Show-EventLog Sort-Object Split-Path Start-Job Start-Process Start-Service Start-Sleep Start-Transaction Start-Transcript Stop-Computer Stop-Job Stop-Process Stop-Service Stop-Transcript Suspend-Job Suspend-Service Tee-Object Test-ComputerSecureChannel Test-Connection Test-ModuleManifest Test-Path Test-PSSessionConfigurationFile Trace-Command Unblock-File Undo-Transaction Unregister-Event Unregister-PSSessionConfiguration Unregister-ScheduledJob Update-FormatData Update-Help Update-List Update-TypeData Use-Transaction Wait-Event Wait-Job Wait-Process Where-Object Write-Debug Write-Error Write-EventLog Write-Host Write-Output Write-Progress Write-Verbose Write-Warning Add-MDTPersistentDrive Disable-MDTMonitorService Enable-MDTMonitorService Get-MDTDeploymentShareStatistics Get-MDTMonitorData Get-MDTOperatingSystemCatalog Get-MDTPersistentDrive Import-MDTApplication Import-MDTDriver Import-MDTOperatingSystem Import-MDTPackage Import-MDTTaskSequence New-MDTDatabase Remove-MDTMonitorData Remove-MDTPersistentDrive Restore-MDTPersistentDrive Set-MDTMonitorData Test-MDTDeploymentShare Test-MDTMonitorData Update-MDTDatabaseSchema Update-MDTDeploymentShare Update-MDTLinkedDS Update-MDTMedia Add-VamtProductKey Export-VamtData Find-VamtManagedMachine Get-VamtConfirmationId Get-VamtProduct Get-VamtProductKey Import-VamtData Initialize-VamtData Install-VamtConfirmationId Install-VamtProductActivation Install-VamtProductKey Update-VamtProduct Add-CIDatastore Add-KeyManagementServer Add-NodeKeys Add-NsxDynamicCriteria Add-NsxDynamicMemberSet Add-NsxEdgeInterfaceAddress Add-NsxFirewallExclusionListMember Add-NsxFirewallRuleMember Add-NsxIpSetMember Add-NsxLicense Add-NsxLoadBalancerPoolMember Add-NsxLoadBalancerVip Add-NsxSecondaryManager Add-NsxSecurityGroupMember Add-NsxSecurityPolicyRule Add-NsxSecurityPolicyRuleGroup Add-NsxSecurityPolicyRuleService Add-NsxServiceGroupMember Add-NsxTransportZoneMember Add-PassthroughDevice Add-VDSwitchPhysicalNetworkAdapter Add-VDSwitchVMHost Add-VMHost Add-VMHostNtpServer Add-VirtualSwitchPhysicalNetworkAdapter Add-XmlElement Add-vRACustomForm Add-vRAPrincipalToTenantRole Add-vRAReservationNetwork Add-vRAReservationStorage Clear-NsxEdgeInterface Clear-NsxManagerTimeSettings Compress-Archive Connect-CIServer Connect-CisServer Connect-HCXServer Connect-NIServer Connect-NsxLogicalSwitch Connect-NsxServer Connect-NsxtServer Connect-SrmServer Connect-VIServer Connect-Vmc Connect-vRAServer Connect-vRNIServer ConvertFrom-Markdown ConvertTo-MOFInstance Copy-DatastoreItem Copy-HardDisk Copy-NsxEdge Copy-VDisk Copy-VMGuestFile Debug-Runspace Disable-NsxEdgeSsh Disable-RunspaceDebug Disable-vRNIDataSource Disconnect-CIServer Disconnect-CisServer Disconnect-HCXServer Disconnect-NsxLogicalSwitch Disconnect-NsxServer Disconnect-NsxtServer Disconnect-SrmServer Disconnect-VIServer Disconnect-Vmc Disconnect-vRAServer Disconnect-vRNIServer Dismount-Tools Enable-NsxEdgeSsh Enable-RunspaceDebug Enable-vRNIDataSource Expand-Archive Export-NsxObject Export-SpbmStoragePolicy Export-VApp Export-VDPortGroup Export-VDSwitch Export-VMHostProfile Export-vRAIcon Export-vRAPackage Find-Command Find-DscResource Find-Module Find-NsxWhereVMUsed Find-Package Find-PackageProvider Find-RoleCapability Find-Script Format-Hex Format-VMHostDiskPartition Format-XML Generate-VersionInfo Get-AdvancedSetting Get-AlarmAction Get-AlarmActionTrigger Get-AlarmDefinition Get-Annotation Get-CDDrive Get-CIAccessControlRule Get-CIDatastore Get-CINetworkAdapter Get-CIRole Get-CIUser Get-CIVApp Get-CIVAppNetwork Get-CIVAppStartRule Get-CIVAppTemplate Get-CIVM Get-CIVMTemplate Get-CIView Get-Catalog Get-CisCommand Get-CisService Get-CloudCommand Get-Cluster Get-CompatibleVersionAddtionaPropertiesStr Get-ComplexResourceQualifier Get-ConfigurationErrorCount Get-ContentLibraryItem Get-CustomAttribute Get-DSCResourceModules Get-Datacenter Get-Datastore Get-DatastoreCluster Get-DrsClusterGroup Get-DrsRecommendation Get-DrsRule Get-DrsVMHostRule Get-DscResource Get-EdgeGateway Get-EncryptedPassword Get-ErrorReport Get-EsxCli Get-EsxTop Get-ExternalNetwork Get-FileHash Get-FloppyDrive Get-Folder Get-HAPrimaryVMHost Get-HCXAppliance Get-HCXApplianceCompute Get-HCXApplianceDVS Get-HCXApplianceDatastore Get-HCXApplianceNetwork Get-HCXContainer Get-HCXDatastore Get-HCXGateway Get-HCXInterconnectStatus Get-HCXJob Get-HCXMigration Get-HCXNetwork Get-HCXNetworkExtension Get-HCXReplication Get-HCXReplicationSnapshot Get-HCXService Get-HCXSite Get-HCXSitePairing Get-HCXVM Get-HardDisk Get-IScsiHbaTarget Get-InnerMostErrorRecord Get-InstallPath Get-InstalledModule Get-InstalledScript Get-Inventory Get-ItemPropertyValue Get-KeyManagementServer Get-KmipClientCertificate Get-KmsCluster Get-Log Get-LogType Get-MarkdownOption Get-Media Get-MofInstanceName Get-MofInstanceText Get-NetworkAdapter Get-NetworkPool Get-NfsUser Get-NicTeamingPolicy Get-NsxApplicableMember Get-NsxApplicableSecurityAction Get-NsxBackingDVSwitch Get-NsxBackingPortGroup Get-NsxCliDfwAddrSet Get-NsxCliDfwFilter Get-NsxCliDfwRule Get-NsxClusterStatus Get-NsxController Get-NsxDynamicCriteria Get-NsxDynamicMemberSet Get-NsxEdge Get-NsxEdgeBgp Get-NsxEdgeBgpNeighbour Get-NsxEdgeCertificate Get-NsxEdgeCsr Get-NsxEdgeFirewall Get-NsxEdgeFirewallRule Get-NsxEdgeInterface Get-NsxEdgeInterfaceAddress Get-NsxEdgeNat Get-NsxEdgeNatRule Get-NsxEdgeOspf Get-NsxEdgeOspfArea Get-NsxEdgeOspfInterface Get-NsxEdgePrefix Get-NsxEdgeRedistributionRule Get-NsxEdgeRouting Get-NsxEdgeStaticRoute Get-NsxEdgeSubInterface Get-NsxFirewallExclusionListMember Get-NsxFirewallGlobalConfiguration Get-NsxFirewallPublishStatus Get-NsxFirewallRule Get-NsxFirewallRuleMember Get-NsxFirewallSavedConfiguration Get-NsxFirewallSection Get-NsxFirewallThreshold Get-NsxIpPool Get-NsxIpSet Get-NsxLicense Get-NsxLoadBalancer Get-NsxLoadBalancerApplicationProfile Get-NsxLoadBalancerApplicationRule Get-NsxLoadBalancerMonitor Get-NsxLoadBalancerPool Get-NsxLoadBalancerPoolMember Get-NsxLoadBalancerStats Get-NsxLoadBalancerVip Get-NsxLogicalRouter Get-NsxLogicalRouterBgp Get-NsxLogicalRouterBgpNeighbour Get-NsxLogicalRouterBridge Get-NsxLogicalRouterBridging Get-NsxLogicalRouterInterface Get-NsxLogicalRouterOspf Get-NsxLogicalRouterOspfArea Get-NsxLogicalRouterOspfInterface Get-NsxLogicalRouterPrefix Get-NsxLogicalRouterRedistributionRule Get-NsxLogicalRouterRouting Get-NsxLogicalRouterStaticRoute Get-NsxLogicalSwitch Get-NsxMacSet Get-NsxManagerBackup Get-NsxManagerCertificate Get-NsxManagerComponentSummary Get-NsxManagerNetwork Get-NsxManagerRole Get-NsxManagerSsoConfig Get-NsxManagerSyncStatus Get-NsxManagerSyslogServer Get-NsxManagerSystemSummary Get-NsxManagerTimeSettings Get-NsxManagerVcenterConfig Get-NsxSecondaryManager Get-NsxSecurityGroup Get-NsxSecurityGroupEffectiveIpAddress Get-NsxSecurityGroupEffectiveMacAddress Get-NsxSecurityGroupEffectiveMember Get-NsxSecurityGroupEffectiveVirtualMachine Get-NsxSecurityGroupEffectiveVnic Get-NsxSecurityGroupMemberTypes Get-NsxSecurityPolicy Get-NsxSecurityPolicyHighestUsedPrecedence Get-NsxSecurityPolicyRule Get-NsxSecurityTag Get-NsxSecurityTagAssignment Get-NsxSegmentIdRange Get-NsxService Get-NsxServiceDefinition Get-NsxServiceGroup Get-NsxServiceGroupMember Get-NsxServiceProfile Get-NsxSpoofguardNic Get-NsxSpoofguardPolicy Get-NsxSslVpn Get-NsxSslVpnAuthServer Get-NsxSslVpnClientInstallationPackage Get-NsxSslVpnIpPool Get-NsxSslVpnPrivateNetwork Get-NsxSslVpnUser Get-NsxTransportZone Get-NsxUserRole Get-NsxVdsContext Get-NsxtPolicyService Get-NsxtService Get-OSCustomizationNicMapping Get-OSCustomizationSpec Get-Org Get-OrgNetwork Get-OrgVdc Get-OrgVdcNetwork Get-OvfConfiguration Get-PSCurrentConfigurationNode Get-PSDefaultConfigurationDocument Get-PSMetaConfigDocumentInstVersionInfo Get-PSMetaConfigurationProcessed Get-PSReadLineKeyHandler Get-PSReadLineOption Get-PSRepository Get-PSTopConfigurationName Get-PSVersion Get-Package Get-PackageProvider Get-PackageSource Get-PassthroughDevice Get-PositionInfo Get-PowerCLICommunity Get-PowerCLIConfiguration Get-PowerCLIHelp Get-PowerCLIVersion Get-PowerNsxVersion Get-ProviderVdc Get-PublicKeyFromFile Get-PublicKeyFromStore Get-ResourcePool Get-Runspace Get-RunspaceDebug Get-ScsiController Get-ScsiLun Get-ScsiLunPath Get-SecurityInfo Get-SecurityPolicy Get-Snapshot Get-SpbmCapability Get-SpbmCompatibleStorage Get-SpbmEntityConfiguration Get-SpbmFaultDomain Get-SpbmPointInTimeReplica Get-SpbmReplicationGroup Get-SpbmReplicationPair Get-SpbmStoragePolicy Get-Stat Get-StatInterval Get-StatType Get-Tag Get-TagAssignment Get-TagCategory Get-Task Get-Template Get-TimeZone Get-Uptime Get-UsbDevice Get-VAIOFilter Get-VApp Get-VDBlockedPolicy Get-VDPort Get-VDPortgroup Get-VDPortgroupOverridePolicy Get-VDSecurityPolicy Get-VDSwitch Get-VDSwitchPrivateVlan Get-VDTrafficShapingPolicy Get-VDUplinkLacpPolicy Get-VDUplinkTeamingPolicy Get-VDisk Get-VIAccount Get-VICommand Get-VICredentialStoreItem Get-VIEvent Get-VIObjectByVIView Get-VIPermission Get-VIPrivilege Get-VIProperty Get-VIRole Get-VM Get-VMGuest Get-VMHost Get-VMHostAccount Get-VMHostAdvancedConfiguration Get-VMHostAuthentication Get-VMHostAvailableTimeZone Get-VMHostDiagnosticPartition Get-VMHostDisk Get-VMHostDiskPartition Get-VMHostFirewallDefaultPolicy Get-VMHostFirewallException Get-VMHostFirmware Get-VMHostHardware Get-VMHostHba Get-VMHostModule Get-VMHostNetwork Get-VMHostNetworkAdapter Get-VMHostNtpServer Get-VMHostPatch Get-VMHostPciDevice Get-VMHostProfile Get-VMHostProfileImageCacheConfiguration Get-VMHostProfileRequiredInput Get-VMHostProfileStorageDeviceConfiguration Get-VMHostProfileUserConfiguration Get-VMHostProfileVmPortGroupConfiguration Get-VMHostRoute Get-VMHostService Get-VMHostSnmp Get-VMHostStartPolicy Get-VMHostStorage Get-VMHostSysLogServer Get-VMQuestion Get-VMResourceConfiguration Get-VMStartPolicy Get-VTpm Get-VTpmCSR Get-VTpmCertificate Get-VasaProvider Get-VasaStorageArray Get-View Get-VirtualPortGroup Get-VirtualSwitch Get-VmcSddcNetworkService Get-VmcService Get-VsanClusterConfiguration Get-VsanComponent Get-VsanDisk Get-VsanDiskGroup Get-VsanEvacuationPlan Get-VsanFaultDomain Get-VsanIscsiInitiatorGroup Get-VsanIscsiInitiatorGroupTargetAssociation Get-VsanIscsiLun Get-VsanIscsiTarget Get-VsanObject Get-VsanResyncingComponent Get-VsanRuntimeInfo Get-VsanSpaceUsage Get-VsanStat Get-VsanView Get-vRAApplianceServiceStatus Get-vRAAuthorizationRole Get-vRABlueprint Get-vRABusinessGroup Get-vRACatalogItem Get-vRACatalogItemRequestTemplate Get-vRACatalogPrincipal Get-vRAComponentRegistryService Get-vRAComponentRegistryServiceEndpoint Get-vRAComponentRegistryServiceStatus Get-vRAContent Get-vRAContentData Get-vRAContentType Get-vRACustomForm Get-vRAEntitledCatalogItem Get-vRAEntitledService Get-vRAEntitlement Get-vRAExternalNetworkProfile Get-vRAGroupPrincipal Get-vRAIcon Get-vRANATNetworkProfile Get-vRANetworkProfileIPAddressList Get-vRANetworkProfileIPRangeSummary Get-vRAPackage Get-vRAPackageContent Get-vRAPropertyDefinition Get-vRAPropertyGroup Get-vRARequest Get-vRARequestDetail Get-vRAReservation Get-vRAReservationComputeResource Get-vRAReservationComputeResourceMemory Get-vRAReservationComputeResourceNetwork Get-vRAReservationComputeResourceResourcePool Get-vRAReservationComputeResourceStorage Get-vRAReservationPolicy Get-vRAReservationTemplate Get-vRAReservationType Get-vRAResource Get-vRAResourceAction Get-vRAResourceActionRequestTemplate Get-vRAResourceMetric Get-vRAResourceOperation Get-vRAResourceType Get-vRARoutedNetworkProfile Get-vRAService Get-vRAServiceBlueprint Get-vRASourceMachine Get-vRAStorageReservationPolicy Get-vRATenant Get-vRATenantDirectory Get-vRATenantDirectoryStatus Get-vRATenantRole Get-vRAUserPrincipal Get-vRAUserPrincipalGroupMembership Get-vRAVersion Get-vRNIAPIVersion Get-vRNIApplication Get-vRNIApplicationTier Get-vRNIDataSource Get-vRNIDataSourceSNMPConfig Get-vRNIDatastore Get-vRNIDistributedSwitch Get-vRNIDistributedSwitchPortGroup Get-vRNIEntity Get-vRNIEntityName Get-vRNIFirewallRule Get-vRNIFlow Get-vRNIHost Get-vRNIHostVMKNic Get-vRNIIPSet Get-vRNIL2Network Get-vRNINSXManager Get-vRNINodes Get-vRNIProblem Get-vRNIRecommendedRules Get-vRNIRecommendedRulesNsxBundle Get-vRNISecurityGroup Get-vRNISecurityTag Get-vRNIService Get-vRNIServiceGroup Get-vRNIVM Get-vRNIVMvNIC Get-vRNIvCenter Get-vRNIvCenterCluster Get-vRNIvCenterDatacenter Get-vRNIvCenterFolder Grant-NsxSpoofguardNicApproval Import-CIVApp Import-CIVAppTemplate Import-NsxObject Import-PackageProvider Import-PowerShellDataFile Import-SpbmStoragePolicy Import-VApp Import-VMHostProfile Import-vRAContentData Import-vRAIcon Import-vRAPackage Initialize-ConfigurationRuntimeState Install-Module Install-NsxCluster Install-Package Install-PackageProvider Install-Script Install-VMHostPatch Invoke-DrsRecommendation Invoke-NsxCli Invoke-NsxClusterResolveAll Invoke-NsxManagerSync Invoke-NsxRestMethod Invoke-NsxWebRequest Invoke-VMHostProfile Invoke-VMScript Invoke-XpathQuery Invoke-vRADataCollection Invoke-vRARestMethod Invoke-vRATenantDirectorySync Invoke-vRNIRestMethod Join-String Mount-Tools Move-Cluster Move-Datacenter Move-Datastore Move-Folder Move-HardDisk Move-Inventory Move-NsxSecurityPolicyRule Move-ResourcePool Move-Template Move-VApp Move-VDisk Move-VM Move-VMHost New-AdvancedSetting New-AlarmAction New-AlarmActionTrigger New-CDDrive New-CIAccessControlRule New-CIVApp New-CIVAppNetwork New-CIVAppTemplate New-CIVM New-Cluster New-CustomAttribute New-Datacenter New-Datastore New-DatastoreCluster New-DatastoreDrive New-DrsClusterGroup New-DrsRule New-DrsVMHostRule New-DscChecksum New-FloppyDrive New-Folder New-Guid New-HCXAppliance New-HCXMigration New-HCXNetworkExtension New-HCXNetworkMapping New-HCXReplication New-HCXSitePairing New-HCXStaticRoute New-HardDisk New-IScsiHbaTarget New-KmipClientCertificate New-NetworkAdapter New-NfsUser New-NsxAddressSpec New-NsxClusterVxlanConfig New-NsxController New-NsxDynamicCriteriaSpec New-NsxEdge New-NsxEdgeBgpNeighbour New-NsxEdgeCsr New-NsxEdgeFirewallRule New-NsxEdgeInterfaceSpec New-NsxEdgeNatRule New-NsxEdgeOspfArea New-NsxEdgeOspfInterface New-NsxEdgePrefix New-NsxEdgeRedistributionRule New-NsxEdgeSelfSignedCertificate New-NsxEdgeStaticRoute New-NsxEdgeSubInterface New-NsxEdgeSubInterfaceSpec New-NsxFirewallRule New-NsxFirewallSavedConfiguration New-NsxFirewallSection New-NsxIpPool New-NsxIpSet New-NsxLoadBalancerApplicationProfile New-NsxLoadBalancerApplicationRule New-NsxLoadBalancerMemberSpec New-NsxLoadBalancerMonitor New-NsxLoadBalancerPool New-NsxLogicalRouter New-NsxLogicalRouterBgpNeighbour New-NsxLogicalRouterBridge New-NsxLogicalRouterInterface New-NsxLogicalRouterInterfaceSpec New-NsxLogicalRouterOspfArea New-NsxLogicalRouterOspfInterface New-NsxLogicalRouterPrefix New-NsxLogicalRouterRedistributionRule New-NsxLogicalRouterStaticRoute New-NsxLogicalSwitch New-NsxMacSet New-NsxManager New-NsxSecurityGroup New-NsxSecurityPolicy New-NsxSecurityPolicyAssignment New-NsxSecurityPolicyFirewallRuleSpec New-NsxSecurityPolicyGuestIntrospectionSpec New-NsxSecurityPolicyNetworkIntrospectionSpec New-NsxSecurityTag New-NsxSecurityTagAssignment New-NsxSegmentIdRange New-NsxService New-NsxServiceGroup New-NsxSpoofguardPolicy New-NsxSslVpnAuthServer New-NsxSslVpnClientInstallationPackage New-NsxSslVpnIpPool New-NsxSslVpnPrivateNetwork New-NsxSslVpnUser New-NsxTransportZone New-NsxVdsContext New-OSCustomizationNicMapping New-OSCustomizationSpec New-Org New-OrgNetwork New-OrgVdc New-OrgVdcNetwork New-ResourcePool New-ScriptFileInfo New-ScsiController New-Snapshot New-SpbmRule New-SpbmRuleSet New-SpbmStoragePolicy New-StatInterval New-Tag New-TagAssignment New-TagCategory New-Template New-TemporaryFile New-VAIOFilter New-VApp New-VDPortgroup New-VDSwitch New-VDSwitchPrivateVlan New-VDisk New-VICredentialStoreItem New-VIInventoryDrive New-VIPermission New-VIProperty New-VIRole New-VISamlSecurityContext New-VM New-VMHostAccount New-VMHostNetworkAdapter New-VMHostProfile New-VMHostProfileVmPortGroupConfiguration New-VMHostRoute New-VTpm New-VasaProvider New-VcsOAuthSecurityContext New-VirtualPortGroup New-VirtualSwitch New-VsanDisk New-VsanDiskGroup New-VsanFaultDomain New-VsanIscsiInitiatorGroup New-VsanIscsiInitiatorGroupTargetAssociation New-VsanIscsiLun New-VsanIscsiTarget New-vRABusinessGroup New-vRAEntitlement New-vRAExternalNetworkProfile New-vRAGroupPrincipal New-vRANATNetworkProfile New-vRANetworkProfileIPRangeDefinition New-vRAPackage New-vRAPropertyDefinition New-vRAPropertyGroup New-vRAReservation New-vRAReservationNetworkDefinition New-vRAReservationPolicy New-vRAReservationStorageDefinition New-vRARoutedNetworkProfile New-vRAService New-vRAStorageReservationPolicy New-vRATenant New-vRATenantDirectory New-vRAUserPrincipal New-vRNIApplication New-vRNIApplicationTier New-vRNIDataSource Open-VMConsoleWindow Publish-Module Publish-NsxSpoofguardPolicy Publish-Script Register-PSRepository Register-PackageSource Remove-AdvancedSetting Remove-AlarmAction Remove-AlarmActionTrigger Remove-Alias Remove-CDDrive Remove-CIAccessControlRule Remove-CIVApp Remove-CIVAppNetwork Remove-CIVAppTemplate Remove-Cluster Remove-CustomAttribute Remove-Datacenter Remove-Datastore Remove-DatastoreCluster Remove-DrsClusterGroup Remove-DrsRule Remove-DrsVMHostRule Remove-FloppyDrive Remove-Folder Remove-HCXAppliance Remove-HCXNetworkExtension Remove-HCXReplication Remove-HCXSitePairing Remove-HardDisk Remove-IScsiHbaTarget Remove-Inventory Remove-KeyManagementServer Remove-NetworkAdapter Remove-NfsUser Remove-NsxCluster Remove-NsxClusterVxlanConfig Remove-NsxController Remove-NsxDynamicCriteria Remove-NsxDynamicMemberSet Remove-NsxEdge Remove-NsxEdgeBgpNeighbour Remove-NsxEdgeCertificate Remove-NsxEdgeCsr Remove-NsxEdgeFirewallRule Remove-NsxEdgeInterfaceAddress Remove-NsxEdgeNatRule Remove-NsxEdgeOspfArea Remove-NsxEdgeOspfInterface Remove-NsxEdgePrefix Remove-NsxEdgeRedistributionRule Remove-NsxEdgeStaticRoute Remove-NsxEdgeSubInterface Remove-NsxFirewallExclusionListMember Remove-NsxFirewallRule Remove-NsxFirewallRuleMember Remove-NsxFirewallSavedConfiguration Remove-NsxFirewallSection Remove-NsxIpPool Remove-NsxIpSet Remove-NsxIpSetMember Remove-NsxLoadBalancerApplicationProfile Remove-NsxLoadBalancerMonitor Remove-NsxLoadBalancerPool Remove-NsxLoadBalancerPoolMember Remove-NsxLoadBalancerVip Remove-NsxLogicalRouter Remove-NsxLogicalRouterBgpNeighbour Remove-NsxLogicalRouterBridge Remove-NsxLogicalRouterInterface Remove-NsxLogicalRouterOspfArea Remove-NsxLogicalRouterOspfInterface Remove-NsxLogicalRouterPrefix Remove-NsxLogicalRouterRedistributionRule Remove-NsxLogicalRouterStaticRoute Remove-NsxLogicalSwitch Remove-NsxMacSet Remove-NsxSecondaryManager Remove-NsxSecurityGroup Remove-NsxSecurityGroupMember Remove-NsxSecurityPolicy Remove-NsxSecurityPolicyAssignment Remove-NsxSecurityPolicyRule Remove-NsxSecurityPolicyRuleGroup Remove-NsxSecurityPolicyRuleService Remove-NsxSecurityTag Remove-NsxSecurityTagAssignment Remove-NsxSegmentIdRange Remove-NsxService Remove-NsxServiceGroup Remove-NsxSpoofguardPolicy Remove-NsxSslVpnClientInstallationPackage Remove-NsxSslVpnIpPool Remove-NsxSslVpnPrivateNetwork Remove-NsxSslVpnUser Remove-NsxTransportZone Remove-NsxTransportZoneMember Remove-NsxVdsContext Remove-OSCustomizationNicMapping Remove-OSCustomizationSpec Remove-Org Remove-OrgNetwork Remove-OrgVdc Remove-OrgVdcNetwork Remove-PSReadLineKeyHandler Remove-PassthroughDevice Remove-ResourcePool Remove-Snapshot Remove-SpbmStoragePolicy Remove-StatInterval Remove-Tag Remove-TagAssignment Remove-TagCategory Remove-Template Remove-UsbDevice Remove-VAIOFilter Remove-VApp Remove-VDPortGroup Remove-VDSwitch Remove-VDSwitchPhysicalNetworkAdapter Remove-VDSwitchPrivateVlan Remove-VDSwitchVMHost Remove-VDisk Remove-VICredentialStoreItem Remove-VIPermission Remove-VIProperty Remove-VIRole Remove-VM Remove-VMHost Remove-VMHostAccount Remove-VMHostNetworkAdapter Remove-VMHostNtpServer Remove-VMHostProfile Remove-VMHostProfileVmPortGroupConfiguration Remove-VMHostRoute Remove-VTpm Remove-VasaProvider Remove-VirtualPortGroup Remove-VirtualSwitch Remove-VirtualSwitchPhysicalNetworkAdapter Remove-VsanDisk Remove-VsanDiskGroup Remove-VsanFaultDomain Remove-VsanIscsiInitiatorGroup Remove-VsanIscsiInitiatorGroupTargetAssociation Remove-VsanIscsiLun Remove-VsanIscsiTarget Remove-vRABusinessGroup Remove-vRACustomForm Remove-vRAExternalNetworkProfile Remove-vRAGroupPrincipal Remove-vRAIcon Remove-vRANATNetworkProfile Remove-vRAPackage Remove-vRAPrincipalFromTenantRole Remove-vRAPropertyDefinition Remove-vRAPropertyGroup Remove-vRAReservation Remove-vRAReservationNetwork Remove-vRAReservationPolicy Remove-vRAReservationStorage Remove-vRARoutedNetworkProfile Remove-vRAService Remove-vRAStorageReservationPolicy Remove-vRATenant Remove-vRATenantDirectory Remove-vRAUserPrincipal Remove-vRNIApplication Remove-vRNIApplicationTier Remove-vRNIDataSource Repair-NsxEdge Repair-VsanObject Request-vRACatalogItem Request-vRAResourceAction Restart-CIVApp Restart-CIVAppGuest Restart-CIVM Restart-CIVMGuest Restart-VM Restart-VMGuest Restart-VMHost Restart-VMHostService Resume-HCXReplication Revoke-NsxSpoofguardNicApproval Save-Module Save-Package Save-Script Search-Cloud Set-AdvancedSetting Set-AlarmDefinition Set-Annotation Set-CDDrive Set-CIAccessControlRule Set-CINetworkAdapter Set-CIVApp Set-CIVAppNetwork Set-CIVAppStartRule Set-CIVAppTemplate Set-Cluster Set-CustomAttribute Set-Datacenter Set-Datastore Set-DatastoreCluster Set-DrsClusterGroup Set-DrsRule Set-DrsVMHostRule Set-FloppyDrive Set-Folder Set-HCXAppliance Set-HCXMigration Set-HCXReplication Set-HardDisk Set-IScsiHbaTarget Set-KeyManagementServer Set-KmsCluster Set-MarkdownOption Set-NetworkAdapter Set-NfsUser Set-NicTeamingPolicy Set-NodeExclusiveResources Set-NodeManager Set-NodeResourceSource Set-NodeResources Set-NsxEdge Set-NsxEdgeBgp Set-NsxEdgeFirewall Set-NsxEdgeInterface Set-NsxEdgeNat Set-NsxEdgeOspf Set-NsxEdgeRouting Set-NsxFirewallGlobalConfiguration Set-NsxFirewallRule Set-NsxFirewallSavedConfiguration Set-NsxFirewallThreshold Set-NsxLoadBalancer Set-NsxLoadBalancerPoolMember Set-NsxLogicalRouter Set-NsxLogicalRouterBgp Set-NsxLogicalRouterBridging Set-NsxLogicalRouterInterface Set-NsxLogicalRouterOspf Set-NsxLogicalRouterRouting Set-NsxManager Set-NsxManagerRole Set-NsxManagerTimeSettings Set-NsxSecurityPolicy Set-NsxSecurityPolicyFirewallRule Set-NsxSslVpn Set-OSCustomizationNicMapping Set-OSCustomizationSpec Set-Org Set-OrgNetwork Set-OrgVdc Set-OrgVdcNetwork Set-PSCurrentConfigurationNode Set-PSDefaultConfigurationDocument Set-PSMetaConfigDocInsProcessedBeforeMeta Set-PSMetaConfigVersionInfoV2 Set-PSReadLineKeyHandler Set-PSReadLineOption Set-PSRepository Set-PSTopConfigurationName Set-PackageSource Set-PowerCLIConfiguration Set-ResourcePool Set-ScsiController Set-ScsiLun Set-ScsiLunPath Set-SecurityPolicy Set-Snapshot Set-SpbmEntityConfiguration Set-SpbmStoragePolicy Set-StatInterval Set-Tag Set-TagCategory Set-Template Set-VAIOFilter Set-VApp Set-VDBlockedPolicy Set-VDPort Set-VDPortgroup Set-VDPortgroupOverridePolicy Set-VDSecurityPolicy Set-VDSwitch Set-VDTrafficShapingPolicy Set-VDUplinkLacpPolicy Set-VDUplinkTeamingPolicy Set-VDVlanConfiguration Set-VDisk Set-VIPermission Set-VIRole Set-VM Set-VMHost Set-VMHostAccount Set-VMHostAdvancedConfiguration Set-VMHostAuthentication Set-VMHostDiagnosticPartition Set-VMHostFirewallDefaultPolicy Set-VMHostFirewallException Set-VMHostFirmware Set-VMHostHba Set-VMHostModule Set-VMHostNetwork Set-VMHostNetworkAdapter Set-VMHostProfile Set-VMHostProfileImageCacheConfiguration Set-VMHostProfileStorageDeviceConfiguration Set-VMHostProfileUserConfiguration Set-VMHostProfileVmPortGroupConfiguration Set-VMHostRoute Set-VMHostService Set-VMHostSnmp Set-VMHostStartPolicy Set-VMHostStorage Set-VMHostSysLogServer Set-VMQuestion Set-VMResourceConfiguration Set-VMStartPolicy Set-VTpm Set-VirtualPortGroup Set-VirtualSwitch Set-VsanClusterConfiguration Set-VsanFaultDomain Set-VsanIscsiInitiatorGroup Set-VsanIscsiLun Set-VsanIscsiTarget Set-vRABusinessGroup Set-vRACatalogItem Set-vRACustomForm Set-vRAEntitlement Set-vRAExternalNetworkProfile Set-vRANATNetworkProfile Set-vRAReservation Set-vRAReservationNetwork Set-vRAReservationPolicy Set-vRAReservationStorage Set-vRARoutedNetworkProfile Set-vRAService Set-vRAStorageReservationPolicy Set-vRATenant Set-vRATenantDirectory Set-vRAUserPrincipal Set-vRNIDataSourceSNMPConfig Show-Markdown Start-CIVApp Start-CIVM Start-HCXMigration Start-HCXReplication Start-SpbmReplicationFailover Start-SpbmReplicationPrepareFailover Start-SpbmReplicationPromote Start-SpbmReplicationReverse Start-SpbmReplicationTestFailover Start-ThreadJob Start-VApp Start-VM Start-VMHost Start-VMHostService Start-VsanClusterDiskUpdate Start-VsanClusterRebalance Start-VsanEncryptionConfiguration Stop-CIVApp Stop-CIVAppGuest Stop-CIVM Stop-CIVMGuest Stop-SpbmReplicationTestFailover Stop-Task Stop-VApp Stop-VM Stop-VMGuest Stop-VMHost Stop-VMHostService Stop-VsanClusterRebalance Suspend-CIVApp Suspend-CIVM Suspend-HCXReplication Suspend-VM Suspend-VMGuest Suspend-VMHost Sync-SpbmReplicationGroup Test-ConflictingResources Test-HCXMigration Test-HCXReplication Test-Json Test-ModuleReloadRequired Test-MofInstanceText Test-NodeManager Test-NodeResourceSource Test-NodeResources Test-ScriptFileInfo Test-VMHostProfileCompliance Test-VMHostSnmp Test-VsanClusterHealth Test-VsanNetworkPerformance Test-VsanStoragePerformance Test-VsanVMCreation Test-vRAPackage Uninstall-Module Uninstall-Package Uninstall-Script Unlock-VM Unregister-PSRepository Unregister-PackageSource Update-ConfigurationDocumentRef Update-ConfigurationErrorCount Update-DependsOn Update-LocalConfigManager Update-Module Update-ModuleManifest Update-ModuleVersion Update-PowerNsx Update-Script Update-ScriptFileInfo Update-Tools Update-VsanHclDatabase ValidateUpdate-ConfigurationData Wait-Debugger Wait-NsxControllerJob Wait-NsxGenericJob Wait-NsxJob Wait-Task Wait-Tools Write-Information Write-Log Write-MetaConfigFile Write-NodeMOFFile",
			nomarkup: "-ne -eq -lt -gt -ge -le -not -like -notlike -match -notmatch -contains -notcontains -in -notin -replace"
		},
		c: [t, e.NM, r, {
			cN: "string",
			v: [{
				b: /'/,
				e: /'/
			}, {
				b: /@'/,
				e: /^'@/
			}]
		}, {
			cN: "literal",
			b: /\$(null|true|false)\b/
		}, o, i]
	}
});
hljs.registerLanguage("perl", function (e) {
	var t = "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
		r = {
			cN: "subst",
			b: "[$@]\\{",
			e: "\\}",
			k: t
		},
		s = {
			b: "->{",
			e: "}"
		},
		n = {
			v: [{
				b: /\$\d/
			}, {
				b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/
			}, {
				b: /[\$%@][^\s\w{]/,
				r: 0
			}]
		},
		i = [e.BE, r, n],
		o = [n, e.HCM, e.C("^\\=\\w", "\\=cut", {
			eW: !0
		}), s, {
			cN: "string",
			c: i,
			v: [{
				b: "q[qwxr]?\\s*\\(",
				e: "\\)",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\[",
				e: "\\]",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\{",
				e: "\\}",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\|",
				e: "\\|",
				r: 5
			}, {
				b: "q[qwxr]?\\s*\\<",
				e: "\\>",
				r: 5
			}, {
				b: "qw\\s+q",
				e: "q",
				r: 5
			}, {
				b: "'",
				e: "'",
				c: [e.BE]
			}, {
				b: '"',
				e: '"'
			}, {
				b: "`",
				e: "`",
				c: [e.BE]
			}, {
				b: "{\\w+}",
				c: [],
				r: 0
			}, {
				b: "-?\\w+\\s*\\=\\>",
				c: [],
				r: 0
			}]
		}, {
			cN: "number",
			b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b",
			r: 0
		}, {
			b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
			k: "split return print reverse grep",
			r: 0,
			c: [e.HCM, {
				cN: "regexp",
				b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*",
				r: 10
			}, {
				cN: "regexp",
				b: "(m|qr)?/",
				e: "/[a-z]*",
				c: [e.BE],
				r: 0
			}]
		}, {
			cN: "function",
			bK: "sub",
			e: "(\\s*\\(.*?\\))?[;{]",
			eE: !0,
			r: 5,
			c: [e.TM]
		}, {
			b: "-\\w\\b",
			r: 0
		}, {
			b: "^__DATA__$",
			e: "^__END__$",
			sL: "mojolicious",
			c: [{
				b: "^@@.*",
				e: "$",
				cN: "comment"
			}]
		}];
	return r.c = o, {
		aliases: ["pl", "pm"],
		l: /[\w\.]+/,
		k: t,
		c: s.c = o
	}
});
hljs.registerLanguage("json", function (e) {
	var i = {
			literal: "true false null"
		},
		n = [e.QSM, e.CNM],
		r = {
			e: ",",
			eW: !0,
			eE: !0,
			c: n,
			k: i
		},
		t = {
			b: "{",
			e: "}",
			c: [{
				cN: "attr",
				b: /"/,
				e: /"/,
				c: [e.BE],
				i: "\\n"
			}, e.inherit(r, {
				b: /:/
			})],
			i: "\\S"
		},
		c = {
			b: "\\[",
			e: "\\]",
			c: [e.inherit(r)],
			i: "\\S"
		};
	return n.splice(n.length, 0, t, c), {
		c: n,
		k: i,
		i: "\\S"
	}
});
hljs.registerLanguage("dos", function (e) {
	var r = e.C(/^\s*@?rem\b/, /$/, {
		r: 10
	});
	return {
		aliases: ["bat", "cmd"],
		cI: !0,
		i: /\/\*/,
		k: {
			keyword: "if else goto for in do call exit not exist errorlevel defined equ neq lss leq gtr geq",
			built_in: "prn nul lpt3 lpt2 lpt1 con com4 com3 com2 com1 aux shift cd dir echo setlocal endlocal set pause copy append assoc at attrib break cacls cd chcp chdir chkdsk chkntfs cls cmd color comp compact convert date dir diskcomp diskcopy doskey erase fs find findstr format ftype graftabl help keyb label md mkdir mode more move path pause print popd pushd promt rd recover rem rename replace restore rmdir shiftsort start subst time title tree type ver verify vol ping net ipconfig taskkill xcopy ren del"
		},
		c: [{
			cN: "variable",
			b: /%%[^ ]|%[^ ]+?%|![^ ]+?!/
		}, {
			cN: "function",
			b: "^\\s*[A-Za-z._?][A-Za-z0-9_$#@~.?]*(:|\\s+label)",
			e: "goto:eof",
			c: [e.inherit(e.TM, {
				b: "([_a-zA-Z]\\w*\\.)*([_a-zA-Z]\\w*:)?[_a-zA-Z]\\w*"
			}), r]
		}, {
			cN: "number",
			b: "\\b\\d+",
			r: 0
		}, r]
	}
});
hljs.registerLanguage("cpp", function (t) {
	var e = {
			cN: "keyword",
			b: "\\b[a-z\\d_]*_t\\b"
		},
		r = {
			cN: "string",
			v: [{
				b: '(u8?|U|L)?"',
				e: '"',
				i: "\\n",
				c: [t.BE]
			}, {
				b: /(?:u8?|U|L)?R"([^()\\ ]{0,16})\((?:.|\n)*?\)\1"/
			}, {
				b: "'\\\\?.",
				e: "'",
				i: "."
			}]
		},
		s = {
			cN: "number",
			v: [{
				b: "\\b(0b[01']+)"
			}, {
				b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
			}, {
				b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
			}],
			r: 0
		},
		i = {
			cN: "meta",
			b: /#\s*[a-z]+\b/,
			e: /$/,
			k: {
				"meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include"
			},
			c: [{
				b: /\\\n/,
				r: 0
			}, t.inherit(r, {
				cN: "meta-string"
			}), {
				cN: "meta-string",
				b: /<[^\n>]*>/,
				e: /$/,
				i: "\\n"
			}, t.CLCM, t.CBCM]
		},
		a = t.IR + "\\s*\\(",
		c = {
			keyword: "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not",
			built_in: "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
			literal: "true false nullptr NULL"
		},
		n = [e, t.CLCM, t.CBCM, s, r];
	return {
		aliases: ["c", "cc", "h", "c++", "h++", "hpp", "hh", "hxx", "cxx"],
		k: c,
		i: "</",
		c: n.concat([i, {
			b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
			e: ">",
			k: c,
			c: ["self", e]
		}, {
			b: t.IR + "::",
			k: c
		}, {
			v: [{
				b: /=/,
				e: /;/
			}, {
				b: /\(/,
				e: /\)/
			}, {
				bK: "new throw return else",
				e: /;/
			}],
			k: c,
			c: n.concat([{
				b: /\(/,
				e: /\)/,
				k: c,
				c: n.concat(["self"]),
				r: 0
			}]),
			r: 0
		}, {
			cN: "function",
			b: "(" + t.IR + "[\\*&\\s]+)+" + a,
			rB: !0,
			e: /[{;=]/,
			eE: !0,
			k: c,
			i: /[^\w\s\*&]/,
			c: [{
				b: a,
				rB: !0,
				c: [t.TM],
				r: 0
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				k: c,
				r: 0,
				c: [t.CLCM, t.CBCM, r, s, e, {
					b: /\(/,
					e: /\)/,
					k: c,
					r: 0,
					c: ["self", t.CLCM, t.CBCM, r, s, e]
				}]
			}, t.CLCM, t.CBCM, i]
		}, {
			cN: "class",
			bK: "class struct",
			e: /[{;:]/,
			c: [{
				b: /</,
				e: />/,
				c: ["self"]
			}, t.TM]
		}]),
		exports: {
			preprocessor: i,
			strings: r,
			k: c
		}
	}
});
hljs.registerLanguage("sql", function (e) {
	var t = e.C("--", "$");
	return {
		cI: !0,
		i: /[<>{}*]/,
		c: [{
			bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment values with",
			e: /;/,
			eW: !0,
			l: /[\w\.]+/,
			k: {
				keyword: "as abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias all allocate allow alter always analyze ancillary and anti any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound bucket buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain explode export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force foreign form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour hours http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lateral lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minutes minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notnull notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second seconds section securefile security seed segment select self semi sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tablesample tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unnest unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace window with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
				literal: "true false null unknown",
				built_in: "array bigint binary bit blob bool boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text time timestamp tinyint varchar varying void"
			},
			c: [{
				cN: "string",
				b: "'",
				e: "'",
				c: [e.BE, {
					b: "''"
				}]
			}, {
				cN: "string",
				b: '"',
				e: '"',
				c: [e.BE, {
					b: '""'
				}]
			}, {
				cN: "string",
				b: "`",
				e: "`",
				c: [e.BE]
			}, e.CNM, e.CBCM, t, e.HCM]
		}, e.CBCM, t, e.HCM]
	}
});
hljs.registerLanguage("xml", function (s) {
	var e = {
		eW: !0,
		i: /</,
		r: 0,
		c: [{
			cN: "attr",
			b: "[A-Za-z0-9\\._:-]+",
			r: 0
		}, {
			b: /=\s*/,
			r: 0,
			c: [{
				cN: "string",
				endsParent: !0,
				v: [{
					b: /"/,
					e: /"/
				}, {
					b: /'/,
					e: /'/
				}, {
					b: /[^\s"'=<>`]+/
				}]
			}]
		}]
	};
	return {
		aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf"],
		cI: !0,
		c: [{
			cN: "meta",
			b: "<!DOCTYPE",
			e: ">",
			r: 10,
			c: [{
				b: "\\[",
				e: "\\]"
			}]
		}, s.C("\x3c!--", "--\x3e", {
			r: 10
		}), {
			b: "<\\!\\[CDATA\\[",
			e: "\\]\\]>",
			r: 10
		}, {
			cN: "meta",
			b: /<\?xml/,
			e: /\?>/,
			r: 10
		}, {
			b: /<\?(php)?/,
			e: /\?>/,
			sL: "php",
			c: [{
				b: "/\\*",
				e: "\\*/",
				skip: !0
			}, {
				b: 'b"',
				e: '"',
				skip: !0
			}, {
				b: "b'",
				e: "'",
				skip: !0
			}, s.inherit(s.ASM, {
				i: null,
				cN: null,
				c: null,
				skip: !0
			}), s.inherit(s.QSM, {
				i: null,
				cN: null,
				c: null,
				skip: !0
			})]
		}, {
			cN: "tag",
			b: "<style(?=\\s|>|$)",
			e: ">",
			k: {
				name: "style"
			},
			c: [e],
			starts: {
				e: "</style>",
				rE: !0,
				sL: ["css", "xml"]
			}
		}, {
			cN: "tag",
			b: "<script(?=\\s|>|$)",
			e: ">",
			k: {
				name: "script"
			},
			c: [e],
			starts: {
				e: "<\/script>",
				rE: !0,
				sL: ["actionscript", "javascript", "handlebars", "xml", "vbscript"]
			}
		}, {
			cN: "tag",
			b: "</?",
			e: "/?>",
			c: [{
				cN: "name",
				b: /[^\/><\s]+/,
				r: 0
			}, e]
		}]
	}
});
hljs.registerLanguage("markdown", function (e) {
	return {
		aliases: ["md", "mkdown", "mkd"],
		c: [{
			cN: "section",
			v: [{
				b: "^#{1,6}",
				e: "$"
			}, {
				b: "^.+?\\n[=-]{2,}$"
			}]
		}, {
			b: "<",
			e: ">",
			sL: "xml",
			r: 0
		}, {
			cN: "bullet",
			b: "^\\s*([*+-]|(\\d+\\.))\\s+"
		}, {
			cN: "strong",
			b: "[*_]{2}.+?[*_]{2}"
		}, {
			cN: "emphasis",
			v: [{
				b: "\\*.+?\\*"
			}, {
				b: "_.+?_",
				r: 0
			}]
		}, {
			cN: "quote",
			b: "^>\\s+",
			e: "$"
		}, {
			cN: "code",
			v: [{
				b: "^```w*s*$",
				e: "^```s*$"
			}, {
				b: "`.+?`"
			}, {
				b: "^( {4}|\t)",
				e: "$",
				r: 0
			}]
		}, {
			b: "^[-\\*]{3,}",
			e: "$"
		}, {
			b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
			rB: !0,
			c: [{
				cN: "string",
				b: "\\[",
				e: "\\]",
				eB: !0,
				rE: !0,
				r: 0
			}, {
				cN: "link",
				b: "\\]\\(",
				e: "\\)",
				eB: !0,
				eE: !0
			}, {
				cN: "symbol",
				b: "\\]\\[",
				e: "\\]",
				eB: !0,
				eE: !0
			}],
			r: 10
		}, {
			b: /^\[[^\n]+\]:/,
			rB: !0,
			c: [{
				cN: "symbol",
				b: /\[/,
				e: /\]/,
				eB: !0,
				eE: !0
			}, {
				cN: "link",
				b: /:\s*/,
				e: /$/,
				eB: !0
			}]
		}]
	}
});
hljs.registerLanguage("cs", function (e) {
	var i = {
			keyword: "abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
			literal: "null false true"
		},
		r = {
			cN: "number",
			v: [{
				b: "\\b(0b[01']+)"
			}, {
				b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"
			}, {
				b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"
			}],
			r: 0
		},
		t = {
			cN: "string",
			b: '@"',
			e: '"',
			c: [{
				b: '""'
			}]
		},
		a = e.inherit(t, {
			i: /\n/
		}),
		c = {
			cN: "subst",
			b: "{",
			e: "}",
			k: i
		},
		n = e.inherit(c, {
			i: /\n/
		}),
		s = {
			cN: "string",
			b: /\$"/,
			e: '"',
			i: /\n/,
			c: [{
				b: "{{"
			}, {
				b: "}}"
			}, e.BE, n]
		},
		b = {
			cN: "string",
			b: /\$@"/,
			e: '"',
			c: [{
				b: "{{"
			}, {
				b: "}}"
			}, {
				b: '""'
			}, c]
		},
		l = e.inherit(b, {
			i: /\n/,
			c: [{
				b: "{{"
			}, {
				b: "}}"
			}, {
				b: '""'
			}, n]
		});
	c.c = [b, s, t, e.ASM, e.QSM, r, e.CBCM], n.c = [l, s, a, e.ASM, e.QSM, r, e.inherit(e.CBCM, {
		i: /\n/
	})];
	var o = {
			v: [b, s, t, e.ASM, e.QSM]
		},
		d = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";
	return {
		aliases: ["csharp", "c#"],
		k: i,
		i: /::/,
		c: [e.C("///", "$", {
			rB: !0,
			c: [{
				cN: "doctag",
				v: [{
					b: "///",
					r: 0
				}, {
					b: "\x3c!--|--\x3e"
				}, {
					b: "</?",
					e: ">"
				}]
			}]
		}), e.CLCM, e.CBCM, {
			cN: "meta",
			b: "#",
			e: "$",
			k: {
				"meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum"
			}
		}, o, r, {
			bK: "class interface",
			e: /[{;=]/,
			i: /[^\s:,]/,
			c: [e.TM, e.CLCM, e.CBCM]
		}, {
			bK: "namespace",
			e: /[{;=]/,
			i: /[^\s:]/,
			c: [e.inherit(e.TM, {
				b: "[a-zA-Z](\\.?\\w)*"
			}), e.CLCM, e.CBCM]
		}, {
			cN: "meta",
			b: "^\\s*\\[",
			eB: !0,
			e: "\\]",
			eE: !0,
			c: [{
				cN: "meta-string",
				b: /"/,
				e: /"/
			}]
		}, {
			bK: "new return throw await else",
			r: 0
		}, {
			cN: "function",
			b: "(" + d + "\\s+)+" + e.IR + "\\s*\\(",
			rB: !0,
			e: /\s*[{;=]/,
			eE: !0,
			k: i,
			c: [{
				b: e.IR + "\\s*\\(",
				rB: !0,
				c: [e.TM],
				r: 0
			}, {
				cN: "params",
				b: /\(/,
				e: /\)/,
				eB: !0,
				eE: !0,
				k: i,
				r: 0,
				c: [o, r, e.CBCM]
			}, e.CLCM, e.CBCM]
		}]
	}
});
hljs.registerLanguage("php", function (e) {
	var c = {
			b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*"
		},
		i = {
			cN: "meta",
			b: /<\?(php)?|\?>/
		},
		t = {
			cN: "string",
			c: [e.BE, i],
			v: [{
				b: 'b"',
				e: '"'
			}, {
				b: "b'",
				e: "'"
			}, e.inherit(e.ASM, {
				i: null
			}), e.inherit(e.QSM, {
				i: null
			})]
		},
		a = {
			v: [e.BNM, e.CNM]
		};
	return {
		aliases: ["php", "php3", "php4", "php5", "php6", "php7"],
		cI: !0,
		k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
		c: [e.HCM, e.C("//", "$", {
			c: [i]
		}), e.C("/\\*", "\\*/", {
			c: [{
				cN: "doctag",
				b: "@[A-Za-z]+"
			}]
		}), e.C("__halt_compiler.+?;", !1, {
			eW: !0,
			k: "__halt_compiler",
			l: e.UIR
		}), {
			cN: "string",
			b: /<<<['"]?\w+['"]?$/,
			e: /^\w+;?$/,
			c: [e.BE, {
				cN: "subst",
				v: [{
					b: /\$\w+/
				}, {
					b: /\{\$/,
					e: /\}/
				}]
			}]
		}, i, {
			cN: "keyword",
			b: /\$this\b/
		}, c, {
			b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/
		}, {
			cN: "function",
			bK: "function",
			e: /[;{]/,
			eE: !0,
			i: "\\$|\\[|%",
			c: [e.UTM, {
				cN: "params",
				b: "\\(",
				e: "\\)",
				c: ["self", c, e.CBCM, t, a]
			}]
		}, {
			cN: "class",
			bK: "class interface",
			e: "{",
			eE: !0,
			i: /[:\(\$"]/,
			c: [{
				bK: "extends implements"
			}, e.UTM]
		}, {
			bK: "namespace",
			e: ";",
			i: /[\.']/,
			c: [e.UTM]
		}, {
			bK: "use",
			e: ";",
			c: [e.UTM]
		}, {
			b: "=>"
		}, t, a]
	}
});
hljs.registerLanguage("dns", function (d) {
	return {
		aliases: ["bind", "zone"],
		k: {
			keyword: "IN A AAAA AFSDB APL CAA CDNSKEY CDS CERT CNAME DHCID DLV DNAME DNSKEY DS HIP IPSECKEY KEY KX LOC MX NAPTR NS NSEC NSEC3 NSEC3PARAM PTR RRSIG RP SIG SOA SRV SSHFP TA TKEY TLSA TSIG TXT"
		},
		c: [d.C(";", "$", {
			r: 0
		}), {
			cN: "meta",
			b: /^\$(TTL|GENERATE|INCLUDE|ORIGIN)\b/
		}, {
			cN: "number",
			b: "((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)(\\.(25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]?\\d)){3}))|:)))\\b"
		}, {
			cN: "number",
			b: "((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]).){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\b"
		}, d.inherit(d.NM, {
			b: /\b\d+[dhwm]?/
		})]
	}
});
hljs.registerLanguage("vbnet", function (e) {
	return {
		aliases: ["vb"],
		cI: !0,
		k: {
			keyword: "addhandler addressof alias and andalso aggregate ansi as assembly auto binary by byref byval call case catch class compare const continue custom declare default delegate dim distinct do each equals else elseif end enum erase error event exit explicit finally for friend from function get global goto group handles if implements imports in inherits interface into is isfalse isnot istrue join key let lib like loop me mid mod module mustinherit mustoverride mybase myclass namespace narrowing new next not notinheritable notoverridable of off on operator option optional or order orelse overloads overridable overrides paramarray partial preserve private property protected public raiseevent readonly redim rem removehandler resume return select set shadows shared skip static step stop structure strict sub synclock take text then throw to try unicode until using when where while widening with withevents writeonly xor",
			built_in: "boolean byte cbool cbyte cchar cdate cdec cdbl char cint clng cobj csbyte cshort csng cstr ctype date decimal directcast double gettype getxmlnamespace iif integer long object sbyte short single string trycast typeof uinteger ulong ushort",
			literal: "true false nothing"
		},
		i: "//|{|}|endif|gosub|variant|wend|^\\$ ",
		c: [e.inherit(e.QSM, {
			c: [{
				b: '""'
			}]
		}), e.C("'", "$", {
			rB: !0,
			c: [{
				cN: "doctag",
				b: "'''|\x3c!--|--\x3e",
				c: [e.PWM]
			}, {
				cN: "doctag",
				b: "</?",
				e: ">",
				c: [e.PWM]
			}]
		}), e.CNM, {
			cN: "meta",
			b: "#",
			e: "$",
			k: {
				"meta-keyword": "if else elseif end region externalsource"
			}
		}]
	}
});
