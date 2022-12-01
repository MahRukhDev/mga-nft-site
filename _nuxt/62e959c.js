(window.webpackJsonp = window.webpackJsonp || []).push([
  [4, 18],
  {
    1188: function (t, e, r) {
      "use strict";
      r.r(e);
      r(63), r(658);
      var n = r(11),
        o = r.n(n),
        c = r(218),
        l = {
          methods: {
            shareToFacebook: function () {
              for (
                var t = document.getElementsByClassName("btn-close"), i = 0;
                i < t.length;
                i++
              )
                t[i].click();
              return (
                window.open(
                  "https://facebook.com/sharer/sharer.php?u=" +
                    encodeURIComponent(this.$parent.selectedShareItemURL),
                  "facebook-share-dialog",
                  "width=900,height=400"
                ),
                !1
              );
            },
            shareToTwitter: function () {
              for (
                var t = document.getElementsByClassName("btn-close"), i = 0;
                i < t.length;
                i++
              )
                t[i].click();
              return (
                window.open(
                  "https://twitter.com/intent/tweet?url=" +
                    encodeURIComponent(this.$parent.selectedShareItemURL),
                  "twitter-share-dialog",
                  "width=900,height=400"
                ),
                !1
              );
            },
            shareToTelegram: function () {
              for (
                var t = document.getElementsByClassName("btn-close"), i = 0;
                i < t.length;
                i++
              )
                t[i].click();
              return (
                window.open(
                  "https://t.me/share/url?url=" +
                    encodeURIComponent(this.$parent.selectedShareItemURL),
                  "telegram-share-dialog",
                  "width=900,height=400"
                ),
                !1
              );
            },
            copyShareLink: function () {
              for (
                var t = document.getElementsByClassName("btn-close"), i = 0;
                i < t.length;
                i++
              )
                t[i].click();
              var e = this.$parent.selectedShareItemURL;
              if (/Mobi/.test(navigator.userAgent)) this.$copyText(e);
              else {
                var r = document.createElement("div");
                r.setAttribute("contentEditable", !0),
                  (r.innerHTML = e),
                  r.setAttribute(
                    "onfocus",
                    "document.execCommand('selectAll',false,null)"
                  ),
                  document.body.appendChild(r),
                  r.focus();
                var n = o()(r);
                if (navigator.userAgent.match(/ipad|iphone/i)) {
                  var l = n.get(0),
                    d = l.contentEditable,
                    v = l.readOnly;
                  (l.contentEditable = "true"), (l.readOnly = "false");
                  var m = document.createRange();
                  m.selectNodeContents(l);
                  var h = window.getSelection();
                  h.removeAllRanges(),
                    h.addRange(m),
                    l.setSelectionRange(0, 999999),
                    (l.contentEditable = d),
                    (l.readOnly = v);
                } else n.select();
                document.execCommand("copy"), document.body.removeChild(r);
              }
              Object(c.c)("Copied To Clipboard");
            },
          },
        },
        d = r(65),
        component = Object(d.a)(
          l,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "div",
              {
                staticClass: "modal fade custom-modal popup",
                attrs: {
                  id: "shareThiswModal",
                  tabindex: "-1",
                  "aria-labelledby": "shareThisModalLabel",
                  "aria-hidden": "true",
                },
              },
              [
                n("div", { staticClass: "modal-dialog" }, [
                  n("div", { staticClass: "modal-content" }, [
                    n("button", {
                      staticClass: "btn-close",
                      attrs: {
                        type: "button",
                        "data-bs-dismiss": "modal",
                        "aria-label": "Close",
                      },
                    }),
                    t._v(" "),
                    n("div", { staticClass: "modal-body" }, [
                      n("h5", { staticClass: "section-title style-1" }, [
                        t._v("Share This NFT"),
                      ]),
                      t._v(" "),
                      n("div", { staticClass: "row text-center" }, [
                        n("div", { staticClass: "col-6 col-sm-6 mt-30" }, [
                          n(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: { click: t.shareToTwitter },
                            },
                            [
                              n("img", {
                                attrs: {
                                  src: r(1189),
                                  width: "80",
                                  alt: "twitter",
                                },
                              }),
                              t._v(" "),
                              n("div", [t._v("Twitter")]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        n("div", { staticClass: "col-6 col-sm-6 mt-30" }, [
                          n(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: { click: t.shareToFacebook },
                            },
                            [
                              n("img", {
                                attrs: {
                                  src: r(1190),
                                  width: "80",
                                  alt: "facebook",
                                },
                              }),
                              t._v(" "),
                              n("div", [t._v("Facebook")]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        n("div", { staticClass: "col-6 col-sm-6 mt-30" }, [
                          n(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: { click: t.shareToTelegram },
                            },
                            [
                              n("img", {
                                attrs: {
                                  src: r(1191),
                                  width: "80",
                                  alt: "telegram",
                                },
                              }),
                              t._v(" "),
                              n("div", [t._v("Telegram")]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        n("div", { staticClass: "col-6 col-sm-6 mt-30" }, [
                          n(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: { click: t.copyShareLink },
                            },
                            [
                              n("img", {
                                attrs: {
                                  src: r(1192),
                                  width: "80",
                                  alt: "link",
                                },
                              }),
                              t._v(" "),
                              n("div", [t._v("Copy Link")]),
                            ]
                          ),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    1195: function (t, e, r) {
      "use strict";
      r.r(e);
      var n = [
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("h5", { staticClass: "section-title style-1" }, [
              t._v("One last step..."),
              r("br"),
              t._v("Adding Fund"),
            ]);
          },
          function () {
            var t = this.$createElement,
              e = this._self._c || t;
            return e("div", { staticClass: "text-center mt-30 mb-30" }, [
              e("img", { attrs: { src: r(1196), width: "80", alt: "wallet" } }),
            ]);
          },
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r(
              "div",
              {
                staticClass: "container note mb-80",
                staticStyle: { display: "none" },
              },
              [
                r("p", [
                  t._v("Pop-up: "),
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
                    [t._v("Adding Fund ")]
                  ),
                ]),
                t._v(" "),
                r("p", [
                  t._v("Pop-up: "),
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
                    [t._v("Funding")]
                  ),
                ]),
              ]
            );
          },
        ],
        o = (r(86), r(62), r(76), r(40), r(116), r(75), r(117), r(55)),
        c = (r(63), r(658), r(30)),
        l = r(218),
        d = r(11),
        v = r.n(d);
      function m(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      var h = {
          name: "AddFund",
          props: ["message", "currencyCode"],
          components: { QrcodeVue: r(1201).a },
          computed: (function (t) {
            for (var i = 1; i < arguments.length; i++) {
              var source = null != arguments[i] ? arguments[i] : {};
              i % 2
                ? m(Object(source), !0).forEach(function (e) {
                    Object(o.a)(t, e, source[e]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    t,
                    Object.getOwnPropertyDescriptors(source)
                  )
                : m(Object(source)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(source, e)
                    );
                  });
            }
            return t;
          })(
            {},
            Object(c.d)("web3Modal", [
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
                var t = document.getElementsByClassName("btn-close"), i = 0;
                i < t.length;
                i++
              )
                t[i].click();
            },
            addFund: function () {
              this.closePopUp(), document.getElementById("lnkFunding").click();
            },
            copy: function () {
              var t = this.account;
              if (/Mobi/.test(navigator.userAgent)) this.$copyText(t);
              else {
                var e = document.createElement("div");
                e.setAttribute("contentEditable", !0),
                  (e.innerHTML = t),
                  e.setAttribute(
                    "onfocus",
                    "document.execCommand('selectAll',false,null)"
                  ),
                  document.body.appendChild(e),
                  e.focus();
                var r = v()(e);
                if (navigator.userAgent.match(/ipad|iphone/i)) {
                  var n = r.get(0),
                    o = n.contentEditable,
                    c = n.readOnly;
                  (n.contentEditable = "true"), (n.readOnly = "false");
                  var d = document.createRange();
                  d.selectNodeContents(n);
                  var m = window.getSelection();
                  m.removeAllRanges(),
                    m.addRange(d),
                    n.setSelectionRange(0, 999999),
                    (n.contentEditable = o),
                    (n.readOnly = c);
                } else r.select();
                document.execCommand("copy"), document.body.removeChild(e);
              }
              Object(l.c)("Copied To Clipboard");
            },
          },
        },
        f = h,
        _ = r(65),
        component = Object(_.a)(
          f,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
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
                      t._v(" "),
                      r("div", { staticClass: "modal-body" }, [
                        t._m(0),
                        t._v(" "),
                        r("div", { staticClass: "mt-20 text-center" }, [
                          t._v(
                            "\n                        " +
                              t._s(t.message) +
                              "There isn't enough " +
                              t._s(t.currencyCode) +
                              " in your wallet. Add fund now to finish!\n                    "
                          ),
                        ]),
                        t._v(" "),
                        t._m(1),
                        t._v(" "),
                        r(
                          "button",
                          {
                            staticClass: "button w-100",
                            on: { click: t.addFund },
                          },
                          [t._v("Add Fund")]
                        ),
                      ]),
                    ]),
                  ]),
                ]
              ),
              t._v(" "),
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
                      t._v(" "),
                      r("div", { staticClass: "modal-body" }, [
                        r("h5", { staticClass: "section-title style-1" }, [
                          t._v("Funding"),
                        ]),
                        t._v(" "),
                        r("div", { staticClass: "mt-20 text-center" }, [
                          t._v(
                            "\n                        Receive BNB, MGA, MGAs\n                    "
                          ),
                        ]),
                        t._v(" "),
                        r(
                          "div",
                          { staticClass: "text-center mt-30 mb-30" },
                          [
                            r("qrcode-vue", {
                              attrs: {
                                value: null == t.account ? "" : t.account,
                                size: "250",
                                level: "H",
                              },
                            }),
                          ],
                          1
                        ),
                        t._v(" "),
                        r("div", { staticClass: "mt-20 text-center" }, [
                          t._v(
                            "\n                        Scan QR code or copy the address below\n                    "
                          ),
                        ]),
                        t._v(" "),
                        r("div", { staticClass: "mt-5 text-center" }, [
                          r("span", { staticClass: "color-gold" }, [
                            r("span", [t._v(" " + t._s(t.account) + " ")]),
                            r("b", { staticClass: "ml-2 cp" }, [
                              r(
                                "a",
                                { attrs: { href: "#" }, on: { click: t.copy } },
                                [t._v("Copy")]
                              ),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]),
                ]
              ),
              t._v(" "),
              t._m(2),
            ]);
          },
          n,
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
    },
    1196: function (t, e, r) {
      t.exports = r.p + "img/icon-wallet.bce8246.png";
    },
    1231: function (t, e, r) {
      "use strict";
      r.r(e);
      r(86), r(62), r(76), r(116), r(75), r(117);
      var n = r(55),
        o = r(4),
        c =
          (r(659),
          r(40),
          r(101),
          r(77),
          r(141),
          r(63),
          r(658),
          r(219),
          r(23),
          r(11)),
        l = r.n(c),
        d = r(30),
        v = r(173),
        m = r(1195),
        h = r(222),
        f = r(1188),
        _ = r(218);
      function C(object, t) {
        var e = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(object);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(object, t).enumerable;
            })),
            e.push.apply(e, r);
        }
        return e;
      }
      function y(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? C(Object(source), !0).forEach(function (e) {
                Object(n.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : C(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var w,
        k = "BuyNFT.vue | ",
        A = {
          name: "BuyNFT",
          components: { ShareAsset: f.default, AddFund: m.default },
          mixins: [v.a],
          data: function () {
            return {
              assetSellOrderId: null,
              name: null,
              url: null,
              buyerAddress: null,
              tokenAddress: null,
              tokenId: null,
              assetType: null,
              ownerAddress: null,
              salt: null,
              signature: null,
              buyPrice: null,
              currency: null,
              transactionHash: "",
              confirmed: !1,
              isApprovedCoin: !1,
              isApproving: !1,
              callbackSuccess: null,
              assetId: null,
              sellOrderQuantity: null,
              collectionGroupId: null,
            };
          },
          watch: {
            account:
              ((w = Object(o.a)(
                regeneratorRuntime.mark(function t() {
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2), this.getAndUpdateWalletBalance()
                            );
                          case 2:
                            return (t.next = 4), this.checkApprovedCoin();
                          case 4:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    this
                  );
                })
              )),
              function () {
                return w.apply(this, arguments);
              }),
          },
          validations: function () {},
          computed: y(
            y(
              y(
                y(
                  {},
                  Object(d.d)("memberProfile", ["memberId", "likedAssetList"])
                ),
                Object(d.d)("web3Modal", [
                  "account",
                  "account_short",
                  "account_wallet",
                ])
              ),
              Object(d.d)("sales", ["serviceCharges"])
            ),
            {},
            {
              wallet: function () {
                var t = this;
                return null != this.currency
                  ? this.account_wallet.find(function (e) {
                      return t.currency.toLowerCase() == e.id;
                    })
                  : this.account_wallet[1];
              },
              transactionHashShort: function () {
                return (
                  this.transactionHash.substring(0, 6) +
                  "..." +
                  this.transactionHash.slice(-4)
                );
              },
              totalPrice: function () {
                return this.toFixedIfNecessary(
                  this.buyPrice * ((this.buyerFee + 100) / 100),
                  6
                );
              },
              txUrl: function () {
                return "/bscscan/" + this.transactionHash;
              },
              addFundMessage: function () {
                return "You're about to buy " + this.name + ". ";
              },
              buyerFee: function () {
                if (null == this.serviceCharges) return 0;
                var t = "";
                if (null == this.currency) return 0;
                t = this.currency;
                var e = this.serviceCharges.find(function (e) {
                  return (
                    e.CurrencyCode.toLowerCase() == t.toLowerCase() &&
                    1 == e.ServiceChargeTypeId
                  );
                });
                return null == e ? 0 : e.BuyerFeePercentage;
              },
            }
          ),
          methods: y(
            y(
              y({}, Object(d.b)("sales", ["getServiceCharges"])),
              Object(d.b)("web3Modal", [
                "connect",
                "getBNBBalance",
                "getGESBalance",
                "getGEGBalance",
                "getBUSDBalance",
                "buyNFT",
                "approveGES",
                "isApprovedGES",
                "approveGEG",
                "isApprovedGEG",
                "approveBUSD",
                "isApprovedBUSD",
              ])
            ),
            {},
            {
              buyNow: function (
                t,
                e,
                r,
                n,
                c,
                d,
                v,
                m,
                h,
                f,
                _,
                C,
                y,
                w,
                A,
                S
              ) {
                var x = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function o() {
                    return regeneratorRuntime.wrap(function (o) {
                      for (;;)
                        switch ((o.prev = o.next)) {
                          case 0:
                            return (
                              (x.assetSellOrderId = e),
                              (x.name = n),
                              (x.url = c),
                              (x.buyerAddress = d),
                              (x.tokenAddress = v),
                              (x.tokenId = m),
                              (x.assetType = h),
                              (x.ownerAddress = f),
                              (x.salt = _),
                              (x.signature = C),
                              (x.buyPrice = y),
                              (x.currency = w),
                              (x.callbackSuccess = S),
                              (x.assetId = t),
                              (x.sellOrderQuantity = r),
                              (x.collectionGroupId = A),
                              l()("#hdTokenAddress").val(v),
                              l()("#hdTokenId").val(m),
                              l()("#hdUserAccount").val(x.account),
                              l()("#hdCollectionGroupId").val(A),
                              (o.next = 22),
                              x.getAndUpdateWalletBalance()
                            );
                          case 22:
                            if (x.account) {
                              o.next = 27;
                              break;
                            }
                            return (o.next = 25), x.connect();
                          case 25:
                            o.next = 28;
                            break;
                          case 27:
                            x.wallet.num < x.buyPrice
                              ? x.$refs.addFundPopup.show()
                              : document
                                  .getElementById("lnkOrderSummary")
                                  .click();
                          case 28:
                            x.checkApprovedCoin(),
                              x.$log.debug(
                                k,
                                "buyNow - buyerAddress",
                                x.buyerAddress
                              );
                          case 30:
                          case "end":
                            return o.stop();
                        }
                    }, o);
                  })
                )();
              },
              closePopUp: function () {
                for (
                  var t = document.getElementsByClassName("btn-close"), i = 0;
                  i < t.length;
                  i++
                )
                  t[i].click();
              },
              confirmBuyNow: function () {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, n;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (r = t),
                              (t.confirmed = !0),
                              (n = null),
                              (e.next = 5),
                              t.buyNFT({
                                buyerAddress: t.buyerAddress,
                                tokenAddress: t.tokenAddress,
                                tokenId: t.tokenId,
                                assetType: t.assetType.toString(),
                                ownerAddress: t.ownerAddress,
                                salt: t.salt,
                                signature: t.signature,
                                buyPrice: t.buyPrice,
                                currency: t.currency.toLowerCase(),
                                assetId: t.assetId,
                                sellOrderId: t.assetSellOrderId,
                                buyerId: t.memberId,
                                sellOrderQuantity: t.sellOrderQuantity,
                                callbackFailed: function () {
                                  r.closePopUp(), (r.confirmed = !1);
                                },
                              })
                            );
                          case 5:
                            if ((n = e.sent)) {
                              e.next = 8;
                              break;
                            }
                            return e.abrupt("return");
                          case 8:
                            return (
                              (t.transactionHash = n),
                              (e.next = 11),
                              Object(h.a)(
                                t.assetSellOrderId,
                                t.memberId,
                                t.transactionHash
                              )
                            );
                          case 11:
                            t.closePopUp(),
                              document.getElementById("lnkCongrate").click(),
                              t.callbackSuccess && t.callbackSuccess(),
                              (t.confirmed = !1);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              approveCoin: function () {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, n, o;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t.isApproving = !0),
                              "ges" != t.currency.toLowerCase())
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (
                              (r = t),
                              (e.next = 5),
                              t.approveGES({
                                isCrowdSales: !1,
                                isAuction: !1,
                                callbackSuccess: function () {
                                  (r.isApprovedCoin = !0), (r.isApproving = !1);
                                },
                                callbackFailed: function () {
                                  r.$log.warn(
                                    k,
                                    "approveCoin - error in approving MGA"
                                  ),
                                    (r.isApproving = !1),
                                    r.closePopUp();
                                },
                              })
                            );
                          case 5:
                            if ("geg" != t.currency.toLowerCase()) {
                              e.next = 9;
                              break;
                            }
                            return (
                              (n = t),
                              (e.next = 9),
                              t.approveGEG({
                                isCrowdSales: !1,
                                isAuction: !1,
                                callbackSuccess: function () {
                                  (n.isApprovedCoin = !0), (n.isApproving = !1);
                                },
                                callbackFailed: function () {
                                  n.$log.warn(
                                    k,
                                    "approveCoin - error in approving GEG"
                                  ),
                                    (n.isApproving = !1),
                                    n.closePopUp();
                                },
                              })
                            );
                          case 9:
                            if ("busd" != t.currency.toLowerCase()) {
                              e.next = 13;
                              break;
                            }
                            return (
                              (o = t),
                              (e.next = 13),
                              t.approveBUSD({
                                isCrowdSales: !1,
                                isAuction: !1,
                                callbackSuccess: function () {
                                  (o.isApprovedCoin = !0), (o.isApproving = !1);
                                },
                                callbackFailed: function () {
                                  o.$log.warn(
                                    k,
                                    "approveCoin - error in approving BUSD"
                                  ),
                                    (o.isApproving = !1),
                                    o.closePopUp();
                                },
                              })
                            );
                          case 13:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              checkApprovedCoin: function () {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function e() {
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (null == t.currency || null == t.account) {
                              e.next = 14;
                              break;
                            }
                            if (
                              ("bnb" == t.currency.toLowerCase() &&
                                (t.isApprovedCoin = !0),
                              "ges" != t.currency.toLowerCase())
                            ) {
                              e.next = 6;
                              break;
                            }
                            return (
                              (e.next = 5),
                              t.isApprovedGES({
                                address: t.account,
                                isCrowdSales: !1,
                                isAuction: !1,
                              })
                            );
                          case 5:
                            t.isApprovedCoin = e.sent;
                          case 6:
                            if ("geg" != t.currency.toLowerCase()) {
                              e.next = 10;
                              break;
                            }
                            return (
                              (e.next = 9),
                              t.isApprovedGEG({
                                address: t.account,
                                isCrowdSales: !1,
                                isAuction: !1,
                              })
                            );
                          case 9:
                            t.isApprovedCoin = e.sent;
                          case 10:
                            if ("busd" != t.currency.toLowerCase()) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (e.next = 13),
                              t.isApprovedBUSD({
                                address: t.account,
                                isCrowdSales: !1,
                                isAuction: !1,
                              })
                            );
                          case 13:
                            t.isApprovedCoin = e.sent;
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              shareToFacebook: function () {
                var t =
                  "https://social.stoneagenft.com/asset/" +
                  this.tokenAddress +
                  "/" +
                  this.tokenId +
                  "/" +
                  this.buyerAddress;
                return (
                  window.open(
                    "https://facebook.com/sharer/sharer.php?u=" +
                      encodeURIComponent(t),
                    "facebook-share-dialog",
                    "width=900,height=400"
                  ),
                  !1
                );
              },
              shareToTwitter: function () {
                var t =
                  "https://social.stoneagenft.com/asset/" +
                  this.tokenAddress +
                  "/" +
                  this.tokenId +
                  "/" +
                  this.buyerAddress;
                return (
                  window.open(
                    "https://twitter.com/intent/tweet?url=" +
                      encodeURIComponent(t),
                    "twitter-share-dialog",
                    "width=900,height=400"
                  ),
                  !1
                );
              },
              shareToTelegram: function () {
                var t =
                  "https://social.stoneagenft.com/asset/" +
                  this.tokenAddress +
                  "/" +
                  this.tokenId +
                  "/" +
                  this.buyerAddress;
                return (
                  window.open(
                    "https://t.me/share/url?url=" + encodeURIComponent(t),
                    "telegram-share-dialog",
                    "width=900,height=400"
                  ),
                  !1
                );
              },
              copyShareLink: function () {
                var t =
                  "https://social.stoneagenft.com/asset/" +
                  this.tokenAddress +
                  "/" +
                  this.tokenId +
                  "/" +
                  this.buyerAddress;
                if (/Mobi/.test(navigator.userAgent)) this.$copyText(t);
                else {
                  var e = document.createElement("div");
                  e.setAttribute("contentEditable", !0),
                    (e.innerHTML = t),
                    e.setAttribute(
                      "onfocus",
                      "document.execCommand('selectAll',false,null)"
                    ),
                    document.body.appendChild(e),
                    e.focus();
                  var r = l()(e);
                  if (navigator.userAgent.match(/ipad|iphone/i)) {
                    var n = r.get(0),
                      o = n.contentEditable,
                      c = n.readOnly;
                    (n.contentEditable = "true"), (n.readOnly = "false");
                    var d = document.createRange();
                    d.selectNodeContents(n);
                    var v = window.getSelection();
                    v.removeAllRanges(),
                      v.addRange(d),
                      n.setSelectionRange(0, 999999),
                      (n.contentEditable = o),
                      (n.readOnly = c);
                  } else r.select();
                  document.execCommand("copy"), document.body.removeChild(e);
                }
                Object(_.c)("Copied To Clipboard");
              },
            }
          ),
          beforeMount: function () {
            return Object(o.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          created: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t.$root.$refs.A = t),
                          (e.next = 3),
                          t.getServiceCharges()
                        );
                      case 3:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          mounted: function () {
            var t = this.$router;
            window
              .jQuery(document)
              .on("hidden.bs.modal", "#orderSummaryCongraModal", function () {
                "2" == l()("#hdCollectionGroupId").val()
                  ? t.push({
                      path: "/totem/"
                        .concat(l()("#hdTokenAddress").val(), "/")
                        .concat(l()("#hdTokenId").val(), "/")
                        .concat(l()("#hdUserAccount").val(), "/"),
                    })
                  : t.push({ name: "/" });
              });
          },
        },
        S = A,
        x = r(65),
        component = Object(x.a)(
          S,
          function () {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e;
            return n(
              "main",
              [
                t._m(0),
                t._v(" "),
                n(
                  "div",
                  {
                    staticClass: "modal fade custom-modal popup",
                    attrs: {
                      id: "orderSummaryModal",
                      tabindex: "-1",
                      "aria-hidden": "true",
                    },
                  },
                  [
                    n("div", { staticClass: "modal-dialog" }, [
                      n("div", { staticClass: "modal-content" }, [
                        n("button", {
                          staticClass: "btn-close",
                          attrs: {
                            type: "button",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close",
                          },
                        }),
                        t._v(" "),
                        n("div", { staticClass: "modal-body" }, [
                          n("h5", { staticClass: "section-title style-1" }, [
                            t._v("Order Summary"),
                          ]),
                          t._v(" "),
                          n("div", { staticClass: "osprice mt-20" }, [
                            n(
                              "table",
                              { staticClass: "table table-borderless mb-0" },
                              [
                                n("tbody", [
                                  n("tr", [
                                    t._m(1),
                                    t._v(" "),
                                    n(
                                      "td",
                                      { staticClass: "text-right w-50" },
                                      [
                                        t._v(t._s(t.buyPrice) + " "),
                                        t.currency
                                          ? n("span", [
                                              t._v(
                                                " " +
                                                  t._s(t.currency.toUpperCase())
                                              ),
                                            ])
                                          : t._e(),
                                      ]
                                    ),
                                  ]),
                                ]),
                              ]
                            ),
                          ]),
                          t._v(" "),
                          n(
                            "table",
                            { staticClass: "order-summary table mt-30 mb-30" },
                            [
                              n("tbody", [
                                n("tr", [
                                  t._m(2),
                                  t._v(" "),
                                  n("td", { staticClass: "text-left w-50" }, [
                                    t._v(t._s(t.wallet.num) + " "),
                                    t.currency
                                      ? n("span", [
                                          t._v(
                                            " " + t._s(t.currency.toUpperCase())
                                          ),
                                        ])
                                      : t._e(),
                                  ]),
                                ]),
                                t._v(" "),
                                n("tr", [
                                  t._m(3),
                                  t._v(" "),
                                  n("td", { staticClass: "text-left w-50" }, [
                                    t._v(t._s(t.buyerFee) + "%"),
                                  ]),
                                ]),
                                t._v(" "),
                                n("tr", [
                                  t._m(4),
                                  t._v(" "),
                                  n("td", { staticClass: "text-left w-50" }, [
                                    n("span", { staticClass: "color-gold" }, [
                                      t._v(t._s(t.totalPrice) + " "),
                                      t.currency
                                        ? n("span", [
                                            t._v(
                                              t._s(t.currency.toUpperCase())
                                            ),
                                          ])
                                        : t._e(),
                                    ]),
                                  ]),
                                ]),
                              ]),
                            ]
                          ),
                          t._v(" "),
                          t.confirmed
                            ? n("div", { staticClass: "text-center mb-30" }, [
                                n("img", {
                                  attrs: { src: r(1194), width: "80", alt: "" },
                                }),
                                t._v(" "),
                                n("br"),
                                t._v(" "),
                                n("br"),
                                t._v(" "),
                                n("p", { staticStyle: { color: "red" } }, [
                                  t._v(
                                    "Please do not close this window or click the Back button on your browser"
                                  ),
                                ]),
                              ])
                            : t._e(),
                          t._v(" "),
                          t.isApprovedCoin
                            ? n(
                                "button",
                                {
                                  staticClass: "button w-100",
                                  attrs: { disabled: t.confirmed },
                                  on: { click: t.confirmBuyNow },
                                },
                                [
                                  t._v(
                                    t._s(
                                      t.confirmed ? "Purchasing.." : "Buy Now"
                                    )
                                  ),
                                ]
                              )
                            : t._e(),
                          t._v(" "),
                          t.isApprovedCoin
                            ? t._e()
                            : n(
                                "button",
                                {
                                  staticClass: "button w-100",
                                  attrs: { disabled: t.isApproving },
                                  on: { click: t.approveCoin },
                                },
                                [
                                  t._v(
                                    t._s(
                                      t.isApproving ? "Approving.." : "Approve"
                                    )
                                  ),
                                ]
                              ),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                t._v(" "),
                n(
                  "div",
                  {
                    ref: "congratModal",
                    staticClass: "modal fade custom-modal popup",
                    attrs: {
                      id: "orderSummaryCongraModal",
                      tabindex: "-1",
                      "aria-hidden": "true",
                    },
                  },
                  [
                    n("div", { staticClass: "modal-dialog" }, [
                      n("div", { staticClass: "modal-content" }, [
                        n("button", {
                          staticClass: "btn-close",
                          attrs: {
                            type: "button",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close",
                          },
                        }),
                        t._v(" "),
                        n("div", { staticClass: "modal-body" }, [
                          n("h5", { staticClass: "section-title style-1" }, [
                            t._v("Congratulations"),
                          ]),
                          t._v(" "),
                          n("div", { staticClass: "mt-20 text-center" }, [
                            t._v(
                              "\r\n                            You successfully purchase"
                            ),
                            n("br"),
                            t._v(" "),
                            n("strong", [t._v(t._s(t.name))]),
                          ]),
                          t._v(" "),
                          n("div", { staticClass: "text-center mt-30 mb-30" }, [
                            t.url &&
                            ".mp3" != t.url.slice(-4).toLowerCase() &&
                            ".mp4" != t.url.slice(-4).toLowerCase()
                              ? n("img", {
                                  staticStyle: { "max-height": "100px" },
                                  attrs: { src: t.url, alt: t.name },
                                })
                              : t._e(),
                            t._v(" "),
                            t.url && ".mp3" == t.url.slice(-4).toLowerCase()
                              ? n("audio", {
                                  attrs: { src: t.url, controls: "controls" },
                                })
                              : t._e(),
                            t._v(" "),
                            t.url && ".mp4" == t.url.slice(-4).toLowerCase()
                              ? n("video", {
                                  staticStyle: {
                                    "max-height": "90%",
                                    "max-width": "90%",
                                  },
                                  attrs: {
                                    src: t.url,
                                    controls: "controls",
                                    loop: "loop",
                                    muted: "muted",
                                  },
                                  domProps: { muted: !0 },
                                })
                              : t._e(),
                          ]),
                          t._v(" "),
                          n(
                            "table",
                            { staticClass: "order-summary table mt-30 mb-30" },
                            [
                              n("tbody", [
                                t._m(5),
                                t._v(" "),
                                n("tr", [
                                  t._m(6),
                                  t._v(" "),
                                  n("td", { staticClass: "text-left w-50" }, [
                                    n(
                                      "a",
                                      {
                                        attrs: {
                                          href: t.txUrl,
                                          target: "_blank",
                                        },
                                      },
                                      [t._v(t._s(t.transactionHashShort))]
                                    ),
                                  ]),
                                ]),
                              ]),
                            ]
                          ),
                          t._v(" "),
                          2 != t.collectionGroupId
                            ? n(
                                "div",
                                { staticClass: "note mt-20 text-center row" },
                                [
                                  n(
                                    "div",
                                    {
                                      staticClass:
                                        "col-md-10 offset-md-1 text-gray",
                                    },
                                    [t._v("Share the great news.")]
                                  ),
                                  t._v(" "),
                                  n("div", { staticClass: "row text-center" }, [
                                    n("div", { staticClass: "col mt-30" }, [
                                      n(
                                        "a",
                                        {
                                          attrs: { href: "javascript:void(0)" },
                                          on: { click: t.shareToTwitter },
                                        },
                                        [
                                          n("img", {
                                            attrs: {
                                              src: r(1189),
                                              width: "30",
                                              alt: "twitter",
                                            },
                                          }),
                                          t._v(" "),
                                          n("div", [t._v("Twitter")]),
                                        ]
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("div", { staticClass: "col mt-30" }, [
                                      n(
                                        "a",
                                        {
                                          attrs: { href: "javascript:void(0)" },
                                          on: { click: t.shareToFacebook },
                                        },
                                        [
                                          n("img", {
                                            attrs: {
                                              src: r(1190),
                                              width: "30",
                                              alt: "facebook",
                                            },
                                          }),
                                          t._v(" "),
                                          n("div", [t._v("Facebook")]),
                                        ]
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("div", { staticClass: "col mt-30" }, [
                                      n(
                                        "a",
                                        {
                                          attrs: { href: "javascript:void(0)" },
                                          on: { click: t.shareToTelegram },
                                        },
                                        [
                                          n("img", {
                                            attrs: {
                                              src: r(1191),
                                              width: "30",
                                              alt: "telegram",
                                            },
                                          }),
                                          t._v(" "),
                                          n("div", [t._v("Telegram")]),
                                        ]
                                      ),
                                    ]),
                                    t._v(" "),
                                    n("div", { staticClass: "col mt-30" }, [
                                      n(
                                        "a",
                                        {
                                          attrs: { href: "javascript:void(0)" },
                                          on: { click: t.copyShareLink },
                                        },
                                        [
                                          n("img", {
                                            attrs: {
                                              src: r(1192),
                                              width: "30",
                                              alt: "link",
                                            },
                                          }),
                                          t._v(" "),
                                          n("div", [t._v("Copy Link")]),
                                        ]
                                      ),
                                    ]),
                                  ]),
                                ]
                              )
                            : t._e(),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                t._v(" "),
                n("input", { attrs: { type: "hidden", id: "hdTokenAddress" } }),
                t._v(" "),
                n("input", { attrs: { type: "hidden", id: "hdTokenId" } }),
                t._v(" "),
                n("input", { attrs: { type: "hidden", id: "hdUserAccount" } }),
                t._v(" "),
                n("input", {
                  attrs: { type: "hidden", id: "hdCollectionGroupId" },
                }),
                t._v(" "),
                n("ShareAsset"),
                t._v(" "),
                n("router-view"),
                t._v(" "),
                n("ShareAsset"),
                t._v(" "),
                n("AddFund", {
                  ref: "addFundPopup",
                  attrs: {
                    currencyCode: t.currency,
                    message: t.addFundMessage,
                  },
                }),
              ],
              1
            );
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                {
                  staticClass: "container note mb-80",
                  staticStyle: { display: "none" },
                },
                [
                  t._v("\r\n                BUY NOW\r\n                "),
                  r("p", [
                    t._v(
                      "Note: Click below link to show the popup (reference only), delete these lines after programming."
                    ),
                  ]),
                  t._v(" "),
                  r("p", [
                    t._v("Pop-up: "),
                    r(
                      "a",
                      {
                        staticClass: "action-btn hover-up",
                        attrs: {
                          id: "lnkOrderSummary",
                          "aria-label": "Share This",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#orderSummaryModal",
                        },
                      },
                      [t._v("Order Summary ")]
                    ),
                  ]),
                  t._v(" "),
                  r("p", [
                    t._v("Pop-up: "),
                    r(
                      "a",
                      {
                        staticClass: "action-btn hover-up",
                        attrs: {
                          id: "lnkCongrate",
                          "aria-label": "Share This",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#orderSummaryCongraModal",
                        },
                      },
                      [t._v("Congratulation ")]
                    ),
                  ]),
                  t._v("\r\n                 PLACE A BID\r\n                "),
                  r("p", [
                    t._v("Pop-up: "),
                    r(
                      "a",
                      {
                        staticClass: "action-btn hover-up",
                        attrs: {
                          "aria-label": "Share This",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#placeBidModal",
                        },
                      },
                      [t._v("Place a Bid ")]
                    ),
                  ]),
                  t._v(" "),
                  r("p", [
                    t._v("Pop-up: "),
                    r(
                      "a",
                      {
                        staticClass: "action-btn hover-up",
                        attrs: {
                          "aria-label": "Share This",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#placeBidNextStep1Modal",
                        },
                      },
                      [t._v("Next Step 1")]
                    ),
                  ]),
                  t._v(" "),
                  r("p", [
                    t._v("Pop-up: "),
                    r(
                      "a",
                      {
                        staticClass: "action-btn hover-up",
                        attrs: {
                          "aria-label": "Share This",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#placeBidNextStep2Modal",
                        },
                      },
                      [t._v("Next Step 2: Loading")]
                    ),
                  ]),
                  t._v(" "),
                  r("p", [
                    t._v("Pop-up: "),
                    r(
                      "a",
                      {
                        staticClass: "action-btn hover-up",
                        attrs: {
                          "aria-label": "Share This",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#placeBidNextStep3Modal",
                        },
                      },
                      [t._v("Next Step 3")]
                    ),
                  ]),
                  t._v(" "),
                  r("p", [
                    t._v("Pop-up: "),
                    r(
                      "a",
                      {
                        staticClass: "action-btn hover-up",
                        attrs: {
                          "aria-label": "Share This",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#placeBidNextStep4Modal",
                        },
                      },
                      [t._v("Next Step 4: Loading")]
                    ),
                  ]),
                  t._v(" "),
                  r("p", [
                    t._v("Pop-up: "),
                    r(
                      "a",
                      {
                        staticClass: "action-btn hover-up",
                        attrs: {
                          "aria-label": "Share This",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#placeBidLastModal",
                        },
                      },
                      [t._v("Place a Bid: Last")]
                    ),
                  ]),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("td", { staticClass: "w-50" }, [
                r("strong", [t._v("Price")]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("td", { staticClass: "w-50" }, [
                r("strong", [t._v("Your Wallet Balance")]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("td", { staticClass: "w-50" }, [
                r("strong", [t._v("Service Fee")]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("td", { staticClass: "w-50" }, [
                r("strong", [t._v("Total Cost")]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("tr", [
                r("td", { staticClass: "w-50" }, [
                  r("strong", [t._v("Status")]),
                ]),
                t._v(" "),
                r("td", { staticClass: "text-left w-50" }, [
                  t._v("Processing"),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("td", { staticClass: "w-50" }, [
                r("strong", [t._v("Transaction Hash")]),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, {
        ShareAsset: r(1188).default,
        AddFund: r(1195).default,
      });
    },
  },
]);
