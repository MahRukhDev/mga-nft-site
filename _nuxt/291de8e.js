(window.webpackJsonp = window.webpackJsonp || []).push([
  [10, 18, 22],
  {
    1193: function (e, t, r) {
      "use strict";
      r.r(t);
      var o = [
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "div",
              {
                staticClass: "container note mb-80",
                staticStyle: { display: "none" },
              },
              [
                r("p", [
                  e._v(
                    "Note: Click below link to show the popup (reference only), delete these lines after programming."
                  ),
                ]),
                e._v(" "),
                r("p", [
                  e._v("Pop-up: "),
                  r(
                    "a",
                    {
                      staticClass: "action-btn hover-up",
                      attrs: {
                        id: "lnkLoadingPopup",
                        "aria-label": "Share This",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#loadingModalPopup",
                      },
                    },
                    [e._v("Loading")]
                  ),
                ]),
              ]
            );
          },
          function () {
            var e = this.$createElement,
              t = this._self._c || e;
            return t("div", { staticClass: "text-center mt-30 mb-30" }, [
              t("img", { attrs: { src: r(1194), width: "80", alt: "" } }),
            ]);
          },
        ],
        n = (r(86), r(62), r(76), r(40), r(116), r(75), r(117), r(55)),
        l = r(30);
      function c(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var d = {
          name: "Loading",
          props: ["message"],
          data: function () {
            return { msg: null };
          },
          computed: (function (e) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? c(Object(source), !0).forEach(function (t) {
                    Object(n.a)(e, t, source[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : c(Object(source)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(source, t)
                    );
                  });
            }
            return e;
          })(
            {},
            Object(l.d)("web3Modal", [
              "account",
              "account_short",
              "account_wallet",
            ])
          ),
          methods: {
            setMessage: function (e) {
              this.msg = e;
            },
            show: function () {
              document.getElementById("lnkLoadingPopup").click();
            },
            close: function () {
              for (
                var e = document.getElementsByClassName("btn-close"), i = 0;
                i < e.length;
                i++
              )
                e[i].click();
            },
          },
        },
        m = d,
        f = r(65),
        component = Object(f.a)(
          m,
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r("div", [
              e._m(0),
              e._v(" "),
              r(
                "div",
                {
                  ref: "loadingModalPopup",
                  staticClass: "modal fade custom-modal popup",
                  attrs: {
                    "data-bs-backdrop": "static",
                    "data-bs-keyboard": "false",
                    id: "loadingModalPopup",
                    tabindex: "-1",
                    "aria-hidden": "true",
                  },
                },
                [
                  r("div", { staticClass: "modal-dialog" }, [
                    r("div", { staticClass: "modal-content" }, [
                      r("div", { staticClass: "modal-body" }, [
                        r("button", {
                          staticClass: "btn-close",
                          staticStyle: { display: "none" },
                          attrs: {
                            type: "button",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close",
                          },
                        }),
                        e._v(" "),
                        r("div", { staticClass: "mt-20 text-center" }, [
                          r("h4", [
                            e._v(e._s(null == e.message ? e.msg : e.message)),
                          ]),
                        ]),
                        e._v(" "),
                        e._m(1),
                      ]),
                    ]),
                  ]),
                ]
              ),
            ]);
          },
          o,
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    1195: function (e, t, r) {
      "use strict";
      r.r(t);
      var o = [
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r("h5", { staticClass: "section-title style-1" }, [
              e._v("One last step..."),
              r("br"),
              e._v("Adding Fund"),
            ]);
          },
          function () {
            var e = this.$createElement,
              t = this._self._c || e;
            return t("div", { staticClass: "text-center mt-30 mb-30" }, [
              t("img", { attrs: { src: r(1196), width: "80", alt: "wallet" } }),
            ]);
          },
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "div",
              {
                staticClass: "container note mb-80",
                staticStyle: { display: "none" },
              },
              [
                r("p", [
                  e._v("Pop-up: "),
                  r(
                    "a",
                    {
                      staticClass: "action-btn hover-up",
                      attrs: {
                        id: "lnkAddFund",
                        "aria-label": "Share This",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#addingFundModal",
                      },
                    },
                    [e._v("Adding Fund ")]
                  ),
                ]),
                e._v(" "),
                r("p", [
                  e._v("Pop-up: "),
                  r(
                    "a",
                    {
                      staticClass: "action-btn hover-up",
                      attrs: {
                        id: "lnkFunding",
                        "aria-label": "Share This",
                        "data-bs-toggle": "modal",
                        "data-bs-target": "#fundingModal",
                      },
                    },
                    [e._v("Funding")]
                  ),
                ]),
              ]
            );
          },
        ],
        n = (r(86), r(62), r(76), r(40), r(116), r(75), r(117), r(55)),
        l = (r(63), r(658), r(30)),
        c = r(218),
        d = r(11),
        m = r.n(d);
      function f(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      var v = {
          name: "AddFund",
          props: ["message", "currencyCode"],
          components: { QrcodeVue: r(1201).a },
          computed: (function (e) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? f(Object(source), !0).forEach(function (t) {
                    Object(n.a)(e, t, source[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : f(Object(source)).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(source, t)
                    );
                  });
            }
            return e;
          })(
            {},
            Object(l.d)("web3Modal", [
              "account",
              "account_short",
              "account_wallet",
            ])
          ),
          methods: {
            show: function () {
              document.getElementById("lnkAddFund").click();
            },
            closePopUp: function () {
              for (
                var e = document.getElementsByClassName("btn-close"), i = 0;
                i < e.length;
                i++
              )
                e[i].click();
            },
            addFund: function () {
              this.closePopUp(), document.getElementById("lnkFunding").click();
            },
            copy: function () {
              var e = this.account;
              if (/Mobi/.test(navigator.userAgent)) this.$copyText(e);
              else {
                var t = document.createElement("div");
                t.setAttribute("contentEditable", !0),
                  (t.innerHTML = e),
                  t.setAttribute(
                    "onfocus",
                    "document.execCommand('selectAll',false,null)"
                  ),
                  document.body.appendChild(t),
                  t.focus();
                var r = m()(t);
                if (navigator.userAgent.match(/ipad|iphone/i)) {
                  var o = r.get(0),
                    n = o.contentEditable,
                    l = o.readOnly;
                  (o.contentEditable = "true"), (o.readOnly = "false");
                  var d = document.createRange();
                  d.selectNodeContents(o);
                  var f = window.getSelection();
                  f.removeAllRanges(),
                    f.addRange(d),
                    o.setSelectionRange(0, 999999),
                    (o.contentEditable = n),
                    (o.readOnly = l);
                } else r.select();
                document.execCommand("copy"), document.body.removeChild(t);
              }
              Object(c.c)("Copied To Clipboard");
            },
          },
        },
        _ = v,
        C = r(65),
        component = Object(C.a)(
          _,
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r("div", [
              r(
                "div",
                {
                  staticClass: "modal fade custom-modal popup",
                  attrs: {
                    id: "addingFundModal",
                    tabindex: "-1",
                    "aria-hidden": "true",
                  },
                },
                [
                  r("div", { staticClass: "modal-dialog" }, [
                    r("div", { staticClass: "modal-content" }, [
                      r("button", {
                        staticClass: "btn-close",
                        attrs: {
                          type: "button",
                          "data-bs-dismiss": "modal",
                          "aria-label": "Close",
                        },
                      }),
                      e._v(" "),
                      r("div", { staticClass: "modal-body" }, [
                        e._m(0),
                        e._v(" "),
                        r("div", { staticClass: "mt-20 text-center" }, [
                          e._v(
                            "\n                        " +
                              e._s(e.message) +
                              "There isn't enough " +
                              e._s(e.currencyCode) +
                              " in your wallet. Add fund now to finish!\n                    "
                          ),
                        ]),
                        e._v(" "),
                        e._m(1),
                        e._v(" "),
                        r(
                          "button",
                          {
                            staticClass: "button w-100",
                            on: { click: e.addFund },
                          },
                          [e._v("Add Fund")]
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
              e._v(" "),
              r(
                "div",
                {
                  staticClass: "modal fade custom-modal popup",
                  attrs: {
                    id: "fundingModal",
                    tabindex: "-1",
                    "aria-hidden": "true",
                  },
                },
                [
                  r("div", { staticClass: "modal-dialog" }, [
                    r("div", { staticClass: "modal-content" }, [
                      r("button", {
                        staticClass: "btn-close",
                        attrs: {
                          type: "button",
                          "data-bs-dismiss": "modal",
                          "aria-label": "Close",
                        },
                      }),
                      e._v(" "),
                      r("div", { staticClass: "modal-body" }, [
                        r("h5", { staticClass: "section-title style-1" }, [
                          e._v("Funding"),
                        ]),
                        e._v(" "),
                        r("div", { staticClass: "mt-20 text-center" }, [
                          e._v(
                            "\n                        Receive BNB, MGA, MGAs\n                    "
                          ),
                        ]),
                        e._v(" "),
                        r(
                          "div",
                          { staticClass: "text-center mt-30 mb-30" },
                          [
                            r("qrcode-vue", {
                              attrs: {
                                value: null == e.account ? "" : e.account,
                                size: "250",
                                level: "H",
                              },
                            }),
                          ],
                          1
                        ),
                        e._v(" "),
                        r("div", { staticClass: "mt-20 text-center" }, [
                          e._v(
                            "\n                        Scan QR code or copy the address below\n                    "
                          ),
                        ]),
                        e._v(" "),
                        r("div", { staticClass: "mt-5 text-center" }, [
                          r("span", { staticClass: "color-gold" }, [
                            r("span", [e._v(" " + e._s(e.account) + " ")]),
                            r("b", { staticClass: "ml-2 cp" }, [
                              r(
                                "a",
                                { attrs: { href: "#" }, on: { click: e.copy } },
                                [e._v("Copy")]
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
              e._v(" "),
              e._m(2),
            ]);
          },
          o,
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
    },
    1196: function (e, t, r) {
      e.exports = r.p + "img/icon-wallet.bce8246.png";
    },
    1198: function (e, t, r) {
      "use strict";
      var o = r(24),
        n = r(661).trim;
      o(
        { target: "String", proto: !0, forced: r(1199)("trim") },
        {
          trim: function () {
            return n(this);
          },
        }
      );
    },
    1199: function (e, t, r) {
      var o = r(174).PROPER,
        n = r(25),
        l = r(662);
      e.exports = function (e) {
        return n(function () {
          return !!l[e]() || "​᠎" !== "​᠎"[e]() || (o && l[e].name !== e);
        });
      };
    },
    1202: function (e, t, r) {
      var content = r(1230);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[e.i, content, ""]]),
        content.locals && (e.exports = content.locals);
      (0, r(100).default)("8f2b5a82", content, !0, { sourceMap: !1 });
    },
    1227: function (e, t, r) {
      "use strict";
      r.r(t);
      r(86), r(76), r(116), r(75), r(117);
      var o = r(4),
        n = r(55),
        l =
          (r(23),
          r(40),
          r(1198),
          r(63),
          r(77),
          r(66),
          r(78),
          r(663),
          r(220),
          r(62),
          r(102),
          r(659),
          r(218)),
        c = r(30),
        d = r(1200),
        m = r(1195),
        f = r(1226),
        v = r(1193),
        _ = r(173);
      function C(object, e) {
        var t = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(object, e).enumerable;
            })),
            t.push.apply(t, r);
        }
        return t;
      }
      function y(e) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? C(Object(source), !0).forEach(function (t) {
                Object(n.a)(e, t, source[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                e,
                Object.getOwnPropertyDescriptors(source)
              )
            : C(Object(source)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(source, t)
                );
              });
        }
        return e;
      }
      var h = "NewNFT.vue | ",
        w = {
          name: "NewNFT",
          props: ["isMultiple"],
          components: {
            AddFund: m.default,
            Loading: v.default,
            SellAsset: f.default,
          },
          mixins: [_.a],
          data: function () {
            return {
              file: null,
              isSigning: !1,
              isApprovedCoinStorageFee: !1,
              share: {
                tokenId: null,
                contractAddress: null,
                ownerWalletAddress: null,
              },
              form: {
                NFTFileType: null,
                NFTUrl: null,
                isOnSale: !0,
                name: null,
                description: null,
                royalties: null,
                numberOfCopies: null,
                propertyName: null,
                propertyValue: null,
                StoreId: null,
                store: null,
                CollectionId: null,
                collection: null,
                categoryId: null,
                offerType: "SALE",
              },
              asset: null,
            };
          },
          watch: {
            memberId: function (e) {
              null != e
                ? (this.getNFTCollectionSelections(e),
                  this.getNFTStoreSelections(e))
                : this.$router.push({ name: "/", query: {} });
            },
          },
          validations: function () {
            var e = parseFloat(this.maxSellerFee);
            return this.isMultiple
              ? {
                  form: {
                    categoryId: { required: d.required },
                    name: { required: d.required },
                    royalties: { between: Object(d.between)(0, 99 - e) },
                    numberOfCopies: {
                      required: d.required,
                      minValue: Object(d.minValue)(1),
                    },
                  },
                }
              : {
                  form: {
                    categoryId: { required: d.required },
                    name: { required: d.required },
                    royalties: { between: Object(d.between)(0, 99 - e) },
                  },
                };
          },
          computed: y(
            y(
              y(
                y(
                  y(
                    y(
                      y(
                        y(
                          y(
                            {},
                            Object(c.d)("web3Modal", [
                              "account",
                              "account_wallet",
                            ])
                          ),
                          Object(c.d)("memberProfile", ["memberId"])
                        ),
                        Object(c.d)("createNFT", ["collections"])
                      ),
                      Object(c.d)("nftStore", ["nftStoreSelections"])
                    ),
                    Object(c.d)("nftCollection", ["nftCollectionSelections"])
                  ),
                  Object(c.d)("asset", ["storageFee"])
                ),
                Object(c.d)("sales", ["serviceCharges"])
              ),
              Object(c.d)("category", ["categoryListing"])
            ),
            {},
            {
              maxSellerFee: function () {
                return null == this.serviceCharges ||
                  0 == this.serviceCharges.length
                  ? 0
                  : this.serviceCharges.reduce(function (e, t) {
                      return e.votes > t.SellerFeePercentage ? e : t;
                    }).SellerFeePercentage;
              },
              getDisableCreateNFTSetting: function () {
                switch ("false".toLowerCase().trim()) {
                  case "true":
                  case "yes":
                  case "1":
                    return !0;
                  default:
                    return !1;
                }
              },
              selectedCategory: function () {
                return $("#dropdownCategory option:selected").text();
              },
            }
          ),
          methods: y(
            y(
              y(
                y(
                  y(
                    y(
                      y(
                        y({}, Object(c.b)("category", ["getCategoryListing"])),
                        Object(c.b)("asset", ["getStorageFee"])
                      ),
                      Object(c.b)("sales", ["getServiceCharges"])
                    ),
                    Object(c.b)("nftStore", ["getNFTStoreSelections"])
                  ),
                  Object(c.b)("nftCollection", ["getNFTCollectionSelections"])
                ),
                Object(c.b)("createNFT", [
                  "getCollections",
                  "createNFT",
                  "updateTokenId",
                ])
              ),
              Object(c.b)("web3Modal", [
                "mint721",
                "mint1155",
                "getBNBBalance",
                "getGESBalance",
                "getGEGBalance",
                "getBUSDBalance",
                "approveBUSD",
                "approveGES",
                "isApprovedGES",
                "approveGEG",
                "isApprovedGEG",
                "isApprovedBUSD",
              ])
            ),
            {},
            {
              isNumber: function (e) {
                var t = (e = e || window.event).which ? e.which : e.keyCode;
                if (!(t > 31 && (t < 48 || t > 57) && 46 !== t)) return !0;
                e.preventDefault();
              },
              handleFileUpload: function () {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var r, o;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              ((r =
                                document.getElementById("uploadfile").value),
                              /(\.jpg|\.jpeg|\.png|\.webp|\.gif|\.mp3|\.mp4)$/i.exec(
                                r
                              ))
                            ) {
                              t.next = 8;
                              break;
                            }
                            return (
                              Object(l.b)(
                                "File types only supported: jpg,jpeg,png,webp,gif,mp3,mp4."
                              ),
                              (e.file = null),
                              (e.$refs.file.value = null),
                              (e.form.NFTUrl = null),
                              t.abrupt("return", !1)
                            );
                          case 8:
                            if (
                              ((e.file = e.$refs.file.files[0]),
                              !(e.file.size / 1024 / 1024 > 30))
                            ) {
                              t.next = 16;
                              break;
                            }
                            return (
                              Object(l.b)("File size exceeeded 30 MB"),
                              (e.file = null),
                              (e.$refs.file.value = null),
                              (e.form.NFTUrl = null),
                              t.abrupt("return", !1)
                            );
                          case 16:
                            new FormData().append("file", e.file),
                              (o = e.file.name),
                              (e.form.NFTFileType = o.substr(
                                o.lastIndexOf(".") + 1
                              )),
                              (e.form.NFTUrl = URL.createObjectURL(e.file));
                          case 21:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              showComfirmation: function () {
                if (this.getDisableCreateNFTSetting) return !1;
                if (
                  (this.$v.form.$touch(),
                  1 == this.nftCollectionSelections.length
                    ? ((this.form.CollectionId =
                        this.nftCollectionSelections[0].CollectionId),
                      (this.form.collection =
                        this.nftCollectionSelections[0].Name))
                    : null == this.form.CollectionId &&
                      $(".collectionSelected").length > 0 &&
                      ((this.form.CollectionId = $(
                        ".collectionSelected"
                      )[0].getAttribute("value")),
                      (this.form.collection = $(
                        ".collectionSelected"
                      )[0].getAttribute("name"))),
                  this.form.isOnSale ||
                    ((this.form.StoreId = null), (this.form.store = null)),
                  this.$v.form.$pending || this.$v.form.$error)
                )
                  this.$log.warn(h, "showComfirmation - submit form error");
                else {
                  var e = parseFloat(this.form.royalties),
                    t = parseFloat(this.maxSellerFee);
                  e > 0 && e + t > 99
                    ? Object(l.b)("Max royalties fee is " + (99 - t))
                    : document
                        .getElementById("lnkcreateNFTSummaryModal")
                        .click();
                }
              },
              closePopUp: function () {
                for (
                  var e = document.getElementsByClassName("btn-close"), i = 0;
                  i < e.length;
                  i++
                )
                  e[i].click();
              },
              getSalt: function () {
                for (
                  var e = "1234567890", a = e.length, t = "", r = 0;
                  r < 64;
                  r++
                ) {
                  var o = Math.floor(Math.random() * a);
                  t += e.charAt(o);
                }
                return t;
              },
              mint: function () {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var r, o, n, l, c, d, m, f, v, _;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              e.$log.debug(h, "mint - form", e.form),
                              new FormData().append("file", e.file),
                              null == e.form.CollectionId &&
                                e.collections.length > 0 &&
                                (e.form.CollectionId =
                                  e.collections[0].CollectionId),
                              (t.next = 6),
                              e.createNFT({
                                name: e.form.name,
                                description: e.form.description,
                                assetType: e.isMultiple ? 1155 : 721,
                                supply: e.isMultiple
                                  ? e.form.numberOfCopies
                                  : 1,
                                royalties: e.form.royalties,
                                propName: e.form.propertyName,
                                propValue: e.form.propertyValue,
                                categoryId: e.form.categoryId,
                                collectionId: e.form.CollectionId,
                                ownerAddress: e.account,
                                file: e.file,
                              })
                            );
                          case 6:
                            if ((r = t.sent)) {
                              t.next = 9;
                              break;
                            }
                            return t.abrupt("return");
                          case 9:
                            if (
                              ((o = r.MetadataURI),
                              (n = r.AssetId),
                              (l = e),
                              (c = null),
                              !e.isMultiple)
                            ) {
                              t.next = 18;
                              break;
                            }
                            return (
                              (t.next = 15),
                              e.mint1155({
                                royalties: e.form.royalties,
                                royaltiesAddress: e.account,
                                metadataUrl: o,
                                supply: e.form.numberOfCopies,
                                collectionId: e.form.CollectionId,
                                callbackSuccess: null,
                                callbackFailed: function () {
                                  l.closePopUp();
                                },
                              })
                            );
                          case 15:
                            (c = t.sent), (t.next = 21);
                            break;
                          case 18:
                            return (
                              (t.next = 20),
                              e.mint721({
                                royalties: e.form.royalties,
                                royaltiesAddress: e.account,
                                metadataUrl: o,
                                callbackSuccess: null,
                                callbackFailed: function () {
                                  l.closePopUp();
                                },
                              })
                            );
                          case 20:
                            c = t.sent;
                          case 21:
                            if (c) {
                              t.next = 23;
                              break;
                            }
                            return t.abrupt("return");
                          case 23:
                            return (
                              (m = (d = c).tokenId),
                              (f = d.transactionHash),
                              (v = d.blockNumber),
                              (t.next = 26),
                              e.updateTokenId({
                                assetId: n,
                                tokenId: null == m ? "" : m,
                                transactionHash: f,
                                blockNumber: v,
                                memberId: e.memberId,
                              })
                            );
                          case 26:
                            if (!(_ = t.sent).Success) {
                              t.next = 32;
                              break;
                            }
                            return (e.asset = _.Data), t.abrupt("return", !0);
                          case 32:
                            return t.abrupt("return", !1);
                          case 33:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              checkApprovedCoinStorageFee: function () {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              null == e.storageFee.CurrencyCode ||
                              null == e.account
                            ) {
                              t.next = 14;
                              break;
                            }
                            if (
                              ("bnb" ==
                                e.storageFee.CurrencyCode.toLowerCase() &&
                                (e.isApprovedCoinStorageFee = !0),
                              "ges" != e.storageFee.CurrencyCode.toLowerCase())
                            ) {
                              t.next = 6;
                              break;
                            }
                            return (
                              (t.next = 5),
                              e.isApprovedGES({
                                address: e.account,
                                isCrowdSales: !1,
                                isAuction: !1,
                              })
                            );
                          case 5:
                            e.isApprovedCoinStorageFee = t.sent;
                          case 6:
                            if (
                              "geg" != e.storageFee.CurrencyCode.toLowerCase()
                            ) {
                              t.next = 10;
                              break;
                            }
                            return (
                              (t.next = 9),
                              e.isApprovedGEG({
                                address: e.account,
                                isCrowdSales: !1,
                                isAuction: !1,
                              })
                            );
                          case 9:
                            e.isApprovedCoinStorageFee = t.sent;
                          case 10:
                            if (
                              "busd" != e.storageFee.CurrencyCode.toLowerCase()
                            ) {
                              t.next = 14;
                              break;
                            }
                            return (
                              (t.next = 13),
                              e.isApprovedBUSD({
                                address: e.account,
                                isCrowdSales: !1,
                                isAuction: !1,
                              })
                            );
                          case 13:
                            e.isApprovedCoinStorageFee = t.sent;
                          case 14:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              submit: function () {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var r, o, n, c, d, m, f;
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (e.$log.debug(h, "submit"),
                              e.closePopUp(),
                              e.$v.form.$touch(),
                              !e.$v.form.$pending && !e.$v.form.$error)
                            ) {
                              t.next = 6;
                              break;
                            }
                            return (
                              e.$log.warn(h, "submit form error"),
                              t.abrupt("return")
                            );
                          case 6:
                            if (
                              (e.$refs.loadingPopUpNewNFT.show(),
                              !(e.storageFee.Fee > 0))
                            ) {
                              t.next = 34;
                              break;
                            }
                            return (
                              e.$log.debug(
                                h,
                                "submit - getAndUpdateWalletBalance"
                              ),
                              (t.next = 11),
                              e.getAndUpdateWalletBalance()
                            );
                          case 11:
                            if (
                              (e.$log.debug(
                                h,
                                "submit - done getAndUpdateWalletBalance"
                              ),
                              (r = e.account_wallet.find(function (t) {
                                return (
                                  e.storageFee.CurrencyCode.toLowerCase() ==
                                  t.id
                                );
                              })),
                              e.$log.debug(
                                h,
                                "submit - storageFeeCurrencyWallet",
                                r
                              ),
                              !(r.num < e.storageFee.Fee))
                            ) {
                              t.next = 18;
                              break;
                            }
                            return (
                              e.closePopUp(),
                              e.$refs.addFundPopup.show(),
                              t.abrupt("return")
                            );
                          case 18:
                            return (
                              e.$log.debug(
                                h,
                                "submit - checkApprovedCoinStorageFee"
                              ),
                              (t.next = 21),
                              e.checkApprovedCoinStorageFee()
                            );
                          case 21:
                            if (e.isApprovedCoinStorageFee) {
                              t.next = 34;
                              break;
                            }
                            if (
                              "ges" != e.storageFee.CurrencyCode.toLowerCase()
                            ) {
                              t.next = 26;
                              break;
                            }
                            return (
                              (o = e),
                              (t.next = 26),
                              e.approveGES({
                                isCrowdSales: !1,
                                isAuction: !1,
                                callbackSuccess: function () {
                                  o.$log.debug(h, "submit - MGA approved"),
                                    (o.isApprovedCoinStorageFee = !0);
                                },
                                callbackFailed: function () {
                                  o.$log.warn(
                                    h,
                                    "submit - error in approving MGA"
                                  );
                                },
                              })
                            );
                          case 26:
                            if (
                              "geg" != e.storageFee.CurrencyCode.toLowerCase()
                            ) {
                              t.next = 30;
                              break;
                            }
                            return (
                              (n = e),
                              (t.next = 30),
                              e.approveGEG({
                                isCrowdSales: !1,
                                isAuction: !1,
                                callbackSuccess: function () {
                                  n.isApprovedCoinStorageFee = !0;
                                },
                                callbackFailed: function () {
                                  n.$log.warn(
                                    h,
                                    "submit - error in approving GEG"
                                  );
                                },
                              })
                            );
                          case 30:
                            if (
                              "busd" != e.storageFee.CurrencyCode.toLowerCase()
                            ) {
                              t.next = 34;
                              break;
                            }
                            return (
                              (c = e),
                              (t.next = 34),
                              e.approveBUSD({
                                isCrowdSales: !1,
                                isAuction: !1,
                                callbackSuccess: function () {
                                  c.isApprovedCoinStorageFee = !0;
                                },
                                callbackFailed: function () {
                                  c.$log.warn(
                                    h,
                                    "submit - error in approving BUSD"
                                  );
                                },
                              })
                            );
                          case 34:
                            return (t.next = 36), e.mint();
                          case 36:
                            (d = t.sent),
                              e.closePopUp(),
                              d && e.form.isOnSale
                                ? (e.$refs.sellAsset.setAsset(e.asset),
                                  (m = e),
                                  (f = function () {
                                    m.resetForm();
                                  }),
                                  e.isMultiple
                                    ? e.$refs.sellAsset.showSellNow(f, null)
                                    : e.$refs.sellAsset.showOfferType(f, null))
                                : d
                                ? (Object(l.c)("Asset created successfully"),
                                  e.resetForm())
                                : Object(l.b)(
                                    "Failed to create asset, please contact support for assistance."
                                  );
                          case 39:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              resetForm: function () {
                Object.assign(this.$data, {
                  file: null,
                  isSigning: !1,
                  isApprovedCoinStorageFee: !1,
                  share: {
                    tokenId: null,
                    contractAddress: null,
                    ownerWalletAddress: null,
                  },
                  form: {
                    NFTFileType: null,
                    NFTUrl: null,
                    isOnSale: !0,
                    name: null,
                    description: null,
                    royalties: null,
                    numberOfCopies: null,
                    propertyName: null,
                    propertyValue: null,
                    StoreId: null,
                    store: null,
                    CollectionId: null,
                    collection: null,
                    categoryId: null,
                    offerType: "SALE",
                  },
                  asset: null,
                }),
                  this.$v.$reset(),
                  (this.$refs.file.value = null),
                  $("#dropdownCategory").val(null),
                  $(".assetStore").removeClass("storeSelected");
              },
              selectedCollection: function (e) {
                if (1 != this.nftCollectionSelections.length) {
                  var element = $("#" + e.currentTarget.getAttribute("id"));
                  if (!element.hasClass("collectionSelected")) {
                    $(".assetCollection").removeClass("collectionSelected");
                    var t = e.currentTarget.getAttribute("value"),
                      r = e.currentTarget.getAttribute("name");
                    element.addClass("collectionSelected"),
                      (this.form.CollectionId = t),
                      (this.form.collection = r);
                  }
                }
              },
              selectedStore: function (e) {
                var element = $("#" + e.currentTarget.getAttribute("id"));
                if (element.hasClass("storeSelected"))
                  $(".assetStore").removeClass("storeSelected"),
                    (this.form.StoreId = null);
                else {
                  $(".assetStore").removeClass("storeSelected");
                  var t = e.currentTarget.getAttribute("value"),
                    r = e.currentTarget.getAttribute("name");
                  element.addClass("storeSelected"),
                    (this.form.StoreId = t),
                    (this.form.store = r);
                }
              },
              dateFormat: function (e, t) {
                return e.disabled || (e.disabled = t.getTime() < new Date()), e;
              },
            }
          ),
          created: function () {
            var e = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (null == e.memberId) {
                          t.next = 4;
                          break;
                        }
                        return (
                          e.getNFTStoreSelections(e.memberId),
                          (t.next = 4),
                          e.getNFTCollectionSelections(e.memberId)
                        );
                      case 4:
                        return (t.next = 6), e.getServiceCharges();
                      case 6:
                        return (t.next = 8), e.getStorageFee();
                      case 8:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          mounted: function () {
            this.getCategoryListing(), $(window).scrollTop(0);
          },
        },
        S = (r(1229), r(65)),
        component = Object(S.a)(
          w,
          function () {
            var e = this,
              t = e.$createElement,
              r = e._self._c || t;
            return r(
              "main",
              { staticClass: "main" },
              [
                r("div", { staticClass: "page-header breadcrumb-wrap" }, [
                  r("div", { staticClass: "container" }, [
                    r(
                      "div",
                      { staticClass: "breadcrumb" },
                      [
                        r("nuxt-link", { attrs: { to: "/" } }, [e._v("Home")]),
                        e._v(" "),
                        r("span"),
                        e._v(" "),
                        r("nuxt-link", { attrs: { to: "/create" } }, [
                          e._v("Manage Collectible Type"),
                        ]),
                        e._v(" "),
                        r("span"),
                        e._v(" Create Collectible\n            "),
                      ],
                      1
                    ),
                  ]),
                ]),
                e._v(" "),
                r(
                  "section",
                  {
                    staticClass:
                      "create-collectible section-padding-60 position-relative wow fadeIn animated",
                  },
                  [
                    r("div", { staticClass: "container" }, [
                      r("div", { staticClass: "text-center mb-30" }, [
                        r("h2", { staticStyle: { color: "#e7e7e7" } }, [
                          e._v(
                            "Create " +
                              e._s(e.isMultiple ? "Multiple" : "Single") +
                              " Collectible"
                          ),
                        ]),
                      ]),
                      e._v(" "),
                      r("div", { staticClass: "form-wrap" }, [
                        r("div", { staticClass: "row" }, [
                          r("div", { staticClass: "col-lg-6" }, [
                            r(
                              "div",
                              { staticClass: "form-group uploadfile-wrap" },
                              [
                                e._m(0),
                                e._v(" "),
                                r("input", {
                                  ref: "file",
                                  staticClass: "form-control-file",
                                  attrs: {
                                    type: "file",
                                    id: "uploadfile",
                                    accept:
                                      ".jpg,.jpeg,.png,.webp,.gif,.mp3,.mp4",
                                  },
                                  on: {
                                    change: function (t) {
                                      return e.handleFileUpload();
                                    },
                                  },
                                }),
                                e._v(" "),
                                r("small", { staticClass: "text-gray" }, [
                                  e._v(
                                    "JPG, JPEG, PNG, GIF, WEBP, MP4 or MP3. Max 30mb"
                                  ),
                                ]),
                              ]
                            ),
                            e._v(" "),
                            r("div", { staticClass: "form-box" }, [
                              r(
                                "div",
                                { staticClass: "custom-control custom-switch" },
                                [
                                  r("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: e.form.isOnSale,
                                        expression: "form.isOnSale",
                                      },
                                    ],
                                    staticClass: "custom-control-input",
                                    attrs: {
                                      type: "checkbox",
                                      id: "toggle-event",
                                    },
                                    domProps: {
                                      checked: Array.isArray(e.form.isOnSale)
                                        ? e._i(e.form.isOnSale, null) > -1
                                        : e.form.isOnSale,
                                    },
                                    on: {
                                      change: function (t) {
                                        var r = e.form.isOnSale,
                                          o = t.target,
                                          n = !!o.checked;
                                        if (Array.isArray(r)) {
                                          var l = e._i(r, null);
                                          o.checked
                                            ? l < 0 &&
                                              e.$set(
                                                e.form,
                                                "isOnSale",
                                                r.concat([null])
                                              )
                                            : l > -1 &&
                                              e.$set(
                                                e.form,
                                                "isOnSale",
                                                r
                                                  .slice(0, l)
                                                  .concat(r.slice(l + 1))
                                              );
                                        } else e.$set(e.form, "isOnSale", n);
                                      },
                                    },
                                  }),
                                  e._v(" "),
                                  r(
                                    "label",
                                    {
                                      staticClass: "custom-control-label",
                                      attrs: { for: "toggle-event" },
                                    },
                                    [e._v("Put On Sale")]
                                  ),
                                  e._v(" "),
                                  r("br"),
                                  r("span", { staticClass: "text-gray" }, [
                                    e._v(
                                      "Your asset will be published in market place for sale"
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                            e._v(" "),
                            e.categoryListing
                              ? r("div", { staticClass: "mt-30" }, [
                                  e._m(1),
                                  e._v(" "),
                                  r(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: e.form.categoryId,
                                          expression: "form.categoryId",
                                        },
                                      ],
                                      staticClass:
                                        "form-select dropdownCategoryMenu",
                                      attrs: { id: "dropdownCategory" },
                                      on: {
                                        change: function (t) {
                                          var r = Array.prototype.filter
                                            .call(
                                              t.target.options,
                                              function (e) {
                                                return e.selected;
                                              }
                                            )
                                            .map(function (e) {
                                              return "_value" in e
                                                ? e._value
                                                : e.value;
                                            });
                                          e.$set(
                                            e.form,
                                            "categoryId",
                                            t.target.multiple ? r : r[0]
                                          );
                                        },
                                      },
                                    },
                                    e._l(e.categoryListing, function (t) {
                                      return r(
                                        "option",
                                        {
                                          key: t.Id,
                                          staticClass: "dropdownCategory",
                                          staticStyle: {
                                            "margin-bottom": "10px",
                                          },
                                          domProps: { value: t.Id },
                                        },
                                        [
                                          r(
                                            "div",
                                            { staticClass: "optionCategory" },
                                            [e._v(e._s(t.Name))]
                                          ),
                                        ]
                                      );
                                    }),
                                    0
                                  ),
                                  e._v(" "),
                                  e.$v.form.categoryId.$error
                                    ? r("span", { staticClass: "error" }, [
                                        e._v("Category is required"),
                                      ])
                                    : e._e(),
                                ])
                              : e._e(),
                            e._v(" "),
                            e.nftCollectionSelections.length > 0
                              ? r("div", { staticClass: "mt-30" }, [
                                  r("label", [e._v("Choose Collection ")]),
                                  e._v(" "),
                                  r(
                                    "ul",
                                    { staticClass: "list-choosecollection" },
                                    e._l(
                                      e.nftCollectionSelections,
                                      function (t, o) {
                                        return r("li", { key: o }, [
                                          r("a", [
                                            r(
                                              "div",
                                              {
                                                staticClass:
                                                  "collection assetCollection",
                                                class:
                                                  1 ==
                                                    e.nftCollectionSelections
                                                      .length || 0 == o
                                                    ? "collectionSelected"
                                                    : "",
                                                attrs: {
                                                  id:
                                                    "collection_" +
                                                    t.CollectionId,
                                                  value: t.CollectionId,
                                                  name: t.Name,
                                                },
                                                on: {
                                                  click: e.selectedCollection,
                                                },
                                              },
                                              [
                                                r("img", {
                                                  attrs: {
                                                    src: t.LogoUrl,
                                                    width: "50",
                                                    alt: "",
                                                  },
                                                }),
                                                e._v(" "),
                                                r("div", [e._v(e._s(t.Name))]),
                                              ]
                                            ),
                                          ]),
                                        ]);
                                      }
                                    ),
                                    0
                                  ),
                                ])
                              : e._e(),
                            e._v(" "),
                            1 == e.form.isOnSale &&
                            e.nftStoreSelections.length > 0
                              ? r("div", { staticClass: "mt-30" }, [
                                  e._m(2),
                                  e._v(" "),
                                  r(
                                    "ul",
                                    { staticClass: "list-choosecollection" },
                                    e._l(e.nftStoreSelections, function (t) {
                                      var o = t.StoreId,
                                        n = t.Name,
                                        l = t.Logo;
                                      return r("li", { key: o }, [
                                        r("a", [
                                          r(
                                            "div",
                                            {
                                              staticClass:
                                                "collection assetStore",
                                              attrs: {
                                                id: "store_" + o,
                                                value: o,
                                                name: n,
                                              },
                                              on: { click: e.selectedStore },
                                            },
                                            [
                                              r("img", {
                                                attrs: {
                                                  src: l,
                                                  width: "50",
                                                  alt: "",
                                                },
                                              }),
                                              e._v(" "),
                                              r("div", [e._v(e._s(n))]),
                                            ]
                                          ),
                                        ]),
                                      ]);
                                    }),
                                    0
                                  ),
                                ])
                              : e._e(),
                            e._v(" "),
                            r("div", { staticClass: "form-group mt-30" }, [
                              e._m(3),
                              e._v(" "),
                              r("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model.trim",
                                    value: e.$v.form.name.$model,
                                    expression: "$v.form.name.$model",
                                    modifiers: { trim: !0 },
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder:
                                    'e.g. "Redeemable card with logo"',
                                },
                                domProps: { value: e.$v.form.name.$model },
                                on: {
                                  input: function (t) {
                                    t.target.composing ||
                                      e.$set(
                                        e.$v.form.name,
                                        "$model",
                                        t.target.value.trim()
                                      );
                                  },
                                  blur: function (t) {
                                    return e.$forceUpdate();
                                  },
                                },
                              }),
                              e._v(" "),
                              e.$v.form.name.$error
                                ? r("span", { staticClass: "error" }, [
                                    e._v("Name is required"),
                                  ])
                                : e._e(),
                            ]),
                            e._v(" "),
                            r("div", { staticClass: "form-group mt-30" }, [
                              e._m(4),
                              e._v(" "),
                              r("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: e.form.description,
                                    expression: "form.description",
                                  },
                                ],
                                staticClass: "form-control",
                                attrs: {
                                  type: "text",
                                  placeholder:
                                    'e.g. "After purchasing you"ll able to get real cards"',
                                },
                                domProps: { value: e.form.description },
                                on: {
                                  input: function (t) {
                                    t.target.composing ||
                                      e.$set(
                                        e.form,
                                        "description",
                                        t.target.value
                                      );
                                  },
                                },
                              }),
                            ]),
                            e._v(" "),
                            e.isMultiple
                              ? e._e()
                              : r("div", { staticClass: "form-group mt-30" }, [
                                  e._m(5),
                                  e._v(" "),
                                  r("div", { staticClass: "input-last-wrap" }, [
                                    r("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: e.form.royalties,
                                          expression: "form.royalties",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "number",
                                        min: "0",
                                        max: "100",
                                        step: ".01",
                                        maxlength: "5",
                                        placeholder: "e.g. 10%",
                                      },
                                      domProps: { value: e.form.royalties },
                                      on: {
                                        keypress: function (t) {
                                          return e.isNumber(t);
                                        },
                                        input: function (t) {
                                          t.target.composing ||
                                            e.$set(
                                              e.form,
                                              "royalties",
                                              t.target.value
                                            );
                                        },
                                      },
                                    }),
                                    e._v(" "),
                                    r("span", { staticClass: "input-last" }, [
                                      e._v("%"),
                                    ]),
                                  ]),
                                  e._v(" "),
                                  r("small", { staticClass: "text-gray" }, [
                                    e._v("Suggested: 10%, 20%, 30% "),
                                  ]),
                                  e._v(" "),
                                  e.$v.form.royalties.between
                                    ? e._e()
                                    : r("div", { staticClass: "error" }, [
                                        e._v(
                                          "Must be between " +
                                            e._s(
                                              e.$v.form.royalties.$params
                                                .between.min
                                            ) +
                                            " and " +
                                            e._s(
                                              e.$v.form.royalties.$params
                                                .between.max
                                            )
                                        ),
                                      ]),
                                ]),
                            e._v(" "),
                            e.isMultiple
                              ? r("div", { staticClass: "form-group mt-30" }, [
                                  r("div", { staticClass: "row" }, [
                                    r("div", { staticClass: "col-6" }, [
                                      e._m(6),
                                      e._v(" "),
                                      r(
                                        "div",
                                        { staticClass: "input-last-wrap" },
                                        [
                                          r("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: e.form.royalties,
                                                expression: "form.royalties",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              min: "0",
                                              max: "100",
                                              step: ".01",
                                              maxlength: "5",
                                              placeholder: "e.g. 10%",
                                            },
                                            domProps: {
                                              value: e.form.royalties,
                                            },
                                            on: {
                                              keypress: function (t) {
                                                return e.isNumber(t);
                                              },
                                              input: function (t) {
                                                t.target.composing ||
                                                  e.$set(
                                                    e.form,
                                                    "royalties",
                                                    t.target.value
                                                  );
                                              },
                                            },
                                          }),
                                          e._v(" "),
                                          r(
                                            "span",
                                            { staticClass: "input-last" },
                                            [e._v("%")]
                                          ),
                                        ]
                                      ),
                                      e._v(" "),
                                      r("small", { staticClass: "text-gray" }, [
                                        e._v("Suggested: 10%, 20%, 30% "),
                                      ]),
                                      e._v(" "),
                                      e.$v.form.royalties.between
                                        ? e._e()
                                        : r("div", { staticClass: "error" }, [
                                            e._v(
                                              "Must be between " +
                                                e._s(
                                                  e.$v.form.royalties.$params
                                                    .between.min
                                                ) +
                                                " and " +
                                                e._s(
                                                  e.$v.form.royalties.$params
                                                    .between.max
                                                )
                                            ),
                                          ]),
                                    ]),
                                    e._v(" "),
                                    r("div", { staticClass: "col-6" }, [
                                      e._m(7),
                                      e._v(" "),
                                      r(
                                        "div",
                                        { staticClass: "input-last-wrap" },
                                        [
                                          r("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: e.form.numberOfCopies,
                                                expression:
                                                  "form.numberOfCopies",
                                              },
                                            ],
                                            staticClass: "form-control",
                                            attrs: {
                                              type: "number",
                                              min: "1",
                                              placeholder: "e.g. 10",
                                            },
                                            domProps: {
                                              value: e.form.numberOfCopies,
                                            },
                                            on: {
                                              input: function (t) {
                                                t.target.composing ||
                                                  e.$set(
                                                    e.form,
                                                    "numberOfCopies",
                                                    t.target.value
                                                  );
                                              },
                                            },
                                          }),
                                        ]
                                      ),
                                      e._v(" "),
                                      r("small", { staticClass: "text-gray" }, [
                                        e._v("Amount of tokens"),
                                      ]),
                                      e._v(" "),
                                      e.$v.form.numberOfCopies.$error
                                        ? r("span", { staticClass: "error" }, [
                                            r("br"),
                                            e._v(
                                              "Number of copies is required"
                                            ),
                                          ])
                                        : e._e(),
                                      e._v(" "),
                                      e.$v.form.numberOfCopies.minValue
                                        ? e._e()
                                        : r("div", { staticClass: "error" }, [
                                            e._v(
                                              "Minimumly " +
                                                e._s(
                                                  e.$v.form.numberOfCopies
                                                    .$params.minValue.min
                                                ) +
                                                " copy"
                                            ),
                                          ]),
                                    ]),
                                  ]),
                                ])
                              : e._e(),
                            e._v(" "),
                            r("div", { staticClass: "form-group mt-30" }, [
                              e._m(8),
                              e._v(" "),
                              r("div", { staticClass: "row" }, [
                                r("div", { staticClass: "col-6" }, [
                                  r("div", { staticClass: "form-group" }, [
                                    r("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.trim",
                                          value: e.form.propertyName,
                                          expression: "form.propertyName",
                                          modifiers: { trim: !0 },
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "e.g. Size",
                                      },
                                      domProps: { value: e.form.propertyName },
                                      on: {
                                        input: function (t) {
                                          t.target.composing ||
                                            e.$set(
                                              e.form,
                                              "propertyName",
                                              t.target.value.trim()
                                            );
                                        },
                                        blur: function (t) {
                                          return e.$forceUpdate();
                                        },
                                      },
                                    }),
                                  ]),
                                ]),
                                e._v(" "),
                                r("div", { staticClass: "col-6" }, [
                                  r("div", { staticClass: "form-group" }, [
                                    r("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model.trim",
                                          value: e.form.propertyValue,
                                          expression: "form.propertyValue",
                                          modifiers: { trim: !0 },
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "e.g. M",
                                      },
                                      domProps: { value: e.form.propertyValue },
                                      on: {
                                        input: function (t) {
                                          t.target.composing ||
                                            e.$set(
                                              e.form,
                                              "propertyValue",
                                              t.target.value.trim()
                                            );
                                        },
                                        blur: function (t) {
                                          return e.$forceUpdate();
                                        },
                                      },
                                    }),
                                  ]),
                                ]),
                              ]),
                            ]),
                            e._v(" "),
                            r("div", { staticClass: "form-group mt-30" }, [
                              r("label", [e._v("Storage Fee")]),
                              e._v(" "),
                              r("div", { staticClass: "row" }, [
                                r("div", { staticClass: "col-12" }, [
                                  r("div", { staticClass: "form-group" }, [
                                    r(
                                      "span",
                                      { staticClass: "labelStorageFee" },
                                      [
                                        e._v(
                                          e._s(
                                            Number(
                                              e.storageFee.Fee
                                            ).toLocaleString()
                                          ) +
                                            " " +
                                            e._s(e.storageFee.CurrencyCode) +
                                            " "
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]),
                            e._v(" "),
                            r("div", { staticClass: "form-group mt-30" }, [
                              r(
                                "button",
                                {
                                  staticClass: "button w-50",
                                  attrs: {
                                    disabled:
                                      e.getDisableCreateNFTSetting ||
                                      (!e.getDisableCreateNFTSetting &&
                                        null == e.file),
                                  },
                                  on: { click: e.showComfirmation },
                                },
                                [e._v("Create Now")]
                              ),
                            ]),
                          ]),
                          e._v(" "),
                          r("div", { staticClass: "col-lg-6 text-center" }, [
                            r("div", { staticClass: "preview-wrap h-100" }, [
                              r("label", [e._v("Preview")]),
                              e._v(" "),
                              r("div", { staticClass: "preview-area mt-20" }, [
                                null == e.form.NFTUrl
                                  ? r("div", [
                                      e._v(
                                        "\n                                    Preview of your new collectible \n                                "
                                      ),
                                    ])
                                  : e._e(),
                                e._v(" "),
                                null != e.form.NFTUrl
                                  ? r("div", [
                                      "mp3" != e.form.NFTFileType &&
                                      "mp4" != e.form.NFTFileType
                                        ? r("img", {
                                            attrs: { src: e.form.NFTUrl },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "mp3" == e.form.NFTFileType
                                        ? r("audio", {
                                            attrs: {
                                              src: e.form.NFTUrl,
                                              controls: "controls",
                                              type: "audio/mp3",
                                            },
                                          })
                                        : e._e(),
                                      e._v(" "),
                                      "mp4" == e.form.NFTFileType
                                        ? r("video", {
                                            staticStyle: {
                                              "max-height": "90%",
                                              "max-width": "90%",
                                            },
                                            attrs: {
                                              src: e.form.NFTUrl,
                                              controls: "controls",
                                              type: "video/mp4",
                                              loop: "loop",
                                              muted: "muted",
                                            },
                                            domProps: { muted: !0 },
                                          })
                                        : e._e(),
                                    ])
                                  : e._e(),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                e._v(" "),
                r(
                  "div",
                  {
                    staticClass: "modal fade custom-modal popup",
                    attrs: {
                      id: "createNFTSummaryModal",
                      tabindex: "-1",
                      "aria-hidden": "true",
                    },
                  },
                  [
                    r(
                      "div",
                      {
                        staticClass: "modal-dialog modal-lg",
                        staticStyle: { "max-width": "500px !important" },
                      },
                      [
                        r("div", { staticClass: "modal-content" }, [
                          r("button", {
                            staticClass: "btn-close",
                            attrs: {
                              type: "button",
                              "data-bs-dismiss": "modal",
                              "aria-label": "Close",
                            },
                          }),
                          e._v(" "),
                          r("div", { staticClass: "modal-body" }, [
                            r("h5", { staticClass: "section-title style-1" }, [
                              e._v("Create New NFT"),
                            ]),
                            e._v(" "),
                            r("div", { staticClass: "text-center mt-10" }, [
                              r("div", { staticClass: "text-center" }, [
                                r("strong", [e._v(e._s(e.form.name))]),
                              ]),
                              e._v(" "),
                              "mp3" != e.form.NFTFileType &&
                              "mp4" != e.form.NFTFileType
                                ? r("img", {
                                    staticStyle: { "max-height": "100px" },
                                    attrs: { src: e.form.NFTUrl },
                                  })
                                : e._e(),
                              e._v(" "),
                              "mp3" == e.form.NFTFileType
                                ? r("audio", {
                                    staticStyle: { "max-height": "100px" },
                                    attrs: {
                                      src: e.form.NFTUrl,
                                      controls: "controls",
                                      type: "audio/mp3",
                                    },
                                  })
                                : e._e(),
                              e._v(" "),
                              "mp4" == e.form.NFTFileType
                                ? r("video", {
                                    staticStyle: {
                                      "max-height": "90%",
                                      "max-width": "90%",
                                    },
                                    attrs: {
                                      src: e.form.NFTUrl,
                                      controls: "controls",
                                      type: "video/mp4",
                                      loop: "loop",
                                      muted: "muted",
                                    },
                                    domProps: { muted: !0 },
                                  })
                                : e._e(),
                            ]),
                            e._v(" "),
                            e.form.description && e.form.description.length > 0
                              ? r("div", { staticClass: "osprice mt-10" }, [
                                  r(
                                    "table",
                                    {
                                      staticClass:
                                        "table table-borderless mb-0",
                                    },
                                    [
                                      r("tbody", [
                                        r("tr", [
                                          r("td", { staticClass: " w-50" }, [
                                            e._v(e._s(e.form.description)),
                                          ]),
                                        ]),
                                      ]),
                                    ]
                                  ),
                                ])
                              : e._e(),
                            e._v(" "),
                            r(
                              "table",
                              { staticClass: "order-summary table mt-20" },
                              [
                                r("tbody", [
                                  e.isMultiple
                                    ? r("tr", [
                                        e._m(9),
                                        e._v(" "),
                                        r(
                                          "td",
                                          { staticClass: "text-left w-50" },
                                          [e._v(e._s(e.form.numberOfCopies))]
                                        ),
                                      ])
                                    : e._e(),
                                  e._v(" "),
                                  e.form.royalties && e.form.royalties
                                    ? r("tr", [
                                        e._m(10),
                                        e._v(" "),
                                        r(
                                          "td",
                                          { staticClass: "text-left w-50" },
                                          [e._v(e._s(e.form.royalties))]
                                        ),
                                      ])
                                    : e._e(),
                                  e._v(" "),
                                  e.form.propertyName &&
                                  e.form.propertyName.length > 0
                                    ? r("tr", [
                                        e._m(11),
                                        e._v(" "),
                                        r(
                                          "td",
                                          { staticClass: "text-left w-50" },
                                          [
                                            e._v(
                                              e._s(e.form.propertyName) +
                                                " " +
                                                e._s(e.form.propertyValue)
                                            ),
                                          ]
                                        ),
                                      ])
                                    : e._e(),
                                  e._v(" "),
                                  e.form.categoryId && e.form.categoryId > 0
                                    ? r("tr", [
                                        e._m(12),
                                        e._v(" "),
                                        r(
                                          "td",
                                          { staticClass: "text-left w-50" },
                                          [e._v(e._s(e.selectedCategory))]
                                        ),
                                      ])
                                    : e._e(),
                                  e._v(" "),
                                  e.form.CollectionId && e.form.CollectionId > 0
                                    ? r("tr", [
                                        e._m(13),
                                        e._v(" "),
                                        r(
                                          "td",
                                          { staticClass: "text-left w-50" },
                                          [e._v(e._s(e.form.collection))]
                                        ),
                                      ])
                                    : e._e(),
                                  e._v(" "),
                                  e.form.StoreId && e.form.StoreId > 0
                                    ? r("tr", [
                                        e._m(14),
                                        e._v(" "),
                                        r(
                                          "td",
                                          { staticClass: "text-left w-50" },
                                          [e._v(e._s(e.form.store))]
                                        ),
                                      ])
                                    : e._e(),
                                  e._v(" "),
                                  r("tr", [
                                    e._m(15),
                                    e._v(" "),
                                    r("td", { staticClass: "text-left w-50" }, [
                                      e._v(
                                        e._s(
                                          Number(
                                            e.storageFee.Fee
                                          ).toLocaleString()
                                        ) +
                                          " " +
                                          e._s(e.storageFee.CurrencyCode)
                                      ),
                                    ]),
                                  ]),
                                ]),
                              ]
                            ),
                            e._v(" "),
                            e._m(16),
                            e._v(" "),
                            r(
                              "button",
                              {
                                staticClass: "button w-100",
                                on: { click: e.submit },
                              },
                              [e._v("Confirm")]
                            ),
                          ]),
                        ]),
                      ]
                    ),
                  ]
                ),
                e._v(" "),
                r("AddFund", {
                  ref: "addFundPopup",
                  attrs: {
                    currencyCode: e.storageFee.CurrencyCode,
                    message: "You're about to pay storage fee. ",
                  },
                }),
                e._v(" "),
                r("SellAsset", {
                  ref: "sellAsset",
                  attrs: { allowToSelectStore: !1 },
                }),
                e._v(" "),
                r("Loading", {
                  ref: "loadingPopUpNewNFT",
                  attrs: { message: "Minting your NFT.." },
                }),
              ],
              1
            );
          },
          [
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("label", { attrs: { for: "uploadfile" } }, [
                e._v("Upload File: "),
                r("span", { staticClass: "required" }, [e._v("*")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("label", [
                e._v("Choose Category "),
                r("span", { staticClass: "required" }, [e._v("*")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("label", [
                e._v("Choose Store "),
                r("span", { staticClass: "text-gray" }, [e._v("(Optional)")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("label", [
                e._v("Name "),
                r("span", { staticClass: "required" }, [e._v("*")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("label", [
                e._v("Description "),
                r("span", { staticClass: "text-gray" }, [e._v("(Optional)")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("label", [
                e._v("Royalties "),
                r("span", { staticClass: "text-gray" }, [e._v("(Optional)")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("label", [
                e._v("Royalties "),
                r("span", { staticClass: "text-gray" }, [e._v("(Optional)")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("label", [
                e._v("Number of copies "),
                r("span", { staticClass: "required" }, [e._v("*")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("label", [
                e._v("Properties "),
                r("span", { staticClass: "text-gray" }, [e._v("(Optional)")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("td", { staticClass: "w-50" }, [
                r("strong", [e._v("Number of copies")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("td", { staticClass: "w-50" }, [
                r("strong", [e._v("Royalties")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("td", { staticClass: "w-50" }, [
                r("strong", [e._v("Properties ")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("td", { staticClass: "w-50" }, [
                r("strong", [e._v("Category ")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("td", { staticClass: "w-50" }, [
                r("strong", [e._v("Collection ")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("td", { staticClass: "w-50" }, [
                r("strong", [e._v("Store ")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("td", { staticClass: "w-50" }, [
                r("strong", [e._v("Storage Fee ")]),
              ]);
            },
            function () {
              var e = this,
                t = e.$createElement,
                r = e._self._c || t;
              return r("div", { staticClass: "note mt-10 text-center row" }, [
                r("div", { staticClass: "col-md-10 offset-md-1 text-gray" }, [
                  e._v(
                    "Create new NFT, operation is not reversible after confirm"
                  ),
                ]),
              ]);
            },
          ],
          !1,
          null,
          "0d397489",
          null
        );
      t.default = component.exports;
      installComponents(component, {
        AddFund: r(1195).default,
        Loading: r(1193).default,
      });
    },
    1229: function (e, t, r) {
      "use strict";
      r(1202);
    },
    1230: function (e, t, r) {
      var o = r(99)(!1);
      o.push([
        e.i,
        ".error[data-v-0d397489]{color:red}input[data-v-0d397489]::-webkit-inner-spin-button,input[data-v-0d397489]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-0d397489]{-moz-appearance:textfield}.form-group input[type=number][data-v-0d397489]{border:0;border-bottom:1px solid #c7c1b8!important;background-color:#f4f4f4;border-radius:0}button[data-v-0d397489]:disabled,button[disabled][data-v-0d397489]{border:1px solid #999;background-color:#ccc;color:#666}.dropdownCategory[data-v-0d397489]{font-size:1.2rem;margin-bottom:5px}.dropdownCategoryMenu[data-v-0d397489]{font-size:1.1rem}.btn.btn-primary[data-v-0d397489]:focus{color:#fff;background-color:#000;border-color:#000;outline:none}",
        "",
      ]),
        (e.exports = o);
    },
    1287: function (e, t, r) {
      "use strict";
      r.r(t);
      var o = { components: { NewNFT: r(1227).default } },
        n = r(65),
        component = Object(n.a)(
          o,
          function () {
            var e = this.$createElement;
            return (this._self._c || e)("NewNFT", {
              attrs: { isMultiple: !1 },
            });
          },
          [],
          !1,
          null,
          null,
          null
        );
      t.default = component.exports;
      installComponents(component, { NewNFT: r(1227).default });
    },
  },
]);
