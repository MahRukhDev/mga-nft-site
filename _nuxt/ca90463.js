(window.webpackJsonp = window.webpackJsonp || []).push([
  [30, 23],
  {
    1188: function (t, e, r) {
      "use strict";
      r.r(e);
      r(63), r(658);
      var o = r(11),
        n = r.n(o),
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
                var o = n()(r);
                if (navigator.userAgent.match(/ipad|iphone/i)) {
                  var l = o.get(0),
                    d = l.contentEditable,
                    v = l.readOnly;
                  (l.contentEditable = "true"), (l.readOnly = "false");
                  var h = document.createRange();
                  h.selectNodeContents(l);
                  var m = window.getSelection();
                  m.removeAllRanges(),
                    m.addRange(h),
                    l.setSelectionRange(0, 999999),
                    (l.contentEditable = d),
                    (l.readOnly = v);
                } else o.select();
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
              o = t._self._c || e;
            return o(
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
                o("div", { staticClass: "modal-dialog" }, [
                  o("div", { staticClass: "modal-content" }, [
                    o("button", {
                      staticClass: "btn-close",
                      attrs: {
                        type: "button",
                        "data-bs-dismiss": "modal",
                        "aria-label": "Close",
                      },
                    }),
                    t._v(" "),
                    o("div", { staticClass: "modal-body" }, [
                      o("h5", { staticClass: "section-title style-1" }, [
                        t._v("Share This NFT"),
                      ]),
                      t._v(" "),
                      o("div", { staticClass: "row text-center" }, [
                        o("div", { staticClass: "col-6 col-sm-6 mt-30" }, [
                          o(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: { click: t.shareToTwitter },
                            },
                            [
                              o("img", {
                                attrs: {
                                  src: r(1189),
                                  width: "80",
                                  alt: "twitter",
                                },
                              }),
                              t._v(" "),
                              o("div", [t._v("Twitter")]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        o("div", { staticClass: "col-6 col-sm-6 mt-30" }, [
                          o(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: { click: t.shareToFacebook },
                            },
                            [
                              o("img", {
                                attrs: {
                                  src: r(1190),
                                  width: "80",
                                  alt: "facebook",
                                },
                              }),
                              t._v(" "),
                              o("div", [t._v("Facebook")]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        o("div", { staticClass: "col-6 col-sm-6 mt-30" }, [
                          o(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: { click: t.shareToTelegram },
                            },
                            [
                              o("img", {
                                attrs: {
                                  src: r(1191),
                                  width: "80",
                                  alt: "telegram",
                                },
                              }),
                              t._v(" "),
                              o("div", [t._v("Telegram")]),
                            ]
                          ),
                        ]),
                        t._v(" "),
                        o("div", { staticClass: "col-6 col-sm-6 mt-30" }, [
                          o(
                            "a",
                            {
                              attrs: { href: "javascript:void(0)" },
                              on: { click: t.copyShareLink },
                            },
                            [
                              o("img", {
                                attrs: {
                                  src: r(1192),
                                  width: "80",
                                  alt: "link",
                                },
                              }),
                              t._v(" "),
                              o("div", [t._v("Copy Link")]),
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
    1189: function (t, e, r) {
      t.exports = r.p + "img/twitter.88d497c.svg";
    },
    1190: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzE5NzZEMjsiIGQ9Ik00NDgsMEg2NEMyOC43MDQsMCwwLDI4LjcwNCwwLDY0djM4NGMwLDM1LjI5NiwyOC43MDQsNjQsNjQsNjRoMzg0YzM1LjI5NiwwLDY0LTI4LjcwNCw2NC02NFY2NA0KCUM1MTIsMjguNzA0LDQ4My4yOTYsMCw0NDgsMHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGQUZBRkE7IiBkPSJNNDMyLDI1NmgtODB2LTY0YzAtMTcuNjY0LDE0LjMzNi0xNiwzMi0xNmgzMlY5NmgtNjRsMCwwYy01My4wMjQsMC05Niw0Mi45NzYtOTYsOTZ2NjRoLTY0djgwaDY0DQoJdjE3Nmg5NlYzMzZoNDhMNDMyLDI1NnoiLz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K";
    },
    1191: function (t, e) {
      t.exports =
        "data:image/svg+xml;base64,PHN2ZyBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNCAyNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtOS40MTcgMTUuMTgxLS4zOTcgNS41ODRjLjU2OCAwIC44MTQtLjI0NCAxLjEwOS0uNTM3bDIuNjYzLTIuNTQ1IDUuNTE4IDQuMDQxYzEuMDEyLjU2NCAxLjcyNS4yNjcgMS45OTgtLjkzMWwzLjYyMi0xNi45NzIuMDAxLS4wMDFjLjMyMS0xLjQ5Ni0uNTQxLTIuMDgxLTEuNTI3LTEuNzE0bC0yMS4yOSA4LjE1MWMtMS40NTMuNTY0LTEuNDMxIDEuMzc0LS4yNDcgMS43NDFsNS40NDMgMS42OTMgMTIuNjQzLTcuOTExYy41OTUtLjM5NCAxLjEzNi0uMTc2LjY5MS4yMTh6IiBmaWxsPSIjMDM5YmU1Ii8+PC9zdmc+";
    },
    1192: function (t, e, r) {
      t.exports = r.p + "img/link.165bd9a.svg";
    },
    1245: function (t, e, r) {
      var content = r(1266);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(100).default)("2974c790", content, !0, { sourceMap: !1 });
    },
    1265: function (t, e, r) {
      "use strict";
      r(1245);
    },
    1266: function (t, e, r) {
      var o = r(99)(!1);
      o.push([
        t.i,
        ".SelectedCategory[data-v-1c344682]{background-color:#393734}",
        "",
      ]),
        (t.exports = o);
    },
    1289: function (t, e, r) {
      "use strict";
      r.r(e);
      r(86), r(62), r(116), r(117);
      var o = r(4),
        n = r(55),
        c = (r(23), r(76), r(40), r(63), r(302), r(141), r(75), r(660), r(30)),
        l = r(5),
        d = r.n(l),
        v = r(218);
      function h(object, t) {
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
      function m(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(Object(source), !0).forEach(function (e) {
                Object(n.a)(t, e, source[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(
                t,
                Object.getOwnPropertyDescriptors(source)
              )
            : h(Object(source)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(source, e)
                );
              });
        }
        return t;
      }
      var _,
        C,
        w,
        f,
        S,
        y,
        k = {
          components: {},
          mixins: [r(173).a],
          data: function () {
            return {
              logName: "Marketplace.vue | ",
              selectedShareItemURL: "",
              selectedNumberofShow1: 50,
              selectedNumberofShow2: 50,
              selectedNumberofShow3: 50,
              selectedSort1: 1,
              selectedSort2: 1,
              selectedSort3: 5,
              priceFrom: null,
              priceTo: null,
              current1: 1,
              total1: 0,
              totalItem1: 0,
              current2: 1,
              total2: 0,
              totalItem2: 0,
              current3: 1,
              total3: 0,
              totalItem3: 0,
              currency: null,
            };
          },
          watch: {
            searchAssetKeyword: function (t) {
              this.$store.commit("marketplace/setSearchAssetKeyword", t),
                this.searchSalesOrder(),
                this.searchAuctionOrder(),
                this.searchUpcomingAuctionOrder();
            },
            searchAssetCategory: function (t) {
              this.$store.commit("marketplace/setSearchAssetCategory", t),
                this.searchSalesOrder(),
                this.searchAuctionOrder(),
                this.searchUpcomingAuctionOrder();
            },
          },
          computed: m(
            m(
              m(
                m(
                  m(
                    m({}, Object(c.d)("staticData", ["currencies"])),
                    Object(c.d)("memberProfile", ["memberId", "likedAssetList"])
                  ),
                  Object(c.d)("web3Modal", ["account"])
                ),
                Object(c.d)("category", ["categoryListing"])
              ),
              Object(c.d)("marketplace", [
                "marketPlaceOrderListing",
                "newAddedListing",
                "searchAssetKeyword",
                "searchAssetCategory",
                "searchAssetSortBy",
                "marketPlaceAuctionOrderListing",
                "marketPlaceUpcomingAuctionOrderListing",
              ])
            ),
            {},
            {
              sellCurrencies: function () {
                return this.currencies.filter(function (t) {
                  return "WBNB" != t.Code && "USD" != t.Code;
                });
              },
            }
          ),
          beforeRouteUpdate: function () {
            this.searchSalesOrder(),
              this.searchAuctionOrder(),
              this.searchUpcomingAuctionOrder();
          },
          created: function () {
            var t = this;
            return Object(o.a)(
              regeneratorRuntime.mark(function e() {
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), t.getCurrencies();
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          mounted:
            ((y = Object(o.a)(
              regeneratorRuntime.mark(function t() {
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          this.Init();
                        case 1:
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
              return y.apply(this, arguments);
            }),
          methods: m(
            m(
              m(
                m(
                  m(
                    m({ moment: d.a }, Object(c.b)("web3Modal", ["connect"])),
                    Object(c.b)("asset", ["like", "unlike"])
                  ),
                  Object(c.b)("category", ["getCategoryListing"])
                ),
                Object(c.b)("marketplace", [
                  "getMarketPlaceOrderListing",
                  "getNewAddedOrderListing",
                ])
              ),
              Object(c.b)("staticData", ["getCurrencies"])
            ),
            {},
            {
              assetDetailsLink: function (t) {
                return "2" == t ? "Totem" : "Asset1155";
              },
              onPageChange1: function (t) {
                0 < t &&
                  t <= this.total1 &&
                  ((this.current1 = t), this.searchSalesOrder());
              },
              onPageChange2: function (t) {
                0 < t &&
                  t <= this.total2 &&
                  ((this.current2 = t), this.searchAuctionOrder());
              },
              onPageChange3: function (t) {
                0 < t &&
                  t <= this.total2 &&
                  ((this.current3 = t), this.searchUpcomingAuctionOrder());
              },
              utcToLocalDateTime: function (t) {
                var e = d.a.utc(t).toDate(),
                  r = d()(e).local();
                return (
                  this.$log.debug(
                    this.logName,
                    "utcToLocalDateTime utc local",
                    e,
                    r
                  ),
                  r
                );
              },
              expiryDateLocal: function (t, e) {
                var r = this.utcToLocalDateTime(t),
                  o = d()(String(d()(r))).add(e, "seconds");
                return (
                  this.$log.debug(
                    this.logName,
                    "expiryDateLocal startDateUtc startDateLocal expiryLocal",
                    t,
                    r,
                    o
                  ),
                  o
                );
              },
              isAuctionExpired: function (t) {
                var e = !1;
                return (
                  d()().isAfter(d()(t)) && (e = !0),
                  this.$log.debug(this.logName, "isAuctionExpired expired", e),
                  e
                );
              },
              isAuctionStarted: function (t) {
                var e = !1;
                return (
                  d()().isAfter(d()(t)) && (e = !0),
                  this.$log.debug(this.logName, "isAuctionStarted started", e),
                  e
                );
              },
              Init: function () {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function e() {
                    var r;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.$route.query.search &&
                                ((t.searchKeyword = t.$route.query.search),
                                t.$store.commit(
                                  "marketplace/setSearchAssetKeyword",
                                  t.searchKeyword
                                )),
                              (r = $("body")),
                              $(".sort-by-product-area").length &&
                                ($(".sort-by-product-area").on(
                                  "click",
                                  ".sort-by-product-wrap",
                                  function (t) {
                                    $(".sort-by-cover").removeClass("show"),
                                      $(".sort-by-dropdown").removeClass(
                                        "show"
                                      ),
                                      t.preventDefault();
                                    var e = $(this);
                                    e.parent().hasClass("show")
                                      ? e
                                          .siblings(".sort-by-dropdown")
                                          .removeClass("show")
                                          .parent()
                                          .removeClass("show")
                                      : e
                                          .siblings(".sort-by-dropdown")
                                          .addClass("show")
                                          .parent()
                                          .addClass("show");
                                  }
                                ),
                                r.on("click", function (t) {
                                  var e = t.target;
                                  $(e).parents().is(".sort-by-product-area") ||
                                    ($(".sort-by-cover").removeClass("show"),
                                    $(".sort-by-dropdown").removeClass("show"));
                                })),
                              $("#amountFrom").val(t.priceFrom),
                              $("#amountTo").val(t.priceTo),
                              (e.next = 7),
                              t.searchSalesOrder()
                            );
                          case 7:
                            return (e.next = 9), t.searchAuctionOrder();
                          case 9:
                            return (
                              (e.next = 11), t.searchUpcomingAuctionOrder()
                            );
                          case 11:
                            return (e.next = 13), t.getCategoryListing();
                          case 13:
                            return (
                              (e.next = 15),
                              t.getNewAddedOrderListing({
                                storeId: null,
                                searchForSellOrder: null,
                                searchForAuction: null,
                                start: 0,
                                length: 3,
                              })
                            );
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              bidAsset: function (t) {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function r() {
                    var o;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              !e.isAuctionExpired(
                                e.expiryDateLocal(
                                  t.AuctionOrder.StartTimeUTC,
                                  t.AuctionOrder.DurationInSeconds
                                )
                              )
                            ) {
                              r.next = 3;
                              break;
                            }
                            return (
                              Object(v.b)(
                                "Auction had expired. Place bid is not allowed"
                              ),
                              r.abrupt("return")
                            );
                          case 3:
                            if (4 != t.AuctionOrder.AuctionStatusId) {
                              r.next = 6;
                              break;
                            }
                            return (
                              Object(v.b)(
                                "Auction has been cancelled by owner. Place bid is not allowed"
                              ),
                              r.abrupt("return")
                            );
                          case 6:
                            (o = e),
                              e.$refs.bidAsset.placeBid({
                                assetId: t.AssetId,
                                auctionId: t.OrderId,
                                nftName: t.Name,
                                nftURL: t.URI,
                                bidderAddress: e.account,
                                tokenAddress: t.ContractAddress,
                                tokenId: t.TokenId,
                                assetType: t.AssetType.toString(),
                                ownerAddress: t.Owner,
                                salt: t.AuctionOrder.Salt,
                                startBid: t.AuctionOrder.StartBid,
                                highestBid: t.AuctionOrder.CurrentBid,
                                minIncrementalBid:
                                  t.AuctionOrder.MinIncrementalBid,
                                currency: t.AuctionOrder.CurrencyCode,
                                duration: t.AuctionOrder.DurationInSeconds,
                                startedAt: t.AuctionOrder.StartTimeUnix,
                                auctionIdBlockChain:
                                  t.AuctionOrder.AuctionIdBlockChain,
                                callbackSuccess: function (t) {
                                  (o.current1 = 1), o.searchAuctionOrder();
                                },
                              });
                          case 8:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              buyAsset: function (t, e, r, o, n, c, l, d, v, h, m, _, C, w) {
                var f = this;
                this.$refs.buyAsset.buyNow(
                  t,
                  e,
                  r,
                  o,
                  n,
                  this.account,
                  c,
                  l,
                  d.toString(),
                  v,
                  h,
                  m,
                  _,
                  C.toLowerCase(),
                  w,
                  function () {
                    (f.current1 = 1), f.searchSalesOrder();
                  }
                );
              },
              openShareModal: function (t, e, r) {
                this.selectedShareItemURL =
                  "https://social.stoneagenft.com/asset/" +
                  t +
                  "/" +
                  e +
                  "/" +
                  r;
              },
              likeAsset:
                ((S = Object(o.a)(
                  regeneratorRuntime.mark(function t(e) {
                    var r,
                      o,
                      n,
                      c,
                      l = this;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (null != this.memberId) {
                                t.next = 5;
                                break;
                              }
                              return (t.next = 3), this.connect();
                            case 3:
                              t.next = 11;
                              break;
                            case 5:
                              (r = this.memberId),
                                (o = $(".heart_" + e)),
                                (n = $(".like_" + e)),
                                (c = parseInt($(n[0]).html())),
                                o.hasClass("fas")
                                  ? (this.unlike({ assetId: e, memberId: r }),
                                    o.removeClass("fas").addClass("far"),
                                    (c -= 1),
                                    this.likedAssetList.forEach(function (
                                      t,
                                      r
                                    ) {
                                      t === e && l.likedAssetList.splice(r, 1);
                                    }))
                                  : (this.like({ assetId: e, memberId: r }),
                                    o.removeClass("far").addClass("fas"),
                                    (c += 1),
                                    this.likedAssetList.push(e)),
                                n.html(c);
                            case 11:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      this
                    );
                  })
                )),
                function (t) {
                  return S.apply(this, arguments);
                }),
              showOnChange1: function (t) {
                (this.selectedNumberofShow1 =
                  t.currentTarget.getAttribute("value")),
                  -1 == this.selectedNumberofShow1
                    ? $("#dropdownShowLabel_1").html(" All ")
                    : $("#dropdownShowLabel_1").html(
                        " " + this.selectedNumberofShow1 + " "
                      ),
                  $(".dropdownShow_1").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showcover_1").removeClass("show"),
                  $("#dropdownShow_1").removeClass("show"),
                  (this.current1 = 1),
                  this.searchSalesOrder();
              },
              sortbyOnChange1: function (t) {
                (this.selectedSort1 = t.currentTarget.getAttribute("value")),
                  $("#dropdownSortLabel_1").html(
                    " " + t.currentTarget.getAttribute("text") + " "
                  ),
                  $(".dropdownSort_1").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#sortcover_1").removeClass("show"),
                  $("#dropdownSort_1").removeClass("show"),
                  (this.current1 = 1),
                  this.searchSalesOrder();
              },
              showOnChange2: function (t) {
                (this.selectedNumberofShow2 =
                  t.currentTarget.getAttribute("value")),
                  -1 == this.selectedNumberofShow2
                    ? $("#dropdownShowLabel_2").html(" All ")
                    : $("#dropdownShowLabel_2").html(
                        " " + this.selectedNumberofShow2 + " "
                      ),
                  $(".dropdownShow_2").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showcover_2").removeClass("show"),
                  $("#dropdownShow_2").removeClass("show"),
                  (this.current2 = 1),
                  this.searchAuctionOrder();
              },
              sortbyOnChange2: function (t) {
                (this.selectedSort2 = t.currentTarget.getAttribute("value")),
                  $("#dropdownSortLabel_2").html(
                    " " + t.currentTarget.getAttribute("text") + " "
                  ),
                  $(".dropdownSort_2").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#sortcover_2").removeClass("show"),
                  $("#dropdownSort_2").removeClass("show"),
                  (this.current2 = 1),
                  this.searchAuctionOrder();
              },
              showOnChange3: function (t) {
                (this.selectedNumberofShow3 =
                  t.currentTarget.getAttribute("value")),
                  -1 == this.selectedNumberofShow3
                    ? $("#dropdownShowLabel_3").html(" All ")
                    : $("#dropdownShowLabel_3").html(
                        " " + this.selectedNumberofShow3 + " "
                      ),
                  $(".dropdownShow_3").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showcover_3").removeClass("show"),
                  $("#dropdownShow_3").removeClass("show"),
                  (this.current3 = 1),
                  this.searchUpcomingAuctionOrder();
              },
              sortbyOnChange3: function (t) {
                (this.selectedSort3 = t.currentTarget.getAttribute("value")),
                  $("#dropdownSortLabel_3").html(
                    " " + t.currentTarget.getAttribute("text") + " "
                  ),
                  $(".dropdownSort_3").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#sortcover_3").removeClass("show"),
                  $("#dropdownSort_3").removeClass("show"),
                  (this.current3 = 1),
                  this.searchUpcomingAuctionOrder();
              },
              categoryOnChange: function (t) {
                $(".liCategory").removeClass("SelectedCategory"),
                  $("#liCategory_" + t).addClass("SelectedCategory"),
                  this.$store.commit("marketplace/setSearchAssetCategory", t),
                  (this.current1 = 1),
                  (this.current2 = 1),
                  (this.current3 = 1),
                  this.searchAll();
              },
              searchAll:
                ((f = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              this.searchSalesOrder(),
                                this.searchAuctionOrder(),
                                this.searchUpcomingAuctionOrder();
                            case 3:
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
                  return f.apply(this, arguments);
                }),
              searchSalesOrder:
                ((w = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var e, r;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = null),
                                null != this.currency && (e = this.currency.Id),
                                (r = 0),
                                this.current1 > 1 &&
                                  (r =
                                    (this.current1 - 1) *
                                    this.selectedNumberofShow1),
                                (t.next = 6),
                                this.getMarketPlaceOrderListing({
                                  categoryId:
                                    999 == this.searchAssetCategory
                                      ? null
                                      : this.searchAssetCategory,
                                  priceFrom: $("#amountFrom").val(),
                                  priceTo: $("#amountTo").val(),
                                  currencyId: e,
                                  start: r,
                                  length: this.selectedNumberofShow1,
                                  sortBy: this.selectedSort1,
                                  memberId: this.memberId,
                                  searchKeyword: this.searchAssetKeyword,
                                  searchForSellOrder: !0,
                                  searchForAuction: !1,
                                  auctionFilter: null,
                                })
                              );
                            case 6:
                              this.marketPlaceOrderListing &&
                              this.marketPlaceOrderListing.length
                                ? ((this.total1 =
                                    this.marketPlaceOrderListing[0].TotalPage),
                                  (this.totalItem1 =
                                    this.marketPlaceOrderListing[0].TotalRow))
                                : ((this.total1 = 0), (this.totalItem1 = 0));
                            case 7:
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
              searchAuctionOrder:
                ((C = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var e, r;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = null),
                                null != this.currency && (e = this.currency.Id),
                                (r = 0),
                                this.current2 > 1 &&
                                  (r =
                                    (this.current2 - 1) *
                                    this.selectedNumberofShow2),
                                (t.next = 6),
                                this.getMarketPlaceOrderListing({
                                  categoryId:
                                    999 == this.searchAssetCategory
                                      ? null
                                      : this.searchAssetCategory,
                                  priceFrom: $("#amountFrom").val(),
                                  priceTo: $("#amountTo").val(),
                                  currencyId: e,
                                  start: r,
                                  length: this.selectedNumberofShow2,
                                  sortBy: this.selectedSort2,
                                  memberId: this.memberId,
                                  searchKeyword: this.searchAssetKeyword,
                                  searchForSellOrder: !1,
                                  searchForAuction: !0,
                                  auctionFilter: 2,
                                })
                              );
                            case 6:
                              this.marketPlaceAuctionOrderListing &&
                              this.marketPlaceAuctionOrderListing.length
                                ? ((this.total2 =
                                    this.marketPlaceAuctionOrderListing[0].TotalPage),
                                  (this.totalItem2 =
                                    this.marketPlaceAuctionOrderListing[0].TotalRow))
                                : ((this.total2 = 0), (this.totalItem2 = 0));
                            case 7:
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
                  return C.apply(this, arguments);
                }),
              searchUpcomingAuctionOrder:
                ((_ = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var e, r;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = null),
                                null != this.currency && (e = this.currency.Id),
                                (r = 0),
                                this.current3 > 1 &&
                                  (r =
                                    (this.current3 - 1) *
                                    this.selectedNumberofShow3),
                                (t.next = 6),
                                this.getMarketPlaceOrderListing({
                                  categoryId:
                                    999 == this.searchAssetCategory
                                      ? null
                                      : this.searchAssetCategory,
                                  priceFrom: $("#amountFrom").val(),
                                  priceTo: $("#amountTo").val(),
                                  currencyId: e,
                                  start: r,
                                  length: this.selectedNumberofShow3,
                                  sortBy: this.selectedSort3,
                                  memberId: this.memberId,
                                  searchKeyword: this.searchAssetKeyword,
                                  searchForSellOrder: !1,
                                  searchForAuction: !0,
                                  auctionFilter: 1,
                                })
                              );
                            case 6:
                              this.marketPlaceUpcomingAuctionOrderListing &&
                              this.marketPlaceUpcomingAuctionOrderListing.length
                                ? ((this.total3 =
                                    this.marketPlaceUpcomingAuctionOrderListing[0].TotalPage),
                                  (this.totalItem3 =
                                    this.marketPlaceUpcomingAuctionOrderListing[0].TotalRow))
                                : ((this.total3 = 0), (this.totalItem3 = 0));
                            case 7:
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
                  return _.apply(this, arguments);
                }),
            }
          ),
        },
        A = k,
        L = (r(1265), r(65)),
        component = Object(L.a)(
          A,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "main",
              { staticClass: "main" },
              [
                t._m(0),
                t._v(" "),
                o("section", { staticClass: "mt-50 mb-50" }, [
                  o("div", { staticClass: "container" }, [
                    o("div", { staticClass: "row" }, [
                      o(
                        "div",
                        {
                          staticClass:
                            "col-lg-3 primary-sidebar sticky-sidebar",
                        },
                        [
                          o("div", { staticClass: "widget-category mb-30" }, [
                            o(
                              "h5",
                              {
                                staticClass:
                                  "section-title style-1 mb-30 wow fadeIn animated",
                              },
                              [t._v("Category")]
                            ),
                            t._v(" "),
                            o(
                              "ul",
                              { staticClass: "categories" },
                              [
                                o(
                                  "li",
                                  {
                                    staticClass: "liCategory SelectedCategory",
                                    staticStyle: {
                                      padding: "10px",
                                      "border-radius": "10px",
                                    },
                                    attrs: { id: "liCategory_999" },
                                  },
                                  [
                                    o(
                                      "a",
                                      {
                                        attrs: { href: "#" },
                                        on: {
                                          click: function (e) {
                                            return t.categoryOnChange(999);
                                          },
                                        },
                                      },
                                      [
                                        o("img", {
                                          staticClass: "icon-cat",
                                          attrs: { src: r(665), alt: "" },
                                        }),
                                        t._v(" All NFTs"),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                t._l(t.categoryListing, function (e) {
                                  var r = e.Id,
                                    n = e.Name,
                                    c = e.Logo;
                                  return o(
                                    "li",
                                    {
                                      key: r,
                                      staticClass: "liCategory",
                                      staticStyle: {
                                        padding: "10px",
                                        "border-radius": "10px",
                                      },
                                      attrs: { id: "liCategory_" + r },
                                    },
                                    [
                                      o(
                                        "a",
                                        {
                                          attrs: { href: "#" },
                                          on: {
                                            click: function (e) {
                                              return t.categoryOnChange(r);
                                            },
                                          },
                                        },
                                        [
                                          o("img", {
                                            staticClass: "icon-cat",
                                            attrs: { src: c, alt: "" },
                                          }),
                                          t._v(" " + t._s(n)),
                                        ]
                                      ),
                                    ]
                                  );
                                }),
                              ],
                              2
                            ),
                          ]),
                          t._v(" "),
                          o(
                            "div",
                            {
                              staticClass:
                                "sidebar-widget price_range range mb-30",
                            },
                            [
                              t._m(1),
                              t._v(" "),
                              o("div", { staticClass: "price-filter mb-20" }, [
                                o(
                                  "div",
                                  { staticClass: "price-filter-inner" },
                                  [
                                    o(
                                      "select",
                                      {
                                        directives: [
                                          {
                                            name: "model",
                                            rawName: "v-model",
                                            value: t.currency,
                                            expression: "currency",
                                          },
                                        ],
                                        staticClass: "form-select",
                                        on: {
                                          change: function (e) {
                                            var r = Array.prototype.filter
                                              .call(
                                                e.target.options,
                                                function (t) {
                                                  return t.selected;
                                                }
                                              )
                                              .map(function (t) {
                                                return "_value" in t
                                                  ? t._value
                                                  : t.value;
                                              });
                                            t.currency = e.target.multiple
                                              ? r
                                              : r[0];
                                          },
                                        },
                                      },
                                      [
                                        o("option"),
                                        t._v(" "),
                                        t._l(t.sellCurrencies, function (e) {
                                          return o(
                                            "option",
                                            {
                                              key: e.Id,
                                              domProps: { value: e },
                                            },
                                            [t._v(t._s(e.Code))]
                                          );
                                        }),
                                      ],
                                      2
                                    ),
                                    t._v(" "),
                                    t._m(2),
                                    t._v(" "),
                                    t._m(3),
                                  ]
                                ),
                              ]),
                              t._v(" "),
                              o(
                                "a",
                                {
                                  staticClass: "btn btn-sm btn-default",
                                  attrs: { href: "#" },
                                  on: { click: t.searchAll },
                                },
                                [
                                  o("i", { staticClass: "fi-rs-filter mr-5" }),
                                  t._v(" Filter"),
                                ]
                              ),
                            ]
                          ),
                          t._v(" "),
                          o(
                            "div",
                            {
                              staticClass:
                                "sidebar-widget product-sidebar  mb-30 p-30 bg-grey border-radius-10 d-none d-lg-block",
                            },
                            [
                              t._m(4),
                              t._v(" "),
                              t._l(t.newAddedListing, function (e) {
                                var r = e.CollectionGroupId,
                                  n = e.SellOrder,
                                  c = e.AuctionOrder,
                                  l = e.AssetStatusId,
                                  d = e.URI,
                                  v = e.PreviewImageURI,
                                  h = e.ContractAddress,
                                  m = e.TokenId,
                                  _ = e.Owner,
                                  C = e.Id;
                                return o(
                                  "div",
                                  {
                                    key: C,
                                    staticClass: "single-post clearfix",
                                  },
                                  [
                                    o(
                                      "nuxt-link",
                                      {
                                        attrs: {
                                          to: {
                                            name: t.assetDetailsLink(r),
                                            params: {
                                              contractAddress: h,
                                              tokenId: m,
                                              ownerAddress: _,
                                            },
                                          },
                                        },
                                      },
                                      [
                                        o("div", { staticClass: "image" }, [
                                          ".mp3" != d.slice(-4).toLowerCase() &&
                                          ".mp4" != d.slice(-4).toLowerCase()
                                            ? o("img", {
                                                staticClass: "default-img",
                                                attrs: { src: v, alt: "" },
                                              })
                                            : t._e(),
                                          t._v(" "),
                                          ".mp3" == d.slice(-4).toLowerCase()
                                            ? o("img", {
                                                staticClass: "default-img",
                                                attrs: {
                                                  src: "assets/img/default-img-mp3.jpg",
                                                  alt: "",
                                                },
                                              })
                                            : t._e(),
                                          t._v(" "),
                                          ".mp4" == d.slice(-4).toLowerCase()
                                            ? o("video", {
                                                staticStyle: {
                                                  "max-height": "90%",
                                                },
                                                attrs: {
                                                  src: t.uriWithStartTime(d),
                                                  controls: "controls",
                                                  loop: "loop",
                                                  muted: "muted",
                                                },
                                                domProps: { muted: !0 },
                                              })
                                            : t._e(),
                                        ]),
                                        t._v(" "),
                                        2 == l
                                          ? o(
                                              "div",
                                              { staticClass: "content pt-10" },
                                              [
                                                o(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "price mb-0 mt-5",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        Number(
                                                          n.Price
                                                        ).toLocaleString()
                                                      ) +
                                                        " " +
                                                        t._s(n.CurrencyCode)
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                n.PriceUSD
                                                  ? o(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "usd-price1",
                                                      },
                                                      [
                                                        t._v(
                                                          "$" +
                                                            t._s(
                                                              Number(
                                                                n.PriceUSD
                                                              ).toLocaleString()
                                                            ) +
                                                            " USD"
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
                                            )
                                          : t._e(),
                                        t._v(" "),
                                        3 == l
                                          ? o(
                                              "div",
                                              { staticClass: "content pt-10" },
                                              [
                                                o(
                                                  "p",
                                                  {
                                                    staticClass:
                                                      "price mb-0 mt-5",
                                                  },
                                                  [
                                                    t._v(
                                                      t._s(
                                                        Number(
                                                          null == c.CurrentBid
                                                            ? c.StartBid
                                                            : c.CurrentBid
                                                        ).toLocaleString()
                                                      ) +
                                                        " " +
                                                        t._s(c.CurrencyCode)
                                                    ),
                                                  ]
                                                ),
                                                t._v(" "),
                                                c.BidUSD
                                                  ? o(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "usd-price",
                                                      },
                                                      [
                                                        t._v(
                                                          "$" +
                                                            t._s(
                                                              Number(
                                                                c.BidUSD
                                                              ).toLocaleString()
                                                            ) +
                                                            " USD"
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ]
                                            )
                                          : t._e(),
                                      ]
                                    ),
                                  ],
                                  1
                                );
                              }),
                            ],
                            2
                          ),
                        ]
                      ),
                      t._v(" "),
                      o("div", { staticClass: "col-lg-9" }, [
                        t._m(5),
                        t._v(" "),
                        o(
                          "div",
                          {
                            staticClass:
                              "tab-content wow fadeIn animated marketplace-tabcontent",
                            attrs: { id: "marketplace-tabcontent" },
                          },
                          [
                            o(
                              "div",
                              {
                                staticClass: "tab-pane fade show active",
                                attrs: {
                                  id: "tab-one",
                                  role: "tabpanel",
                                  "aria-labelledby": "tab-one",
                                },
                              },
                              [
                                o(
                                  "div",
                                  { staticClass: "shop-product-fillter" },
                                  [
                                    o(
                                      "div",
                                      { staticClass: "totall-product" },
                                      [
                                        t._v(
                                          "\n                                        We found "
                                        ),
                                        o("strong", [
                                          t._v(t._s(this.totalItem1)),
                                        ]),
                                        t._v(
                                          " items for you!\n                                    "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    o(
                                      "div",
                                      { staticClass: "sort-by-product-area" },
                                      [
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-cover mr-10",
                                            attrs: { id: "showcover_1" },
                                          },
                                          [
                                            t._m(6),
                                            t._v(" "),
                                            o(
                                              "div",
                                              {
                                                staticClass: "sort-by-dropdown",
                                                attrs: { id: "dropdownShow_1" },
                                              },
                                              [
                                                o("ul", [
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_1 active",
                                                        attrs: {
                                                          id: "dropdownShow50_1",
                                                          href: "#",
                                                          value: "50",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange1,
                                                        },
                                                      },
                                                      [t._v("50")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_1",
                                                        attrs: {
                                                          id: "dropdownShow100_1",
                                                          href: "#",
                                                          value: "100",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange1,
                                                        },
                                                      },
                                                      [t._v("100")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_1",
                                                        attrs: {
                                                          id: "dropdownShow150_1",
                                                          href: "#",
                                                          value: "150",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange1,
                                                        },
                                                      },
                                                      [t._v("150")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_1",
                                                        attrs: {
                                                          id: "dropdownShow200_1",
                                                          href: "#",
                                                          value: "200",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange1,
                                                        },
                                                      },
                                                      [t._v("200")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_1",
                                                        attrs: {
                                                          id: "dropdownShowAll_1",
                                                          href: "#",
                                                          value: "0",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange1,
                                                        },
                                                      },
                                                      [t._v("All")]
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-cover",
                                            attrs: { id: "sortcover_1" },
                                          },
                                          [
                                            t._m(7),
                                            t._v(" "),
                                            o(
                                              "div",
                                              {
                                                staticClass: "sort-by-dropdown",
                                                attrs: { id: "dropdownSort_1" },
                                              },
                                              [
                                                o("ul", [
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_1 active",
                                                        attrs: {
                                                          id: "dropdownSort1_1",
                                                          href: "#",
                                                          value: "1",
                                                          text: "Popular",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange1,
                                                        },
                                                      },
                                                      [t._v("Popular")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_1",
                                                        attrs: {
                                                          id: "dropdownSort2_1",
                                                          href: "#",
                                                          value: "2",
                                                          text: "New Added",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange1,
                                                        },
                                                      },
                                                      [t._v("New Added")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_1",
                                                        attrs: {
                                                          id: "dropdownSort3_1",
                                                          href: "#",
                                                          value: "3",
                                                          text: "Price: Low to High",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange1,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "Price: Low to High"
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_1",
                                                        attrs: {
                                                          id: "dropdownSort4_1",
                                                          href: "#",
                                                          value: "4",
                                                          text: "Price: High to Low",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange1,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "Price: High to Low"
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                o(
                                  "div",
                                  { staticClass: "row product-grid-3" },
                                  t._l(
                                    t.marketPlaceOrderListing,
                                    function (e, r) {
                                      var n = e.CollectionGroupId,
                                        c = e.SellOrder,
                                        l = e.AuctionOrder,
                                        d = e.AssetStatusId,
                                        v = e.FeatureName,
                                        h = e.OwnerOwnQuantity,
                                        m = e.OwnerDisplayName,
                                        _ = e.OnwerWalletAddressShort,
                                        C = e.IsCollectionEnabledBuy,
                                        w = e.Name,
                                        f = e.URI,
                                        S = e.PreviewImageURI,
                                        y = e.Liked,
                                        k = e.Store,
                                        A = e.AssetId,
                                        L = e.TokenId,
                                        O = e.ContractAddress,
                                        I = e.Owner,
                                        N = e.StoreId,
                                        T = e.AssetType,
                                        x = e.Id;
                                      return o(
                                        "div",
                                        {
                                          key: x,
                                          staticClass:
                                            "col-md-4 col-12 col-sm-6 mb-30",
                                        },
                                        [
                                          o(
                                            "div",
                                            {
                                              staticClass:
                                                "product-cart-wrap h-100",
                                            },
                                            [
                                              o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "product-img-action-wrap",
                                                },
                                                [
                                                  o(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "product-img",
                                                    },
                                                    [
                                                      o(
                                                        "nuxt-link",
                                                        {
                                                          attrs: {
                                                            to: {
                                                              name: t.assetDetailsLink(
                                                                n
                                                              ),
                                                              params: {
                                                                contractAddress:
                                                                  O,
                                                                tokenId: L,
                                                                ownerAddress: I,
                                                              },
                                                            },
                                                          },
                                                        },
                                                        [
                                                          ".mp3" !=
                                                            f
                                                              .slice(-4)
                                                              .toLowerCase() &&
                                                          ".mp4" !=
                                                            f
                                                              .slice(-4)
                                                              .toLowerCase()
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "product-img-content",
                                                                },
                                                                [
                                                                  o(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "inner",
                                                                    },
                                                                    [
                                                                      o("img", {
                                                                        attrs: {
                                                                          src: S,
                                                                          alt: "",
                                                                          loading:
                                                                            "lazy",
                                                                        },
                                                                      }),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                          t._v(" "),
                                                          ".mp4" ==
                                                          f
                                                            .slice(-4)
                                                            .toLowerCase()
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "product-video-wrapper",
                                                                },
                                                                [
                                                                  o(
                                                                    "video",
                                                                    {
                                                                      attrs: {
                                                                        controls:
                                                                          "",
                                                                        loop: "loop",
                                                                        muted:
                                                                          "muted",
                                                                      },
                                                                      domProps:
                                                                        {
                                                                          muted:
                                                                            !0,
                                                                        },
                                                                    },
                                                                    [
                                                                      o(
                                                                        "source",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              src: t.uriWithStartTime(
                                                                                f
                                                                              ),
                                                                              type: "video/mp4",
                                                                            },
                                                                        }
                                                                      ),
                                                                      t._v(
                                                                        "\n                                                                HTML5 video tag is not supported in your browser\n                                                            "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                          t._v(" "),
                                                          ".mp3" ==
                                                          f
                                                            .slice(-4)
                                                            .toLowerCase()
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "product-audio-wrapper",
                                                                  staticStyle: {
                                                                    "background-image":
                                                                      "url('assets/img/default-img-audio.jpg')",
                                                                  },
                                                                },
                                                                [
                                                                  o(
                                                                    "audio",
                                                                    {
                                                                      attrs: {
                                                                        controls:
                                                                          "",
                                                                      },
                                                                    },
                                                                    [
                                                                      o(
                                                                        "source",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              src: f,
                                                                              type: "audio/mp3",
                                                                            },
                                                                        }
                                                                      ),
                                                                      t._v(
                                                                        "\n                                                                Your browser does not support the audio element.\n                                                            "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  t._v(" "),
                                                  v
                                                    ? o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "product-badges product-badges-position product-badges-mrg",
                                                        },
                                                        [
                                                          o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "best",
                                                            },
                                                            [t._v(t._s(v))]
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                ]
                                              ),
                                              t._v(" "),
                                              o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "product-content-wrap",
                                                },
                                                [
                                                  o(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "product-category",
                                                    },
                                                    [
                                                      o(
                                                        "nuxt-link",
                                                        {
                                                          attrs: {
                                                            to: {
                                                              name: "Storelist",
                                                              params: {
                                                                storeid: N,
                                                              },
                                                            },
                                                          },
                                                        },
                                                        [t._v(" " + t._s(k))]
                                                      ),
                                                      t._v(" "),
                                                      !k && m && m.length > 0
                                                        ? o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "assetOwner",
                                                            },
                                                            [
                                                              o(
                                                                "NuxtLink",
                                                                {
                                                                  attrs: {
                                                                    to:
                                                                      "/Artist/" +
                                                                      I,
                                                                  },
                                                                },
                                                                [t._v(t._s(m))]
                                                              ),
                                                            ],
                                                            1
                                                          )
                                                        : t._e(),
                                                      t._v(" "),
                                                      k || m
                                                        ? t._e()
                                                        : o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "assetOwner",
                                                            },
                                                            [
                                                              o(
                                                                "NuxtLink",
                                                                {
                                                                  attrs: {
                                                                    to:
                                                                      "/Artist/" +
                                                                      I,
                                                                  },
                                                                },
                                                                [t._v(t._s(_))]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                      t._v(" "),
                                                      o(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "productOwerOwn float-right",
                                                        },
                                                        [
                                                          o("i", {
                                                            staticClass:
                                                              "fi-rr-user text-gray",
                                                          }),
                                                          t._v(" "),
                                                          o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "font-small text-gray",
                                                            },
                                                            [
                                                              t._v(
                                                                " owner own " +
                                                                  t._s(h)
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  t._v(" "),
                                                  o("h2", [
                                                    o(
                                                      "a",
                                                      { attrs: { href: "#" } },
                                                      [t._v(t._s(w))]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  2 == d
                                                    ? o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "product-price",
                                                        },
                                                        [
                                                          o("span", [
                                                            t._v(
                                                              t._s(
                                                                Number(
                                                                  c.Price
                                                                ).toLocaleString()
                                                              ) +
                                                                " " +
                                                                t._s(
                                                                  c.CurrencyCode
                                                                ) +
                                                                " "
                                                            ),
                                                          ]),
                                                          t._v(" "),
                                                          c.PriceUSD
                                                            ? o(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "usd-price",
                                                                },
                                                                [
                                                                  t._v(
                                                                    "$" +
                                                                      t._s(
                                                                        Number(
                                                                          c.PriceUSD
                                                                        ).toLocaleString()
                                                                      ) +
                                                                      " USD"
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  t._v(" "),
                                                  3 == d
                                                    ? o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "product-price",
                                                        },
                                                        [
                                                          o("span", [
                                                            t._v(
                                                              t._s(
                                                                Number(
                                                                  null ==
                                                                    l.CurrentBid
                                                                    ? l.StartBid
                                                                    : l.CurrentBid
                                                                ).toLocaleString()
                                                              ) +
                                                                " " +
                                                                t._s(
                                                                  l.CurrencyCode
                                                                )
                                                            ),
                                                          ]),
                                                          t._v(" "),
                                                          l.BidUSD
                                                            ? o(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "usd-price",
                                                                },
                                                                [
                                                                  t._v(
                                                                    "$" +
                                                                      t._s(
                                                                        Number(
                                                                          l.BidUSD
                                                                        ).toLocaleString()
                                                                      ) +
                                                                      " USD"
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  t._v(" "),
                                                  o(
                                                    "div",
                                                    {
                                                      staticClass: "cta mt-10",
                                                    },
                                                    [
                                                      o(
                                                        "nuxt-link",
                                                        {
                                                          staticClass:
                                                            "btn btn-outline btn-sm",
                                                          attrs: {
                                                            to: {
                                                              name: t.assetDetailsLink(
                                                                n
                                                              ),
                                                              params: {
                                                                contractAddress:
                                                                  O,
                                                                tokenId: L,
                                                                ownerAddress: I,
                                                              },
                                                            },
                                                          },
                                                        },
                                                        [t._v("Details")]
                                                      ),
                                                      t._v(
                                                        " \n                                                    "
                                                      ),
                                                      2 != d ||
                                                      (null != C && 1 != C) ||
                                                      (t.account &&
                                                        I.toLowerCase() ==
                                                          t.account.toLowerCase())
                                                        ? t._e()
                                                        : o(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "btn btn-sm",
                                                              attrs: {
                                                                href: "javascript:void(0)",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.buyAsset(
                                                                      A,
                                                                      c.SellOrderId,
                                                                      c.SellQuantity,
                                                                      w,
                                                                      f,
                                                                      O,
                                                                      L,
                                                                      T + "",
                                                                      I,
                                                                      c.Salt,
                                                                      c.Signature,
                                                                      c.Price,
                                                                      c.CurrencyCode,
                                                                      n
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [t._v("Buy")]
                                                          ),
                                                      t._v(" "),
                                                      3 != d ||
                                                      (null != C && 1 != C) ||
                                                      (t.account &&
                                                        I.toLowerCase() ==
                                                          t.account.toLowerCase())
                                                        ? t._e()
                                                        : o(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "btn btn-sm",
                                                              attrs: {
                                                                href: "javascript:void(0)",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.bidAsset(
                                                                      t
                                                                        .marketPlaceOrderListing[
                                                                        r
                                                                      ]
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                                                        Bid\n                                                    "
                                                              ),
                                                            ]
                                                          ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "likeshare-wrapper",
                                                },
                                                [
                                                  o(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6",
                                                        },
                                                        [
                                                          o(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "only-share",
                                                            },
                                                            [
                                                              o(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "share action-btn hover-up",
                                                                  attrs: {
                                                                    "aria-label":
                                                                      "Share This",
                                                                    "data-bs-toggle":
                                                                      "modal",
                                                                    "data-bs-target":
                                                                      "#shareThiswModal",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return t.openShareModal(
                                                                          O,
                                                                          L,
                                                                          I
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  t._m(8, !0),
                                                                  t._v(
                                                                    " Share This"
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6",
                                                        },
                                                        [
                                                          o(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "only-like",
                                                            },
                                                            [
                                                              o(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "like",
                                                                  attrs: {
                                                                    href: "javascript:void(0)",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return t.likeAsset(
                                                                          A
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  o(
                                                                    "span",
                                                                    {
                                                                      class:
                                                                        "like_" +
                                                                        A,
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(y)
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  t._v(
                                                                    " Likes"
                                                                  ),
                                                                  o(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "heart",
                                                                    },
                                                                    [
                                                                      o("i", {
                                                                        staticClass:
                                                                          "fa-heart",
                                                                        class: [
                                                                          t.likedAssetList.indexOf(
                                                                            A
                                                                          ) >= 0
                                                                            ? "fas selected-heart"
                                                                            : "far  border-heart",
                                                                          "heart_" +
                                                                            A,
                                                                        ],
                                                                      }),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      );
                                    }
                                  ),
                                  0
                                ),
                                t._v(" "),
                                this.total1 > 1
                                  ? o(
                                      "div",
                                      {
                                        staticClass:
                                          "pagination-area mt-15 mb-sm-5 mb-lg-0",
                                      },
                                      [
                                        [
                                          o("sliding-pagination", {
                                            attrs: {
                                              current: t.current1,
                                              total: t.total1,
                                            },
                                            on: {
                                              "page-change": t.onPageChange1,
                                            },
                                          }),
                                        ],
                                      ],
                                      2
                                    )
                                  : t._e(),
                              ]
                            ),
                            t._v(" "),
                            o(
                              "div",
                              {
                                staticClass: "tab-pane fade show",
                                attrs: {
                                  id: "tab-two",
                                  role: "tabpanel",
                                  "aria-labelledby": "tab-two",
                                },
                              },
                              [
                                o(
                                  "div",
                                  { staticClass: "shop-product-fillter" },
                                  [
                                    o(
                                      "div",
                                      { staticClass: "totall-product" },
                                      [
                                        t._v(
                                          "\n                                        We found "
                                        ),
                                        o("strong", [
                                          t._v(t._s(this.totalItem2)),
                                        ]),
                                        t._v(
                                          " items for you!\n                                    "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    o(
                                      "div",
                                      { staticClass: "sort-by-product-area" },
                                      [
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-cover mr-10",
                                            attrs: { id: "showcover_2" },
                                          },
                                          [
                                            t._m(9),
                                            t._v(" "),
                                            o(
                                              "div",
                                              {
                                                staticClass: "sort-by-dropdown",
                                                attrs: { id: "dropdownShow_2" },
                                              },
                                              [
                                                o("ul", [
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_2 active",
                                                        attrs: {
                                                          id: "dropdownShow50_2",
                                                          href: "#",
                                                          value: "50",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange2,
                                                        },
                                                      },
                                                      [t._v("50")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_2",
                                                        attrs: {
                                                          id: "dropdownShow100_2",
                                                          href: "#",
                                                          value: "100",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange2,
                                                        },
                                                      },
                                                      [t._v("100")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_2",
                                                        attrs: {
                                                          id: "dropdownShow150_2",
                                                          href: "#",
                                                          value: "150",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange2,
                                                        },
                                                      },
                                                      [t._v("150")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_2",
                                                        attrs: {
                                                          id: "dropdownShow200_2",
                                                          href: "#",
                                                          value: "200",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange2,
                                                        },
                                                      },
                                                      [t._v("200")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_2",
                                                        attrs: {
                                                          id: "dropdownShowAll_2",
                                                          href: "#",
                                                          value: "0",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange2,
                                                        },
                                                      },
                                                      [t._v("All")]
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-cover",
                                            attrs: { id: "sortcover_2" },
                                          },
                                          [
                                            t._m(10),
                                            t._v(" "),
                                            o(
                                              "div",
                                              {
                                                staticClass: "sort-by-dropdown",
                                                attrs: { id: "dropdownSort_2" },
                                              },
                                              [
                                                o("ul", [
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_2 active",
                                                        attrs: {
                                                          id: "dropdownSort1_2",
                                                          href: "#",
                                                          value: "1",
                                                          text: "Popular",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange2,
                                                        },
                                                      },
                                                      [t._v("Popular")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_2",
                                                        attrs: {
                                                          id: "dropdownSort2_2",
                                                          href: "#",
                                                          value: "2",
                                                          text: "New Added",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange2,
                                                        },
                                                      },
                                                      [t._v("New Added")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_2",
                                                        attrs: {
                                                          id: "dropdownSort3_2",
                                                          href: "#",
                                                          value: "3",
                                                          text: "Price: Low to High",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange2,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "Price: Low to High"
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_2",
                                                        attrs: {
                                                          id: "dropdownSort4_2",
                                                          href: "#",
                                                          value: "4",
                                                          text: "Price: High to Low",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange2,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "Price: High to Low"
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                o(
                                  "div",
                                  { staticClass: "row product-grid-3" },
                                  t._l(
                                    t.marketPlaceAuctionOrderListing,
                                    function (e, r) {
                                      var n = e.CollectionGroupId,
                                        c = e.SellOrder,
                                        l = e.AuctionOrder,
                                        d = e.AssetStatusId,
                                        v = e.FeatureName,
                                        h = e.OwnerOwnQuantity,
                                        m = e.OwnerDisplayName,
                                        _ = e.OnwerWalletAddressShort,
                                        C = e.IsCollectionEnabledBuy,
                                        w = e.Name,
                                        f = e.URI,
                                        S = e.PreviewImageURI,
                                        y = e.Liked,
                                        k = e.Store,
                                        A = e.AssetId,
                                        L = e.TokenId,
                                        O = e.ContractAddress,
                                        I = e.Owner,
                                        N = e.StoreId,
                                        T = e.AssetType,
                                        x = e.Id;
                                      return o(
                                        "div",
                                        {
                                          key: x,
                                          staticClass:
                                            "col-md-4 col-12 col-sm-6 mb-30",
                                        },
                                        [
                                          o(
                                            "div",
                                            {
                                              staticClass:
                                                "product-cart-wrap h-100",
                                            },
                                            [
                                              o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "product-img-action-wrap",
                                                },
                                                [
                                                  o(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "product-img",
                                                    },
                                                    [
                                                      o(
                                                        "nuxt-link",
                                                        {
                                                          attrs: {
                                                            to: {
                                                              name: t.assetDetailsLink(
                                                                n
                                                              ),
                                                              params: {
                                                                contractAddress:
                                                                  O,
                                                                tokenId: L,
                                                                ownerAddress: I,
                                                              },
                                                            },
                                                          },
                                                        },
                                                        [
                                                          ".mp3" !=
                                                            f
                                                              .slice(-4)
                                                              .toLowerCase() &&
                                                          ".mp4" !=
                                                            f
                                                              .slice(-4)
                                                              .toLowerCase()
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "product-img-content",
                                                                },
                                                                [
                                                                  o(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "inner",
                                                                    },
                                                                    [
                                                                      o("img", {
                                                                        attrs: {
                                                                          src: S,
                                                                          alt: "",
                                                                          loading:
                                                                            "lazy",
                                                                        },
                                                                      }),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                          t._v(" "),
                                                          ".mp4" ==
                                                          f
                                                            .slice(-4)
                                                            .toLowerCase()
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "product-video-wrapper",
                                                                },
                                                                [
                                                                  o(
                                                                    "video",
                                                                    {
                                                                      attrs: {
                                                                        controls:
                                                                          "",
                                                                        loop: "loop",
                                                                        muted:
                                                                          "muted",
                                                                      },
                                                                      domProps:
                                                                        {
                                                                          muted:
                                                                            !0,
                                                                        },
                                                                    },
                                                                    [
                                                                      o(
                                                                        "source",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              src: t.uriWithStartTime(
                                                                                f
                                                                              ),
                                                                              type: "video/mp4",
                                                                            },
                                                                        }
                                                                      ),
                                                                      t._v(
                                                                        "\n                                                                HTML5 video tag is not supported in your browser\n                                                            "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                          t._v(" "),
                                                          ".mp3" ==
                                                          f
                                                            .slice(-4)
                                                            .toLowerCase()
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "product-audio-wrapper",
                                                                  staticStyle: {
                                                                    "background-image":
                                                                      "url('assets/img/default-img-audio.jpg')",
                                                                  },
                                                                },
                                                                [
                                                                  o(
                                                                    "audio",
                                                                    {
                                                                      attrs: {
                                                                        controls:
                                                                          "",
                                                                      },
                                                                    },
                                                                    [
                                                                      o(
                                                                        "source",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              src: f,
                                                                              type: "audio/mp3",
                                                                            },
                                                                        }
                                                                      ),
                                                                      t._v(
                                                                        "\n                                                                Your browser does not support the audio element.\n                                                            "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  t._v(" "),
                                                  v
                                                    ? o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "product-badges product-badges-position product-badges-mrg",
                                                        },
                                                        [
                                                          o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "best",
                                                            },
                                                            [t._v(t._s(v))]
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                ]
                                              ),
                                              t._v(" "),
                                              o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "product-content-wrap",
                                                },
                                                [
                                                  o(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "product-category",
                                                    },
                                                    [
                                                      o(
                                                        "nuxt-link",
                                                        {
                                                          attrs: {
                                                            to: {
                                                              name: "Storelist",
                                                              params: {
                                                                storeid: N,
                                                              },
                                                            },
                                                          },
                                                        },
                                                        [t._v(" " + t._s(k))]
                                                      ),
                                                      t._v(" "),
                                                      !k && m && m.length > 0
                                                        ? o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "assetOwner",
                                                            },
                                                            [
                                                              o(
                                                                "NuxtLink",
                                                                {
                                                                  attrs: {
                                                                    to:
                                                                      "/Artist/" +
                                                                      I,
                                                                  },
                                                                },
                                                                [t._v(t._s(m))]
                                                              ),
                                                            ],
                                                            1
                                                          )
                                                        : t._e(),
                                                      t._v(" "),
                                                      k || m
                                                        ? t._e()
                                                        : o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "assetOwner",
                                                            },
                                                            [
                                                              o(
                                                                "NuxtLink",
                                                                {
                                                                  attrs: {
                                                                    to:
                                                                      "/Artist/" +
                                                                      I,
                                                                  },
                                                                },
                                                                [t._v(t._s(_))]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                      t._v(" "),
                                                      o(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "productOwerOwn float-right",
                                                        },
                                                        [
                                                          o("i", {
                                                            staticClass:
                                                              "fi-rr-user text-gray",
                                                          }),
                                                          t._v(" "),
                                                          o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "font-small text-gray",
                                                            },
                                                            [
                                                              t._v(
                                                                " owner own " +
                                                                  t._s(h)
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  t._v(" "),
                                                  o("h2", [
                                                    o(
                                                      "a",
                                                      { attrs: { href: "#" } },
                                                      [t._v(t._s(w))]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  2 == d
                                                    ? o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "product-price",
                                                        },
                                                        [
                                                          o("span", [
                                                            t._v(
                                                              t._s(
                                                                Number(
                                                                  c.Price
                                                                ).toLocaleString()
                                                              ) +
                                                                " " +
                                                                t._s(
                                                                  c.CurrencyCode
                                                                ) +
                                                                " "
                                                            ),
                                                          ]),
                                                          t._v(" "),
                                                          c.PriceUSD
                                                            ? o(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "usd-price",
                                                                },
                                                                [
                                                                  t._v(
                                                                    "$" +
                                                                      t._s(
                                                                        Number(
                                                                          c.PriceUSD
                                                                        ).toLocaleString()
                                                                      ) +
                                                                      " USD"
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  t._v(" "),
                                                  3 == d
                                                    ? o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "product-price",
                                                        },
                                                        [
                                                          o("span", [
                                                            t._v(
                                                              t._s(
                                                                Number(
                                                                  null ==
                                                                    l.CurrentBid
                                                                    ? l.StartBid
                                                                    : l.CurrentBid
                                                                ).toLocaleString()
                                                              ) +
                                                                " " +
                                                                t._s(
                                                                  l.CurrencyCode
                                                                )
                                                            ),
                                                          ]),
                                                          t._v(" "),
                                                          l.BidUSD
                                                            ? o(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "usd-price",
                                                                },
                                                                [
                                                                  t._v(
                                                                    "$" +
                                                                      t._s(
                                                                        Number(
                                                                          l.BidUSD
                                                                        ).toLocaleString()
                                                                      ) +
                                                                      " USD"
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  t._v(" "),
                                                  o(
                                                    "div",
                                                    {
                                                      staticClass: "cta mt-10",
                                                    },
                                                    [
                                                      o(
                                                        "nuxt-link",
                                                        {
                                                          staticClass:
                                                            "btn btn-outline btn-sm",
                                                          attrs: {
                                                            to: {
                                                              name: t.assetDetailsLink(
                                                                n
                                                              ),
                                                              params: {
                                                                contractAddress:
                                                                  O,
                                                                tokenId: L,
                                                                ownerAddress: I,
                                                              },
                                                            },
                                                          },
                                                        },
                                                        [t._v("Details")]
                                                      ),
                                                      t._v(
                                                        " \n                                                    "
                                                      ),
                                                      2 != d ||
                                                      (null != C && 1 != C) ||
                                                      (t.account &&
                                                        I.toLowerCase() ==
                                                          t.account.toLowerCase())
                                                        ? t._e()
                                                        : o(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "btn btn-sm",
                                                              attrs: {
                                                                href: "javascript:void(0)",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.buyAsset(
                                                                      A,
                                                                      c.SellOrderId,
                                                                      c.SellQuantity,
                                                                      w,
                                                                      f,
                                                                      O,
                                                                      L,
                                                                      T + "",
                                                                      I,
                                                                      c.Salt,
                                                                      c.Signature,
                                                                      c.Price,
                                                                      c.CurrencyCode,
                                                                      n
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [t._v("Buy")]
                                                          ),
                                                      t._v(" "),
                                                      3 != d ||
                                                      (null != C && 1 != C) ||
                                                      (t.account &&
                                                        I.toLowerCase() ==
                                                          t.account.toLowerCase())
                                                        ? t._e()
                                                        : o(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "btn btn-sm",
                                                              attrs: {
                                                                href: "javascript:void(0)",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.bidAsset(
                                                                      t
                                                                        .marketPlaceAuctionOrderListing[
                                                                        r
                                                                      ]
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                                                        Bid\n                                                    "
                                                              ),
                                                            ]
                                                          ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "likeshare-wrapper",
                                                },
                                                [
                                                  o(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6",
                                                        },
                                                        [
                                                          o(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "only-share",
                                                            },
                                                            [
                                                              o(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "share action-btn hover-up",
                                                                  attrs: {
                                                                    "aria-label":
                                                                      "Share This",
                                                                    "data-bs-toggle":
                                                                      "modal",
                                                                    "data-bs-target":
                                                                      "#shareThiswModal",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return t.openShareModal(
                                                                          O,
                                                                          L,
                                                                          I
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  t._m(11, !0),
                                                                  t._v(
                                                                    " Share This"
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6",
                                                        },
                                                        [
                                                          o(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "only-like",
                                                            },
                                                            [
                                                              o(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "like",
                                                                  attrs: {
                                                                    href: "javascript:void(0)",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return t.likeAsset(
                                                                          A
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  o(
                                                                    "span",
                                                                    {
                                                                      class:
                                                                        "like_" +
                                                                        A,
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(y)
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  t._v(
                                                                    " Likes"
                                                                  ),
                                                                  o(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "heart",
                                                                    },
                                                                    [
                                                                      o("i", {
                                                                        staticClass:
                                                                          "fa-heart",
                                                                        class: [
                                                                          t.likedAssetList.indexOf(
                                                                            A
                                                                          ) >= 0
                                                                            ? "fas selected-heart"
                                                                            : "far  border-heart",
                                                                          "heart_" +
                                                                            A,
                                                                        ],
                                                                      }),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      );
                                    }
                                  ),
                                  0
                                ),
                                t._v(" "),
                                this.total2 > 1
                                  ? o(
                                      "div",
                                      {
                                        staticClass:
                                          "pagination-area mt-15 mb-sm-5 mb-lg-0",
                                      },
                                      [
                                        [
                                          o("sliding-pagination", {
                                            attrs: {
                                              current: t.current2,
                                              total: t.total2,
                                            },
                                            on: {
                                              "page-change": t.onPageChange2,
                                            },
                                          }),
                                        ],
                                      ],
                                      2
                                    )
                                  : t._e(),
                              ]
                            ),
                            t._v(" "),
                            o(
                              "div",
                              {
                                staticClass: "tab-pane fade show",
                                attrs: {
                                  id: "tab-three",
                                  role: "tabpanel",
                                  "aria-labelledby": "tab-three",
                                },
                              },
                              [
                                o(
                                  "div",
                                  { staticClass: "shop-product-fillter" },
                                  [
                                    o(
                                      "div",
                                      { staticClass: "totall-product" },
                                      [
                                        t._v(
                                          "\n                                        We found "
                                        ),
                                        o("strong", [
                                          t._v(t._s(this.totalItem3)),
                                        ]),
                                        t._v(
                                          " items for you!\n                                    "
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    o(
                                      "div",
                                      { staticClass: "sort-by-product-area" },
                                      [
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-cover mr-10",
                                            attrs: { id: "showcover_3" },
                                          },
                                          [
                                            t._m(12),
                                            t._v(" "),
                                            o(
                                              "div",
                                              {
                                                staticClass: "sort-by-dropdown",
                                                attrs: { id: "dropdownShow_3" },
                                              },
                                              [
                                                o("ul", [
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_3 active",
                                                        attrs: {
                                                          id: "dropdownShow50_3",
                                                          href: "#",
                                                          value: "50",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange3,
                                                        },
                                                      },
                                                      [t._v("50")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_3",
                                                        attrs: {
                                                          id: "dropdownShow100_3",
                                                          href: "#",
                                                          value: "100",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange3,
                                                        },
                                                      },
                                                      [t._v("100")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_3",
                                                        attrs: {
                                                          id: "dropdownShow150_3",
                                                          href: "#",
                                                          value: "150",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange3,
                                                        },
                                                      },
                                                      [t._v("150")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_3",
                                                        attrs: {
                                                          id: "dropdownShow200_3",
                                                          href: "#",
                                                          value: "200",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange3,
                                                        },
                                                      },
                                                      [t._v("200")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownShow_3",
                                                        attrs: {
                                                          id: "dropdownShowAll_3",
                                                          href: "#",
                                                          value: "0",
                                                        },
                                                        on: {
                                                          click:
                                                            t.showOnChange3,
                                                        },
                                                      },
                                                      [t._v("All")]
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                        t._v(" "),
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-cover",
                                            attrs: { id: "sortcover_3" },
                                          },
                                          [
                                            t._m(13),
                                            t._v(" "),
                                            o(
                                              "div",
                                              {
                                                staticClass: "sort-by-dropdown",
                                                attrs: { id: "dropdownSort_3" },
                                              },
                                              [
                                                o("ul", [
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_3 active",
                                                        attrs: {
                                                          id: "dropdownSort5_3",
                                                          href: "#",
                                                          value: "5",
                                                          text: "Start Time",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange3,
                                                        },
                                                      },
                                                      [t._v("Start Time")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_3",
                                                        attrs: {
                                                          id: "dropdownSort1_3",
                                                          href: "#",
                                                          value: "1",
                                                          text: "Popular",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange3,
                                                        },
                                                      },
                                                      [t._v("Popular")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_3",
                                                        attrs: {
                                                          id: "dropdownSort2_3",
                                                          href: "#",
                                                          value: "2",
                                                          text: "New Added",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange3,
                                                        },
                                                      },
                                                      [t._v("New Added")]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_3",
                                                        attrs: {
                                                          id: "dropdownSort3_3",
                                                          href: "#",
                                                          value: "3",
                                                          text: "Price: Low to High",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange3,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "Price: Low to High"
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  o("li", [
                                                    o(
                                                      "a",
                                                      {
                                                        staticClass:
                                                          "dropdownSort_3",
                                                        attrs: {
                                                          id: "dropdownSort4_3",
                                                          href: "#",
                                                          value: "4",
                                                          text: "Price: High to Low",
                                                        },
                                                        on: {
                                                          click:
                                                            t.sortbyOnChange3,
                                                        },
                                                      },
                                                      [
                                                        t._v(
                                                          "Price: High to Low"
                                                        ),
                                                      ]
                                                    ),
                                                  ]),
                                                ]),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                o(
                                  "div",
                                  { staticClass: "row product-grid-3" },
                                  t._l(
                                    t.marketPlaceUpcomingAuctionOrderListing,
                                    function (e, r) {
                                      var n = e.CollectionGroupId,
                                        c = e.SellOrder,
                                        l = e.AuctionOrder,
                                        d = e.AssetStatusId,
                                        v = e.FeatureName,
                                        h = e.OwnerOwnQuantity,
                                        m = e.OwnerDisplayName,
                                        _ = e.OnwerWalletAddressShort,
                                        C = e.IsCollectionEnabledBuy,
                                        w = e.Name,
                                        f = e.URI,
                                        S = e.PreviewImageURI,
                                        y = e.Liked,
                                        k = e.Store,
                                        A = e.AssetId,
                                        L = e.TokenId,
                                        O = e.ContractAddress,
                                        I = e.Owner,
                                        N = e.StoreId,
                                        T = e.AssetType,
                                        x = e.Id;
                                      return o(
                                        "div",
                                        {
                                          key: x,
                                          staticClass:
                                            "col-md-4 col-12 col-sm-6 mb-30",
                                        },
                                        [
                                          o(
                                            "div",
                                            {
                                              staticClass:
                                                "product-cart-wrap h-100",
                                            },
                                            [
                                              o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "product-img-action-wrap",
                                                },
                                                [
                                                  o(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "product-img",
                                                    },
                                                    [
                                                      o(
                                                        "nuxt-link",
                                                        {
                                                          attrs: {
                                                            to: {
                                                              name: t.assetDetailsLink(
                                                                n
                                                              ),
                                                              params: {
                                                                contractAddress:
                                                                  O,
                                                                tokenId: L,
                                                                ownerAddress: I,
                                                              },
                                                            },
                                                          },
                                                        },
                                                        [
                                                          ".mp3" !=
                                                            f
                                                              .slice(-4)
                                                              .toLowerCase() &&
                                                          ".mp4" !=
                                                            f
                                                              .slice(-4)
                                                              .toLowerCase()
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "product-img-content",
                                                                },
                                                                [
                                                                  o(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "inner",
                                                                    },
                                                                    [
                                                                      o("img", {
                                                                        attrs: {
                                                                          src: S,
                                                                          alt: "",
                                                                          loading:
                                                                            "lazy",
                                                                        },
                                                                      }),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                          t._v(" "),
                                                          ".mp4" ==
                                                          f
                                                            .slice(-4)
                                                            .toLowerCase()
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "product-video-wrapper",
                                                                },
                                                                [
                                                                  o(
                                                                    "video",
                                                                    {
                                                                      attrs: {
                                                                        controls:
                                                                          "",
                                                                        loop: "loop",
                                                                        muted:
                                                                          "muted",
                                                                      },
                                                                      domProps:
                                                                        {
                                                                          muted:
                                                                            !0,
                                                                        },
                                                                    },
                                                                    [
                                                                      o(
                                                                        "source",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              src: t.uriWithStartTime(
                                                                                f
                                                                              ),
                                                                              type: "video/mp4",
                                                                            },
                                                                        }
                                                                      ),
                                                                      t._v(
                                                                        "\n                                                                HTML5 video tag is not supported in your browser\n                                                            "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                          t._v(" "),
                                                          ".mp3" ==
                                                          f
                                                            .slice(-4)
                                                            .toLowerCase()
                                                            ? o(
                                                                "div",
                                                                {
                                                                  staticClass:
                                                                    "product-audio-wrapper",
                                                                  staticStyle: {
                                                                    "background-image":
                                                                      "url('assets/img/default-img-audio.jpg')",
                                                                  },
                                                                },
                                                                [
                                                                  o(
                                                                    "audio",
                                                                    {
                                                                      attrs: {
                                                                        controls:
                                                                          "",
                                                                      },
                                                                    },
                                                                    [
                                                                      o(
                                                                        "source",
                                                                        {
                                                                          attrs:
                                                                            {
                                                                              src: f,
                                                                              type: "audio/mp3",
                                                                            },
                                                                        }
                                                                      ),
                                                                      t._v(
                                                                        "\n                                                                Your browser does not support the audio element.\n                                                            "
                                                                      ),
                                                                    ]
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  t._v(" "),
                                                  v
                                                    ? o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "product-badges product-badges-position product-badges-mrg",
                                                        },
                                                        [
                                                          o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "best",
                                                            },
                                                            [t._v(t._s(v))]
                                                          ),
                                                        ]
                                                      )
                                                    : t._e(),
                                                ]
                                              ),
                                              t._v(" "),
                                              o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "product-content-wrap",
                                                },
                                                [
                                                  o(
                                                    "div",
                                                    {
                                                      staticClass:
                                                        "product-category",
                                                    },
                                                    [
                                                      o(
                                                        "nuxt-link",
                                                        {
                                                          attrs: {
                                                            to: {
                                                              name: "Storelist",
                                                              params: {
                                                                storeid: N,
                                                              },
                                                            },
                                                          },
                                                        },
                                                        [t._v(" " + t._s(k))]
                                                      ),
                                                      t._v(" "),
                                                      !k && m && m.length > 0
                                                        ? o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "assetOwner",
                                                            },
                                                            [
                                                              o(
                                                                "NuxtLink",
                                                                {
                                                                  attrs: {
                                                                    to:
                                                                      "/Artist/" +
                                                                      I,
                                                                  },
                                                                },
                                                                [t._v(t._s(m))]
                                                              ),
                                                            ],
                                                            1
                                                          )
                                                        : t._e(),
                                                      t._v(" "),
                                                      k || m
                                                        ? t._e()
                                                        : o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "assetOwner",
                                                            },
                                                            [
                                                              o(
                                                                "NuxtLink",
                                                                {
                                                                  attrs: {
                                                                    to:
                                                                      "/Artist/" +
                                                                      I,
                                                                  },
                                                                },
                                                                [t._v(t._s(_))]
                                                              ),
                                                            ],
                                                            1
                                                          ),
                                                      t._v(" "),
                                                      o(
                                                        "span",
                                                        {
                                                          staticClass:
                                                            "productOwerOwn float-right",
                                                        },
                                                        [
                                                          o("i", {
                                                            staticClass:
                                                              "fi-rr-user text-gray",
                                                          }),
                                                          t._v(" "),
                                                          o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "font-small text-gray",
                                                            },
                                                            [
                                                              t._v(
                                                                " owner own " +
                                                                  t._s(h)
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ],
                                                    1
                                                  ),
                                                  t._v(" "),
                                                  o("h2", [
                                                    o(
                                                      "a",
                                                      { attrs: { href: "#" } },
                                                      [t._v(t._s(w))]
                                                    ),
                                                  ]),
                                                  t._v(" "),
                                                  2 == d
                                                    ? o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "product-price",
                                                        },
                                                        [
                                                          o("span", [
                                                            t._v(
                                                              t._s(
                                                                Number(
                                                                  c.Price
                                                                ).toLocaleString()
                                                              ) +
                                                                " " +
                                                                t._s(
                                                                  c.CurrencyCode
                                                                ) +
                                                                " "
                                                            ),
                                                          ]),
                                                          t._v(" "),
                                                          c.PriceUSD
                                                            ? o(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "usd-price",
                                                                },
                                                                [
                                                                  t._v(
                                                                    "$" +
                                                                      t._s(
                                                                        Number(
                                                                          c.PriceUSD
                                                                        ).toLocaleString()
                                                                      ) +
                                                                      " USD"
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  t._v(" "),
                                                  3 == d
                                                    ? o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "product-price",
                                                        },
                                                        [
                                                          o("span", [
                                                            t._v(
                                                              t._s(
                                                                Number(
                                                                  null ==
                                                                    l.CurrentBid
                                                                    ? l.StartBid
                                                                    : l.CurrentBid
                                                                ).toLocaleString()
                                                              ) +
                                                                " " +
                                                                t._s(
                                                                  l.CurrencyCode
                                                                )
                                                            ),
                                                          ]),
                                                          t._v(" "),
                                                          l.BidUSD
                                                            ? o(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "usd-price",
                                                                },
                                                                [
                                                                  t._v(
                                                                    "$" +
                                                                      t._s(
                                                                        Number(
                                                                          l.BidUSD
                                                                        ).toLocaleString()
                                                                      ) +
                                                                      " USD"
                                                                  ),
                                                                ]
                                                              )
                                                            : t._e(),
                                                        ]
                                                      )
                                                    : t._e(),
                                                  t._v(" "),
                                                  o(
                                                    "div",
                                                    {
                                                      staticClass: "cta mt-10",
                                                    },
                                                    [
                                                      o(
                                                        "nuxt-link",
                                                        {
                                                          staticClass:
                                                            "btn btn-outline btn-sm",
                                                          attrs: {
                                                            to: {
                                                              name: t.assetDetailsLink(
                                                                n
                                                              ),
                                                              params: {
                                                                contractAddress:
                                                                  O,
                                                                tokenId: L,
                                                                ownerAddress: I,
                                                              },
                                                            },
                                                          },
                                                        },
                                                        [t._v("Details")]
                                                      ),
                                                      t._v(
                                                        " \n                                                    "
                                                      ),
                                                      2 != d ||
                                                      (null != C && 1 != C) ||
                                                      (t.account &&
                                                        I.toLowerCase() ==
                                                          t.account.toLowerCase())
                                                        ? t._e()
                                                        : o(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "btn btn-sm",
                                                              attrs: {
                                                                href: "javascript:void(0)",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.buyAsset(
                                                                      A,
                                                                      c.SellOrderId,
                                                                      w,
                                                                      f,
                                                                      O,
                                                                      L,
                                                                      T + "",
                                                                      I,
                                                                      c.Salt,
                                                                      c.Signature,
                                                                      c.Price,
                                                                      c.CurrencyCode,
                                                                      n
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [t._v("Buy")]
                                                          ),
                                                      t._v(" "),
                                                      3 != d ||
                                                      (null != C && 1 != C) ||
                                                      (t.account &&
                                                        I.toLowerCase() ==
                                                          t.account.toLowerCase())
                                                        ? t._e()
                                                        : o(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "btn btn-sm",
                                                              attrs: {
                                                                href: "javascript:void(0)",
                                                              },
                                                              on: {
                                                                click:
                                                                  function (e) {
                                                                    return t.bidAsset(
                                                                      t
                                                                        .marketPlaceAuctionOrderListing[
                                                                        r
                                                                      ]
                                                                    );
                                                                  },
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                                                        Bid\n                                                    "
                                                              ),
                                                            ]
                                                          ),
                                                    ],
                                                    1
                                                  ),
                                                ]
                                              ),
                                              t._v(" "),
                                              o(
                                                "div",
                                                {
                                                  staticClass:
                                                    "likeshare-wrapper",
                                                },
                                                [
                                                  o(
                                                    "div",
                                                    { staticClass: "row" },
                                                    [
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6",
                                                        },
                                                        [
                                                          o(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "only-share",
                                                            },
                                                            [
                                                              o(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "share action-btn hover-up",
                                                                  attrs: {
                                                                    "aria-label":
                                                                      "Share This",
                                                                    "data-bs-toggle":
                                                                      "modal",
                                                                    "data-bs-target":
                                                                      "#shareThiswModal",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return t.openShareModal(
                                                                          O,
                                                                          L,
                                                                          I
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  t._m(14, !0),
                                                                  t._v(
                                                                    " Share This"
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                      t._v(" "),
                                                      o(
                                                        "div",
                                                        {
                                                          staticClass:
                                                            "col-md-6",
                                                        },
                                                        [
                                                          o(
                                                            "div",
                                                            {
                                                              staticClass:
                                                                "only-like",
                                                            },
                                                            [
                                                              o(
                                                                "a",
                                                                {
                                                                  staticClass:
                                                                    "like",
                                                                  attrs: {
                                                                    href: "javascript:void(0)",
                                                                  },
                                                                  on: {
                                                                    click:
                                                                      function (
                                                                        e
                                                                      ) {
                                                                        return t.likeAsset(
                                                                          A
                                                                        );
                                                                      },
                                                                  },
                                                                },
                                                                [
                                                                  o(
                                                                    "span",
                                                                    {
                                                                      class:
                                                                        "like_" +
                                                                        A,
                                                                    },
                                                                    [
                                                                      t._v(
                                                                        t._s(y)
                                                                      ),
                                                                    ]
                                                                  ),
                                                                  t._v(
                                                                    " Likes"
                                                                  ),
                                                                  o(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "heart",
                                                                    },
                                                                    [
                                                                      o("i", {
                                                                        staticClass:
                                                                          "fa-heart",
                                                                        class: [
                                                                          t.likedAssetList.indexOf(
                                                                            A
                                                                          ) >= 0
                                                                            ? "fas selected-heart"
                                                                            : "far  border-heart",
                                                                          "heart_" +
                                                                            A,
                                                                        ],
                                                                      }),
                                                                    ]
                                                                  ),
                                                                ]
                                                              ),
                                                            ]
                                                          ),
                                                        ]
                                                      ),
                                                    ]
                                                  ),
                                                ]
                                              ),
                                            ]
                                          ),
                                        ]
                                      );
                                    }
                                  ),
                                  0
                                ),
                                t._v(" "),
                                this.total3 > 1
                                  ? o(
                                      "div",
                                      {
                                        staticClass:
                                          "pagination-area mt-15 mb-sm-5 mb-lg-0",
                                      },
                                      [
                                        [
                                          o("sliding-pagination", {
                                            attrs: {
                                              current: t.current3,
                                              total: t.total3,
                                            },
                                            on: {
                                              "page-change": t.onPageChange3,
                                            },
                                          }),
                                        ],
                                      ],
                                      2
                                    )
                                  : t._e(),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                    t._v(" "),
                    o(
                      "div",
                      {
                        staticClass: "row d-sm-block d-md-block d-lg-none",
                        staticStyle: { "margin-top": "30px" },
                      },
                      [
                        o("div", { staticClass: "col-lg-12" }, [
                          o(
                            "div",
                            { staticClass: " primary-sidebar sticky-sidebar" },
                            [
                              o(
                                "div",
                                {
                                  staticClass:
                                    "sidebar-widget product-sidebar  mb-30 p-30 bg-grey border-radius-10",
                                },
                                [
                                  t._m(15),
                                  t._v(" "),
                                  t._l(t.newAddedListing, function (e) {
                                    var r = e.CollectionGroupId,
                                      n = e.SellOrder,
                                      c = e.AuctionOrder,
                                      l = e.AssetStatusId,
                                      d = e.URI,
                                      v = e.PreviewImageURI,
                                      h = e.ContractAddress,
                                      m = e.TokenId,
                                      _ = e.Owner,
                                      C = e.Id;
                                    return o(
                                      "div",
                                      {
                                        key: C,
                                        staticClass: "single-post clearfix",
                                      },
                                      [
                                        o(
                                          "nuxt-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: t.assetDetailsLink(r),
                                                params: {
                                                  contractAddress: h,
                                                  tokenId: m,
                                                  ownerAddress: _,
                                                },
                                              },
                                            },
                                          },
                                          [
                                            o("div", { staticClass: "image" }, [
                                              ".mp3" !=
                                                d.slice(-4).toLowerCase() &&
                                              ".mp4" !=
                                                d.slice(-4).toLowerCase()
                                                ? o("img", {
                                                    staticClass: "default-img",
                                                    attrs: {
                                                      src: v,
                                                      alt: "",
                                                      loading: "lazy",
                                                    },
                                                  })
                                                : t._e(),
                                              t._v(" "),
                                              ".mp3" ==
                                              d.slice(-4).toLowerCase()
                                                ? o("img", {
                                                    staticClass: "default-img",
                                                    attrs: {
                                                      src: "assets/img/default-img-mp3.jpg",
                                                      alt: "",
                                                    },
                                                  })
                                                : t._e(),
                                              t._v(" "),
                                              ".mp4" ==
                                              d.slice(-4).toLowerCase()
                                                ? o("video", {
                                                    staticStyle: {
                                                      "max-height": "90%",
                                                    },
                                                    attrs: {
                                                      src: t.uriWithStartTime(
                                                        d
                                                      ),
                                                      controls: "controls",
                                                      loop: "loop",
                                                      muted: "muted",
                                                    },
                                                    domProps: { muted: !0 },
                                                  })
                                                : t._e(),
                                            ]),
                                            t._v(" "),
                                            2 == l
                                              ? o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "content pt-10",
                                                  },
                                                  [
                                                    o(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "price mb-0 mt-5",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            Number(
                                                              n.Price
                                                            ).toLocaleString()
                                                          ) +
                                                            " " +
                                                            t._s(n.CurrencyCode)
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    n.PriceUSD
                                                      ? o(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "usd-price1",
                                                          },
                                                          [
                                                            t._v(
                                                              "$" +
                                                                t._s(
                                                                  Number(
                                                                    n.PriceUSD
                                                                  ).toLocaleString()
                                                                ) +
                                                                " USD"
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                )
                                              : t._e(),
                                            t._v(" "),
                                            3 == l
                                              ? o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "content pt-10",
                                                  },
                                                  [
                                                    o(
                                                      "p",
                                                      {
                                                        staticClass:
                                                          "price mb-0 mt-5",
                                                      },
                                                      [
                                                        t._v(
                                                          t._s(
                                                            Number(
                                                              null ==
                                                                c.CurrentBid
                                                                ? c.StartBid
                                                                : c.CurrentBid
                                                            ).toLocaleString()
                                                          ) +
                                                            " " +
                                                            t._s(c.CurrencyCode)
                                                        ),
                                                      ]
                                                    ),
                                                    t._v(" "),
                                                    c.BidUSD
                                                      ? o(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "usd-price",
                                                          },
                                                          [
                                                            t._v(
                                                              "$" +
                                                                t._s(
                                                                  Number(
                                                                    c.BidUSD
                                                                  ).toLocaleString()
                                                                ) +
                                                                " USD"
                                                            ),
                                                          ]
                                                        )
                                                      : t._e(),
                                                  ]
                                                )
                                              : t._e(),
                                          ]
                                        ),
                                      ],
                                      1
                                    );
                                  }),
                                ],
                                2
                              ),
                            ]
                          ),
                        ]),
                      ]
                    ),
                  ]),
                ]),
                t._v(" "),
                o("ShareAsset"),
                t._v(" "),
                o("router-view"),
                t._v(" "),
                o("ShareAsset"),
                t._v(" "),
                o("buyNFT", { ref: "buyAsset" }),
                t._v(" "),
                o("bidNFT", { ref: "bidAsset" }),
              ],
              1
            );
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "page-header breadcrumb-wrap" }, [
                r("div", { staticClass: "container" }, [
                  r("div", { staticClass: "breadcrumb" }, [
                    r("a", { attrs: { href: "/", rel: "nofollow" } }, [
                      t._v("Home"),
                    ]),
                    t._v(" "),
                    r("span"),
                    t._v(" Marketplace\n                "),
                  ]),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                { staticClass: "widget-header position-relative mb-20 pb-10" },
                [
                  r("h5", { staticClass: "widget-title mb-10" }, [
                    t._v("Fill by price"),
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "bt-1 border-color-1" }),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                {
                  staticClass: "form-floating",
                  staticStyle: { border: "1px solid #730909" },
                },
                [
                  r("input", {
                    staticClass: "form-control",
                    attrs: {
                      id: "amountFrom",
                      type: "number",
                      placeholder: "Min.",
                    },
                  }),
                  t._v(" "),
                  r("label", { attrs: { for: "floatingInputValue" } }, [
                    t._v("Min. Amount"),
                  ]),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                {
                  staticClass: "form-floating",
                  staticStyle: { border: "1px solid #730909" },
                },
                [
                  r("input", {
                    staticClass: "form-control",
                    attrs: {
                      id: "amountTo",
                      type: "number",
                      placeholder: "Max.",
                    },
                  }),
                  t._v(" "),
                  r("label", { attrs: { for: "floatingInputValue" } }, [
                    t._v("Max. Amount"),
                  ]),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                { staticClass: "widget-header position-relative mb-20 pb-10" },
                [
                  r("h5", { staticClass: "widget-title mb-10" }, [
                    t._v("New products"),
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "bt-1 border-color-1" }),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "tab-header" }, [
                r(
                  "ul",
                  {
                    staticClass: "nav nav-tabs marketplace-tab",
                    attrs: { id: "marketplace-tab", role: "tablist" },
                  },
                  [
                    r(
                      "li",
                      {
                        staticClass: "nav-item",
                        attrs: { role: "presentation" },
                      },
                      [
                        r(
                          "button",
                          {
                            staticClass: "nav-link active marketplace-nav-tab",
                            attrs: {
                              id: "marketplace-nav-tab",
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#tab-one",
                              type: "button",
                              role: "tab",
                              "aria-controls": "tab-one",
                              "aria-selected": "true",
                            },
                          },
                          [
                            r("div", { attrs: { id: "blinkdiv2" } }, [
                              r("i", { staticClass: "fas fa-tag" }),
                              t._v(" Sales"),
                            ]),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    r(
                      "li",
                      {
                        staticClass: "nav-item",
                        attrs: { role: "presentation" },
                      },
                      [
                        r(
                          "button",
                          {
                            staticClass: "nav-link ",
                            attrs: {
                              id: "nav-tab-two",
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#tab-two",
                              type: "button",
                              role: "tab",
                              "aria-controls": "tab-two",
                              "aria-selected": "false",
                            },
                          },
                          [
                            r(
                              "div",
                              {
                                staticClass: "blink",
                                attrs: { id: "blinkdiv" },
                              },
                              [
                                r("i", { staticClass: "fas fa-gavel" }),
                                t._v(" Auction"),
                              ]
                            ),
                          ]
                        ),
                      ]
                    ),
                    t._v(" "),
                    r(
                      "li",
                      {
                        staticClass: "nav-item",
                        attrs: { role: "presentation" },
                      },
                      [
                        r(
                          "button",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              id: "marketplace-nav-tab",
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#tab-three",
                              type: "button",
                              role: "tab",
                              "aria-controls": "tab-three",
                              "aria-selected": "true",
                            },
                          },
                          [
                            r("div", { attrs: { id: "blinkdiv2" } }, [
                              r("i", { staticClass: "fas fa-clock" }),
                              t._v(" Coming Soon Auction"),
                            ]),
                          ]
                        ),
                      ]
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
                "div",
                { staticClass: "sort-by-product-wrap sort-by-product-wrap" },
                [
                  r("div", { staticClass: "sort-by" }, [
                    r("span", [
                      r("i", { staticClass: "fi-rs-apps" }),
                      t._v("Show:"),
                    ]),
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                    r("span", { attrs: { id: "dropdownShowLabel_1" } }, [
                      t._v(" 50 "),
                    ]),
                    r("i", { staticClass: "fi-rs-angle-small-down" }),
                  ]),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps-sort" }),
                    t._v("Sort by:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownSortLabel_1" } }, [
                    t._v(" Popular "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "heart" }, [
                e("i", { staticClass: "fi-rr-share" }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                { staticClass: "sort-by-product-wrap sort-by-product-wrap" },
                [
                  r("div", { staticClass: "sort-by" }, [
                    r("span", [
                      r("i", { staticClass: "fi-rs-apps" }),
                      t._v("Show:"),
                    ]),
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                    r("span", { attrs: { id: "dropdownShowLabel_2" } }, [
                      t._v(" 50 "),
                    ]),
                    r("i", { staticClass: "fi-rs-angle-small-down" }),
                  ]),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps-sort" }),
                    t._v("Sort by:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownSortLabel_2" } }, [
                    t._v(" Popular "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "heart" }, [
                e("i", { staticClass: "fi-rr-share" }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                { staticClass: "sort-by-product-wrap sort-by-product-wrap" },
                [
                  r("div", { staticClass: "sort-by" }, [
                    r("span", [
                      r("i", { staticClass: "fi-rs-apps" }),
                      t._v("Show:"),
                    ]),
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                    r("span", { attrs: { id: "dropdownShowLabel_3" } }, [
                      t._v(" 50 "),
                    ]),
                    r("i", { staticClass: "fi-rs-angle-small-down" }),
                  ]),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps-sort" }),
                    t._v("Sort by:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownSortLabel_3" } }, [
                    t._v(" Start Time "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("div", { staticClass: "heart" }, [
                e("i", { staticClass: "fi-rr-share" }),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                { staticClass: "widget-header position-relative mb-20 pb-10" },
                [
                  r("h5", { staticClass: "widget-title mb-10" }, [
                    t._v("New products"),
                  ]),
                  t._v(" "),
                  r("div", { staticClass: "bt-1 border-color-1" }),
                ]
              );
            },
          ],
          !1,
          null,
          "1c344682",
          null
        );
      e.default = component.exports;
      installComponents(component, { ShareAsset: r(1188).default });
    },
  },
]);
