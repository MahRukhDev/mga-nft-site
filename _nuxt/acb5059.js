(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    1228: function (t, e, r) {
      var content = r(1236);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(100).default)("cbe9b88c", content, !0, { sourceMap: !1 });
    },
    1233: function (t, e, r) {
      "use strict";
      r.r(e);
      r(86), r(62), r(76), r(116), r(75), r(117);
      var n = r(55),
        o = r(4),
        c = (r(659), r(40), r(101), r(77), r(63), r(658), r(23), r(30)),
        l = r(173),
        d = r(1195),
        m = r(163),
        v = r(1188),
        h = r(218),
        f = r(1200),
        _ = r(11),
        C = r.n(_);
      function w(object, t) {
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
            ? w(Object(source), !0).forEach(function (e) {
                Object(n.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : w(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var k,
        B = "BidNFT.vue | ",
        x = {
          name: "BidNFT",
          components: { ShareAsset: v.default, AddFund: d.default },
          mixins: [l.a],
          data: function () {
            return {
              assetId: null,
              auctionId: null,
              name: null,
              url: null,
              bidderAddress: null,
              tokenAddress: null,
              tokenId: null,
              assetType: null,
              ownerAddress: null,
              salt: null,
              startBid: null,
              highestBid: null,
              currency: null,
              transactionHash: "",
              confirmed: !1,
              isApprovedCoin: !1,
              isApproving: !1,
              isBidding: !1,
              callbackSuccess: null,
              duration: null,
              startedAt: null,
              auctionIdBlockChain: null,
              minIncrementalBid: null,
              form: { bidPrice: null, error: null },
            };
          },
          watch: {
            account:
              ((k = Object(o.a)(
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
                return k.apply(this, arguments);
              }),
          },
          validations: function () {
            return {
              form: {
                bidPrice: {
                  required: f.required,
                  minValue: Object(f.minValue)(this.startBid),
                },
              },
            };
          },
          computed: y(
            y(
              y(
                y(
                  {},
                  Object(c.d)("memberProfile", ["memberId", "likedAssetList"])
                ),
                Object(c.d)("web3Modal", [
                  "account",
                  "account_short",
                  "account_wallet",
                ])
              ),
              Object(c.d)("sales", ["serviceCharges"])
            ),
            {},
            {
              minimumBidMessage: function () {
                var t =
                  parseFloat(this.highestBid) +
                  parseFloat(this.minIncrementalBid);
                return null == this.highestBid
                  ? "Minimumly " + this.startBid + " " + this.currency
                  : "Minimumly " + t + " " + this.currency;
              },
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
                  this.form.bidPrice * (1 + this.buyerFee / 100),
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
                    2 == e.ServiceChargeTypeId
                  );
                });
                return null == e ? 0 : e.BuyerFeePercentage;
              },
            }
          ),
          methods: y(
            y(
              y(
                y({}, Object(c.b)("sales", ["getServiceCharges"])),
                Object(c.b)("asset", ["getHistory"])
              ),
              Object(c.b)("web3Modal", [
                "connect",
                "getBNBBalance",
                "getGESBalance",
                "getGEGBalance",
                "getBUSDBalance",
                "bidNFT",
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
              placeBid: function (t) {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function r() {
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            return (
                              e.$log.debug(B, "placeBid - obj", t),
                              (e.assetId = t.assetId),
                              (e.auctionId = t.auctionId),
                              (e.name = t.nftName),
                              (e.url = t.nftURL),
                              (e.bidderAddress = t.bidderAddress),
                              (e.tokenAddress = t.tokenAddress),
                              (e.tokenId = t.tokenId),
                              (e.assetType = t.assetType),
                              (e.ownerAddress = t.ownerAddress),
                              (e.salt = t.salt),
                              (e.startBid = t.startBid),
                              (e.highestBid = t.highestBid),
                              (e.minIncrementalBid = t.minIncrementalBid),
                              (e.currency = t.currency),
                              (e.callbackSuccess = t.callbackSuccess),
                              (e.duration = t.duration),
                              (e.startedAt = t.startedAt),
                              (e.auctionIdBlockchain = t.auctionIdBlockChain),
                              (r.next = 20),
                              e.getAndUpdateWalletBalance()
                            );
                          case 20:
                            if (e.account) {
                              r.next = 25;
                              break;
                            }
                            return (r.next = 23), e.connect();
                          case 23:
                            r.next = 26;
                            break;
                          case 25:
                            e.wallet.num < e.startBid ||
                            e.wallet.num <=
                              (null == e.highestBid ? 0 : e.highestBid)
                              ? e.$refs.addFundPopup.show()
                              : document.getElementById("lnkPlaceBid").click();
                          case 26:
                            e.$log.debug(
                              B,
                              "placeBid - bidderAddress",
                              e.bidderAddress
                            );
                          case 27:
                          case "end":
                            return r.stop();
                        }
                    }, r);
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
              confirmPlaceBid: function () {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function e() {
                    var r;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              (t.$log.debug(B, "confirmPlaceBid"),
                              (r =
                                parseFloat(t.highestBid) +
                                parseFloat(t.minIncrementalBid)),
                              (t.form.error = null),
                              null == t.form.bidPrice
                                ? (t.form.error = "Bid price is required")
                                : null != t.highestBid && t.form.bidPrice < r
                                ? (t.form.error =
                                    "Bid price must equal or more than " +
                                    r +
                                    " " +
                                    t.currency)
                                : t.form.bidPrice < t.startBid &&
                                  (t.form.error =
                                    "Bid price must be minimumly " +
                                    t.startBid +
                                    " " +
                                    t.currency),
                              null == t.form.error)
                            ) {
                              e.next = 6;
                              break;
                            }
                            return e.abrupt("return");
                          case 6:
                            return (e.next = 8), t.checkApprovedCoin();
                          case 8:
                            if (t.isApprovedCoin) {
                              e.next = 12;
                              break;
                            }
                            return (
                              t.closePopUp(),
                              document
                                .getElementById("lnkPlaceBidApprove")
                                .click(),
                              e.abrupt("return")
                            );
                          case 12:
                            return (e.next = 14), t.bid();
                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              bid: function () {
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
                              (t.isBidding = !0),
                              (n = null),
                              (e.next = 6),
                              t.bidNFT({
                                nftAssetType: t.isMultiple ? "1155" : "721",
                                nftTokenId: t.tokenId,
                                ownerAddress: t.ownerAddress,
                                bidPrice: t.form.bidPrice,
                                startPrice: t.startBid,
                                currencyCode: t.currency.toUpperCase(),
                                saltString: t.salt,
                                amount: 1,
                                duration: t.duration,
                                startedAt: t.startedAt,
                                auctionIdBlockchain: t.auctionIdBlockchain,
                                assetId: t.assetId,
                                bidderId: t.memberId,
                                auctionId: t.auctionId,
                                callbackFailed: function () {
                                  r.closePopUp(), (r.confirmed = !1);
                                },
                              })
                            );
                          case 6:
                            if (
                              ((n = e.sent),
                              t.$log.debug(B, "bid - bidResult", n),
                              null != n)
                            ) {
                              e.next = 11;
                              break;
                            }
                            return (
                              Object(h.b)(
                                "Failed to place bid, please contact support for assistance."
                              ),
                              e.abrupt("return")
                            );
                          case 11:
                            return (
                              (t.transactionHash = n),
                              t.$log.debug(
                                B,
                                "bid - transactionHash",
                                t.transactionHash
                              ),
                              (e.next = 15),
                              Object(m.a)(
                                t.auctionId,
                                t.memberId,
                                t.form.bidPrice,
                                t.transactionHash
                              )
                            );
                          case 15:
                            t.closePopUp(),
                              document.getElementById("lnkCongrateBid").click(),
                              t.callbackSuccess &&
                                t.callbackSuccess(t.form.bidPrice),
                              (t.highestBid = t.form.bidPrice),
                              (t.form.bidPrice = null),
                              (t.confirmed = !1),
                              (t.isApproving = !1),
                              (t.isBidding = !1);
                          case 23:
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
                                isAuction: !0,
                                callbackSuccess: function () {
                                  r.isApprovedCoin = !0;
                                },
                                callbackFailed: function () {
                                  this.$log.warn(
                                    B,
                                    "approveCoin - error in approving MGA"
                                  );
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
                                isAuction: !0,
                                callbackSuccess: function () {
                                  n.isApprovedCoin = !0;
                                },
                                callbackFailed: function () {
                                  this.$log.warn(
                                    B,
                                    "approveCoin - error in approving GEG"
                                  );
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
                                isAuction: !0,
                                callbackSuccess: function () {
                                  o.isApprovedCoin = !0;
                                },
                                callbackFailed: function () {
                                  this.$log.warn(
                                    B,
                                    "approveCoin - error in approving BUSD"
                                  );
                                },
                              })
                            );
                          case 13:
                            return (e.next = 15), t.bid();
                          case 15:
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
                                isAuction: !0,
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
                                isAuction: !0,
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
                                isAuction: !0,
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
                  this.ownerAddress;
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
                  this.ownerAddress;
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
                  this.ownerAddress;
                return (
                  window.open(
                    "https://t.me/share/url?url=" +
                      encodeURIComponent(t) +
                      "&text=Wonderful deal",
                    "facebook-share-dialog",
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
                  this.ownerAddress;
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
                  var r = C()(e);
                  if (navigator.userAgent.match(/ipad|iphone/i)) {
                    var n = r.get(0),
                      o = n.contentEditable,
                      c = n.readOnly;
                    (n.contentEditable = "true"), (n.readOnly = "false");
                    var l = document.createRange();
                    l.selectNodeContents(n);
                    var d = window.getSelection();
                    d.removeAllRanges(),
                      d.addRange(l),
                      n.setSelectionRange(0, 999999),
                      (n.contentEditable = o),
                      (n.readOnly = c);
                  } else r.select();
                  document.execCommand("copy"), document.body.removeChild(e);
                }
                Object(h.c)("Copied To Clipboard");
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
                t.push({ name: "/" });
              });
          },
        },
        A = x,
        S = (r(1235), r(65)),
        component = Object(S.a)(
          A,
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
                    staticClass: "modal fade custom-modal popup show",
                    attrs: {
                      id: "placeBidModal",
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
                            t._v("Place a Bid"),
                          ]),
                          t._v(" "),
                          n("div", { staticClass: "bidprice mt-20" }, [
                            n("label", [t._v("Your Bid Price")]),
                            t._v(" "),
                            n("br"),
                            t._v(" "),
                            n(
                              "span",
                              {
                                staticStyle: {
                                  "text-align": "center",
                                  "font-size": "10px",
                                },
                              },
                              [
                                t._v(
                                  "\n                            " +
                                    t._s(t.minimumBidMessage) +
                                    "\n                             "
                                ),
                                n("br"),
                                t._v(" "),
                                t.minIncrementalBid
                                  ? n("span", [
                                      t._v(
                                        "Every bid must increase by " +
                                          t._s(
                                            parseFloat(this.minIncrementalBid)
                                          ) +
                                          " " +
                                          t._s(this.currency)
                                      ),
                                    ])
                                  : t._e(),
                              ]
                            ),
                            t._v(" "),
                            n(
                              "div",
                              { staticClass: "row form-group no-gutters" },
                              [
                                n("div", { staticClass: "col-8" }, [
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.form.bidPrice,
                                        expression: "form.bidPrice",
                                      },
                                    ],
                                    attrs: {
                                      type: "number",
                                      name: "",
                                      placeholder: "Enter here...",
                                    },
                                    domProps: { value: t.form.bidPrice },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          t.$set(
                                            t.form,
                                            "bidPrice",
                                            e.target.value
                                          );
                                      },
                                    },
                                  }),
                                ]),
                                t._v(" "),
                                n("div", { staticClass: "col-4 pl-10" }, [
                                  n("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: t.currency,
                                        expression: "currency",
                                      },
                                    ],
                                    attrs: {
                                      type: "text",
                                      disabled: "disabled",
                                    },
                                    domProps: { value: t.currency },
                                    on: {
                                      input: function (e) {
                                        e.target.composing ||
                                          (t.currency = e.target.value);
                                      },
                                    },
                                  }),
                                ]),
                                t._v(" "),
                                n("div", { staticClass: "col-0" }, [
                                  t.form.error
                                    ? n(
                                        "span",
                                        { staticStyle: { color: "red" } },
                                        [t._v(t._s(t.form.error))]
                                      )
                                    : t._e(),
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
                                  t._m(1),
                                  t._v(" "),
                                  n("td", { staticClass: "text-left w-50" }, [
                                    t._v(
                                      t._s(t.wallet.num) +
                                        " " +
                                        t._s(t.currency)
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                n("tr", [
                                  t._m(2),
                                  t._v(" "),
                                  n("td", { staticClass: "text-left w-50" }, [
                                    t._v(t._s(t.buyerFee) + "%"),
                                  ]),
                                ]),
                                t._v(" "),
                                n("tr", [
                                  t._m(3),
                                  t._v(" "),
                                  n("td", { staticClass: "text-left w-50" }, [
                                    n("span", { staticClass: "color-gold" }, [
                                      t._v(
                                        t._s(t.totalPrice) +
                                          " " +
                                          t._s(t.currency)
                                      ),
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
                              ])
                            : t._e(),
                          t._v(" "),
                          t._m(4),
                          t._v(" "),
                          n(
                            "button",
                            {
                              staticClass: "button w-100",
                              attrs: { disabled: t.confirmed },
                              on: { click: t.confirmPlaceBid },
                            },
                            [t._v(t._s(t.confirmed ? "Bidding.." : "Confirm"))]
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
                    staticClass: "modal fade custom-modal popup",
                    attrs: {
                      id: "placeBidApproveModal",
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
                            t._v("Next Step"),
                          ]),
                          t._v(" "),
                          t._m(5),
                          t._v(" "),
                          n(
                            "button",
                            {
                              staticClass: "button w-100",
                              attrs: { disabled: t.isApproving },
                              on: { click: t.approveCoin },
                            },
                            [
                              t._v(
                                t._s(
                                  t.isApproving
                                    ? t.isBidding
                                      ? "Bidding.."
                                      : "Approving.."
                                    : "Approve"
                                )
                              ),
                            ]
                          ),
                          t._v(" "),
                          t._m(6),
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
                      id: "orderSummaryCongraBidModal",
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
                            t._v("Bid Placed"),
                          ]),
                          t._v(" "),
                          n("div", { staticClass: "mt-20 text-center" }, [
                            t._v(
                              "\n                        You successfully placed bid. Check in regularly to make sure you were not outbid.\n                        "
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
                                t._m(7),
                                t._v(" "),
                                n("tr", [
                                  t._m(8),
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
                          n(
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
                          ),
                        ]),
                      ]),
                    ]),
                  ]
                ),
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
                  t._v("\n        BUY NOW\n        "),
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
                          id: "lnkCongrateBid",
                          "aria-label": "Share This",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#orderSummaryCongraBidModal",
                        },
                      },
                      [t._v("Congratulation ")]
                    ),
                  ]),
                  t._v("\n            PLACE A BID\n        "),
                  r("p", [
                    t._v("Pop-up: "),
                    r(
                      "a",
                      {
                        staticClass: "action-btn hover-up",
                        attrs: {
                          id: "lnkPlaceBid",
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
                          id: "lnkPlaceBidApprove",
                          "aria-label": "Share This",
                          "data-bs-toggle": "modal",
                          "data-bs-target": "#placeBidApproveModal",
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
              return r("div", { staticClass: "mb-30" }, [
                r(
                  "div",
                  {
                    staticStyle: {
                      "text-align": "center",
                      "font-size": "10px",
                    },
                  },
                  [
                    t._v(
                      "\n                            Auction will retain the highest bid until the end of the auction. All bids will return to their owners once outbid.\n                        "
                    ),
                  ]
                ),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "table",
                { staticClass: "table table-borderless mt-30" },
                [
                  r("tbody", [
                    r("tr", [
                      r("td", { staticClass: "text-center color-green w-50" }, [
                        r("span", { staticClass: "round-number" }, [t._v("1")]),
                        t._v(" Confirmed"),
                      ]),
                      t._v(" "),
                      r("td", { staticClass: "text-center w-50" }, [
                        r("span", { staticClass: "round-number" }, [t._v("2")]),
                        t._v(" Bidding (Auction)"),
                      ]),
                    ]),
                  ]),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "note mt-20 text-center row" }, [
                r("div", { staticClass: "col-md-10 offset-md-1 text-gray" }, [
                  t._v(
                    "Confirm transaction with your wallet. Please follow wallet instructions."
                  ),
                ]),
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
          "45ac6b26",
          null
        );
      e.default = component.exports;
      installComponents(component, {
        ShareAsset: r(1188).default,
        AddFund: r(1195).default,
      });
    },
    1235: function (t, e, r) {
      "use strict";
      r(1228);
    },
    1236: function (t, e, r) {
      var n = r(99)(!1);
      n.push([
        t.i,
        ".error[data-v-45ac6b26]{color:red}input[data-v-45ac6b26]::-webkit-inner-spin-button,input[data-v-45ac6b26]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type=number][data-v-45ac6b26]{-moz-appearance:textfield}.form-group input[type=number][data-v-45ac6b26]{border:0;border-bottom:1px solid #c7c1b8!important;background-color:#f4f4f4;border-radius:0}button[data-v-45ac6b26]:disabled,button[disabled][data-v-45ac6b26]{border:1px solid #999;background-color:#ccc;color:#666}.dropdownCategory[data-v-45ac6b26]{font-size:1.2rem;margin-bottom:5px}.dropdownCategoryMenu[data-v-45ac6b26]{font-size:1.1rem}.btn.btn-primary[data-v-45ac6b26]:focus{color:#fff;background-color:#000;border-color:#000;outline:none}",
        "",
      ]),
        (t.exports = n);
    },
  },
]);
