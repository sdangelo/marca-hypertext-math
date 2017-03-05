/*
 * Copyright (C) 2016, 2017 Stefano D'Angelo <zanga.mail@gmail.com>
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

module.exports = function (Marca) {
	Marca.DOMElementHypertextMathRoot =
		Object.create(Marca.DOMElementHypertextInline);
	Marca.DOMElementHypertextMathRoot.name = "math root";
	Marca.DOMElementHypertextMathRoot.initContent = function (node) {
		var ta = Marca.DOMElementMathRoot.initContent.call(this, node);

		this.id = node.attributes.id;
		if (node.attributes.class) {
			var s = node.attributes.class.trim();
			this.class = s ? s.split(/\s+/) : undefined;
		} else
			this.class = undefined;

		return ta;
	};

	Marca.HypertextMathElementProtos = {
		m:	Marca.DOMElementHypertextMathRoot
	};
};
