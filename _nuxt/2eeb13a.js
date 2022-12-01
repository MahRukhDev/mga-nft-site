(window.webpackJsonp = window.webpackJsonp || []).push([
  [31, 23],
  {
    1188: function (t, e, r) {
      "use strict";
      r.r(e);
      r(63), r(658);
      var o = r(11),
        l = r.n(o),
        n = r(218),
        c = {
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
                var o = l()(r);
                if (navigator.userAgent.match(/ipad|iphone/i)) {
                  var c = o.get(0),
                    d = c.contentEditable,
                    v = c.readOnly;
                  (c.contentEditable = "true"), (c.readOnly = "false");
                  var h = document.createRange();
                  h.selectNodeContents(c);
                  var _ = window.getSelection();
                  _.removeAllRanges(),
                    _.addRange(h),
                    c.setSelectionRange(0, 999999),
                    (c.contentEditable = d),
                    (c.readOnly = v);
                } else o.select();
                document.execCommand("copy"), document.body.removeChild(r);
              }
              Object(n.c)("Copied To Clipboard");
            },
          },
        },
        d = r(65),
        component = Object(d.a)(
          c,
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
    1197: function (t, e, r) {
      t.exports = r.p + "img/hammer_stone_2.921a9a2.png";
    },
    1234: function (t, e, r) {
      t.exports = r.p + "img/default-avatar.f2fd12a.jpg";
    },
    1246: function (t, e, r) {
      var content = r(1268);
      content.__esModule && (content = content.default),
        "string" == typeof content && (content = [[t.i, content, ""]]),
        content.locals && (t.exports = content.locals);
      (0, r(100).default)("06bcfad8", content, !0, { sourceMap: !1 });
    },
    1267: function (t, e, r) {
      "use strict";
      r(1246);
    },
    1268: function (t, e, r) {
      var o = r(99)(!1);
      o.push([
        t.i,
        "textarea,textarea:focus{background:#f4f4f4!important;border:#f4f4f4!important}textarea{min-height:100px!important}.transactionHistory{max-height:500px;overflow-y:scroll}@media only screen and (max-width:1199px) and (min-width:992px){.product-img-content .is-troop div.hammer{transform:translate(690%,-90%);font-size:.75em}.product-img-content .is-troop div.banner span{font-size:.55em}}@media only screen and (max-width:767px) and (min-width:576px){.product-img-content .is-troop div.hammer{transform:translate(690%,-90%);font-size:.75em}.product-img-content .is-troop div.banner span{font-size:.55em}}@media only screen and (max-width:575px){.product-img-action-wrap{max-height:none!important}.product-img-content{padding:6%!important;height:100%!important}}",
        "",
      ]),
        (t.exports = o);
    },
    1291: function (t, e, r) {
      "use strict";
      r.r(e);
      r(86), r(62), r(76), r(116), r(117);
      var o = r(4),
        l = r(55),
        n =
          (r(23),
          r(118),
          r(63),
          r(142),
          r(40),
          r(75),
          r(660),
          r(66),
          r(78),
          r(663),
          r(220),
          r(218)),
        c = r(30),
        d = r(173),
        v = (r(1240), r(5)),
        h = r.n(v),
        _ = r(1200);
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
      function C(t) {
        for (var i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? m(Object(source), !0).forEach(function (e) {
                Object(l.a)(t, e, source[e]);
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
      }
      var w,
        f,
        y,
        S,
        L,
        k,
        A,
        x,
        T,
        N = {
          components: {},
          mixins: [d.a],
          data: function () {
            return {
              logName: "Profile.vue | ",
              submitted: !1,
              selectedCategory1: 0,
              selectedNumberofShow1: 50,
              selectedSort1: 1,
              current1: 1,
              total1: 0,
              totalItem1: 0,
              selectedCategory2: 0,
              selectedNumberofShow2: 50,
              selectedSort2: 1,
              current2: 1,
              total2: 0,
              totalItem2: 0,
              selectedCategory3: 0,
              selectedNumberofShow3: 50,
              selectedSort3: 1,
              current3: 1,
              total3: 0,
              totalItem3: 0,
              selectedCategory4: 0,
              selectedNumberofShow4: 50,
              selectedSort4: 1,
              current4: 1,
              total4: 0,
              totalItem4: 0,
              selectedCategory5: 0,
              selectedNumberofShow5: 50,
              selectedSort5: 1,
              current5: 1,
              total5: 0,
              totalItem5: 0,
              selectedCategory6: 0,
              selectedNumberofShow6: 50,
              selectedSort6: 1,
              current6: 1,
              total6: 0,
              totalItem6: 0,
              selectedCategory7: 0,
              selectedNumberofShow7: 50,
              selectedSort7: 1,
              current7: 1,
              total7: 0,
              totalItem7: 0,
              selectedCategory8: 0,
              selectedStatus8: 0,
              selectedNumberofShow8: 50,
              selectedSort8: 1,
              current8: 1,
              total8: 0,
              totalItem8: 0,
              selectedShareItemURL: "",
              profile: {
                defaultAvatarURL: r(1234),
                avatarURLBlobURL: null,
                avatarFile: null,
                bannerURLBlobURL: null,
                bannerFile: null,
                displayName: null,
                biodata: null,
                email: null,
                phoneNumber: null,
                updateProfileAgreed: !1,
              },
            };
          },
          validations: { profile: { email: { email: _.email } } },
          watch: {
            account: function (t) {
              null != t
                ? (this.getProfile({ walletAddress: this.account }),
                  this.searchMyAsset(),
                  this.searchMySale(),
                  this.searchMySold(),
                  this.searchMyBought(),
                  this.searchHistory(),
                  this.searchMyLikedAsset(),
                  this.searchMyAuction())
                : this.$router.push({ name: "/", query: {} });
            },
          },
          computed: C(
            C(
              C(
                C(
                  C({}, Object(c.d)("category", ["categoryListing"])),
                  Object(c.d)("memberProfile", [
                    "displayName",
                    "transactionHistory",
                    "displayName",
                    "memberBannerURL",
                    "avatarURL",
                    "bioData",
                    "likedAssetList",
                    "bioData",
                    "memberId",
                    "totalBought",
                    "totalSold",
                    "assetListing",
                    "sellOrderListing",
                    "auctionOrderListing",
                    "soldAssetListing",
                    "boughtAssetListing",
                    "myLikedAssetList",
                    "email",
                    "phoneNumber",
                  ])
                ),
                Object(c.d)("web3Modal", [
                  "account",
                  "account_short",
                  "account_wallet",
                  "chainId",
                ])
              ),
              Object(c.d)("nftCollection", ["allNFTCollections"])
            ),
            {},
            {
              bioDataNewLine: function () {
                if (!this.bioData) return "";
                for (
                  var t = "" + this.bioData, e = "", i = 0;
                  i < t.length;
                  i++
                )
                  e += "\n" == t[i] ? "<br/>" : t[i];
                return e;
              },
            }
          ),
          mounted:
            ((T = Object(o.a)(
              regeneratorRuntime.mark(function t() {
                var e;
                return regeneratorRuntime.wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          null != this.account &&
                            this.getProfile({ walletAddress: this.account }),
                            (e = this),
                            setTimeout(function () {
                              e.init();
                            }, 100);
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
              return T.apply(this, arguments);
            }),
          methods: C(
            C(
              C(
                C(
                  C(
                    C(
                      C(
                        { moment: h.a },
                        Object(c.b)("category", ["getCategoryListing"])
                      ),
                      Object(c.b)("nftStore", ["getNFTStoreSelections"])
                    ),
                    Object(c.b)("nftCollection", ["getAllNFTCollection"])
                  ),
                  Object(c.b)("web3Modal", ["connect", "signMessage"])
                ),
                Object(c.b)("asset", ["like", "unlike"])
              ),
              Object(c.b)("memberProfile", [
                "GetMyTransactionHistory",
                "updateBanner",
                "updateProfile",
                "getProfile",
                "GetMyAsset",
                "GetMySoldList",
                "GetMySaleList",
                "GetMyBoughtList",
                "GetMyLikedAssetList",
                "GetMyAuctionList",
              ])
            ),
            {},
            {
              expiryDateLocal: function (t, e) {
                var r = this.utcToLocalDateTime(t);
                return h()(String(h()(r))).add(e, "seconds");
              },
              isAuctionExpired: function (t) {
                var e = !1;
                return h()().isAfter(h()(t)) && (e = !0), e;
              },
              isAuctionStarted: function (t) {
                var e = !1;
                return h()().isAfter(h()(t)) && (e = !0), e;
              },
              utcToLocalDateTime: function (t) {
                var e = h.a.utc(t).toDate();
                return h()(e).local();
              },
              assetDetailsLink: function (t, e, r, o, l) {
                return "2" == t
                  ? {
                      name: "MysteryBoxRoute",
                      params: {
                        contractAddress: r,
                        tokenId: o,
                        ownerAddress: l,
                      },
                    }
                  : {
                      name: "Asset1155",
                      params: {
                        contractAddress: r,
                        tokenId: o,
                        ownerAddress: l,
                      },
                    };
              },
              assetDetailsLinkSellOrder: function (t, e, r, o, l, n) {
                return "2" == t
                  ? {
                      name: "TotemRoute",
                      params: {
                        contractAddress: r,
                        tokenId: o,
                        ownerAddress: l,
                        sellOrderId: n,
                      },
                    }
                  : {
                      name: "Asset1155",
                      params: {
                        contractAddress: r,
                        tokenId: o,
                        ownerAddress: l,
                      },
                    };
              },
              categoryOnChange1: function (t) {
                this.selectedCategory1 = t.currentTarget.getAttribute("value");
                var e = t.currentTarget.getAttribute("text");
                0 == this.selectedCategory1
                  ? $("#dropdownCategoryLabel_1").html(" All ")
                  : $("#dropdownCategoryLabel_1").html(" " + e + " "),
                  $(".dropdownCategory_1").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showCategory_1").removeClass("show"),
                  $("#dropdownCategory_1").removeClass("show"),
                  (this.current1 = 1),
                  this.searchMyAsset();
              },
              showOnChange1: function (t) {
                (this.selectedNumberofShow1 =
                  t.currentTarget.getAttribute("value")),
                  0 == this.selectedNumberofShow1
                    ? $("#dropdownShowLabel_1").html(" All ")
                    : $("#dropdownShowLabel_1").html(
                        " " + this.selectedNumberofShow1 + " "
                      ),
                  $(".dropdownShow_1").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showcover_1").removeClass("show"),
                  $("#dropdownShow_1").removeClass("show"),
                  (this.current1 = 1),
                  this.searchMyAsset();
              },
              onPageChange1: function (t) {
                0 < t &&
                  t <= this.total1 &&
                  ((this.current1 = t), this.searchMyAsset());
              },
              searchMyAsset:
                ((x = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = 0),
                                this.current1 > 1 &&
                                  (e =
                                    (this.current1 - 1) *
                                    this.selectedNumberofShow1),
                                (t.next = 4),
                                this.GetMyAsset({
                                  walletAddress: this.account,
                                  categoryId: this.selectedCategory1,
                                  start: e,
                                  length: this.selectedNumberofShow1,
                                })
                              );
                            case 4:
                              this.assetListing.length
                                ? ((this.total1 =
                                    this.assetListing[0].TotalPage),
                                  (this.totalItem1 =
                                    this.assetListing[0].TotalRow))
                                : ((this.total1 = 0), (this.totalItem1 = 0));
                            case 5:
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
                  return x.apply(this, arguments);
                }),
              categoryOnChange2: function (t) {
                this.selectedCategory2 = t.currentTarget.getAttribute("value");
                var e = t.currentTarget.getAttribute("text");
                0 == this.selectedCategory2
                  ? $("#dropdownCategoryLabel_2").html(" All ")
                  : $("#dropdownCategoryLabel_2").html(" " + e + " "),
                  $(".dropdownCategory_2").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showCategory_2").removeClass("show"),
                  $("#dropdownCategory_2").removeClass("show"),
                  (this.current2 = 1),
                  this.searchMySale();
              },
              showOnChange2: function (t) {
                (this.selectedNumberofShow2 =
                  t.currentTarget.getAttribute("value")),
                  0 == this.selectedNumberofShow2
                    ? $("#dropdownShowLabel_2").html(" All ")
                    : $("#dropdownShowLabel_2").html(
                        " " + this.selectedNumberofShow2 + " "
                      ),
                  $(".dropdownShow_2").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showcover_2").removeClass("show"),
                  $("#dropdownShow_2").removeClass("show"),
                  (this.current2 = 1),
                  this.searchMySale();
              },
              onPageChange2: function (t) {
                0 < t &&
                  t <= this.total2 &&
                  ((this.current2 = t), this.searchMySale());
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
                  this.searchMySale();
              },
              searchMySale:
                ((A = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = 0),
                                this.current2 > 1 &&
                                  (e =
                                    (this.current2 - 1) *
                                    this.selectedNumberofShow2),
                                (t.next = 4),
                                this.GetMySaleList({
                                  walletAddress: this.account,
                                  categoryId: this.selectedCategory2,
                                  sortBy: this.selectedSort2,
                                  start: e,
                                  length: this.selectedNumberofShow2,
                                })
                              );
                            case 4:
                              this.sellOrderListing.length
                                ? ((this.total2 =
                                    this.sellOrderListing[0].TotalPage),
                                  (this.totalItem2 =
                                    this.sellOrderListing[0].TotalRow))
                                : ((this.total2 = 0), (this.totalItem2 = 0));
                            case 5:
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
                  return A.apply(this, arguments);
                }),
              showOnChange3: function (t) {
                (this.selectedNumberofShow3 =
                  t.currentTarget.getAttribute("value")),
                  0 == this.selectedNumberofShow3
                    ? $("#dropdownShowLabel_23").html(" All ")
                    : $("#dropdownShowLabel_3").html(
                        " " + this.selectedNumberofShow3 + " "
                      ),
                  $(".dropdownShow_3").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showcover_3").removeClass("show"),
                  $("#dropdownShow_3").removeClass("show"),
                  (this.current3 = 1),
                  this.searchMyAuction();
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
                  this.searchMyAuction();
              },
              onPageChange3: function (t) {
                0 < t &&
                  t <= this.total3 &&
                  ((this.current3 = t), this.searchMyAuction());
              },
              categoryOnChange4: function (t) {
                this.selectedCategory4 = t.currentTarget.getAttribute("value");
                var e = t.currentTarget.getAttribute("text");
                0 == this.selectedCategory4
                  ? $("#dropdownCategoryLabel_4").html(" All ")
                  : $("#dropdownCategoryLabel_4").html(" " + e + " "),
                  $(".dropdownCategory_4").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showCategory_4").removeClass("show"),
                  $("#dropdownCategory_4").removeClass("show"),
                  (this.current4 = 1),
                  this.searchMySold();
              },
              showOnChange4: function (t) {
                (this.selectedNumberofShow4 =
                  t.currentTarget.getAttribute("value")),
                  0 == this.selectedNumberofShow4
                    ? $("#dropdownShowLabel_4").html(" All ")
                    : $("#dropdownShowLabel_4").html(
                        " " + this.selectedNumberofShow4 + " "
                      ),
                  $(".dropdownShow_4").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showcover_4").removeClass("show"),
                  $("#dropdownShow_4").removeClass("show"),
                  (this.current4 = 1),
                  this.searchMySold();
              },
              sortbyOnChange4: function (t) {
                (this.selectedSort4 = t.currentTarget.getAttribute("value")),
                  $("#dropdownSortLabel_4").html(
                    " " + t.currentTarget.getAttribute("text") + " "
                  ),
                  $(".dropdownSort_4").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#sortcover_4").removeClass("show"),
                  $("#dropdownSort_4").removeClass("show"),
                  (this.current4 = 1),
                  this.searchMySold();
              },
              onPageChange4: function (t) {
                0 < t &&
                  t <= this.total4 &&
                  ((this.current4 = t), this.searchMySold());
              },
              searchMySold:
                ((k = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = 0),
                                this.current4 > 1 &&
                                  (e =
                                    (this.current4 - 1) *
                                    this.selectedNumberofShow4),
                                (t.next = 4),
                                this.GetMySoldList({
                                  walletAddress: this.account,
                                  categoryId: this.selectedCategory4,
                                  sortBy: this.selectedSort4,
                                  start: e,
                                  length: this.selectedNumberofShow4,
                                })
                              );
                            case 4:
                              this.soldAssetListing.length
                                ? ((this.total4 =
                                    this.soldAssetListing[0].TotalPage),
                                  (this.totalItem4 =
                                    this.soldAssetListing[0].TotalRow))
                                : ((this.total4 = 0), (this.totalItem4 = 0));
                            case 5:
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
              categoryOnChange5: function (t) {
                this.selectedCategory5 = t.currentTarget.getAttribute("value");
                var e = t.currentTarget.getAttribute("text");
                0 == this.selectedCategory5
                  ? $("#dropdownCategoryLabel_5").html(" All ")
                  : $("#dropdownCategoryLabel_5").html(" " + e + " "),
                  $(".dropdownCategory_5").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showCategory_5").removeClass("show"),
                  $("#dropdownCategory_5").removeClass("show"),
                  (this.current5 = 1),
                  this.searchMyBought();
              },
              showOnChange5: function (t) {
                (this.selectedNumberofShow5 =
                  t.currentTarget.getAttribute("value")),
                  0 == this.selectedNumberofShow5
                    ? $("#dropdownShowLabel_5").html(" All ")
                    : $("#dropdownShowLabel_5").html(
                        " " + this.selectedNumberofShow5 + " "
                      ),
                  $(".dropdownShow_5").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showcover_5").removeClass("show"),
                  $("#dropdownShow_5").removeClass("show"),
                  (this.current5 = 1),
                  this.searchMyBought();
              },
              sortbyOnChange5: function (t) {
                (this.selectedSort5 = t.currentTarget.getAttribute("value")),
                  $("#dropdownSortLabel_5").html(
                    " " + t.currentTarget.getAttribute("text") + " "
                  ),
                  $(".dropdownSort_5").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#sortcover_5").removeClass("show"),
                  $("#dropdownSort_5").removeClass("show"),
                  (this.current5 = 1),
                  this.searchMyBought();
              },
              onPageChange5: function (t) {
                0 < t &&
                  t <= this.total5 &&
                  ((this.current5 = t), this.searchMyBought());
              },
              searchMyBought:
                ((L = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = 0),
                                this.current5 > 1 &&
                                  (e =
                                    (this.current5 - 1) *
                                    this.selectedNumberofShow5),
                                (t.next = 4),
                                this.GetMyBoughtList({
                                  walletAddress: this.account,
                                  categoryId: this.selectedCategory5,
                                  sortBy: this.selectedSort5,
                                  start: e,
                                  length: this.selectedNumberofShow5,
                                })
                              );
                            case 4:
                              this.boughtAssetListing.length
                                ? ((this.total5 =
                                    this.boughtAssetListing[0].TotalPage),
                                  (this.totalItem5 =
                                    this.boughtAssetListing[0].TotalRow))
                                : ((this.total5 = 0), (this.totalItem5 = 0));
                            case 5:
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
                  return L.apply(this, arguments);
                }),
              showOnChange6: function (t) {
                (this.selectedNumberofShow6 =
                  t.currentTarget.getAttribute("value")),
                  0 == this.selectedNumberofShow6
                    ? $("#dropdownShowLabel_6").html(" All ")
                    : $("#dropdownShowLabel_6").html(
                        " " + this.selectedNumberofShow6 + " "
                      ),
                  $(".dropdownShow_6").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showcover_6").removeClass("show"),
                  $("#dropdownShow_6").removeClass("show"),
                  (this.current6 = 1),
                  this.searchHistory();
              },
              searchHistory:
                ((S = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = 0),
                                this.current6 > 1 &&
                                  (e =
                                    (this.current6 - 1) *
                                    this.selectedNumberofShow6),
                                (t.next = 4),
                                this.GetMyTransactionHistory({
                                  walletAddress: this.account,
                                  start: e,
                                  length: this.selectedNumberofShow6,
                                })
                              );
                            case 4:
                              this.transactionHistory.length
                                ? ((this.total6 =
                                    this.transactionHistory[0].TotalPage),
                                  (this.totalItem6 =
                                    this.transactionHistory[0].TotalRow))
                                : ((this.total6 = 0), (this.totalItem6 = 0));
                            case 5:
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
                  return S.apply(this, arguments);
                }),
              onPageChange6: function (t) {
                0 < t &&
                  t <= this.total6 &&
                  ((this.current6 = t), this.searchHistory());
              },
              categoryOnChange7: function (t) {
                this.selectedCategory7 = t.currentTarget.getAttribute("value");
                var e = t.currentTarget.getAttribute("text");
                0 == this.selectedCategory7
                  ? $("#dropdownCategoryLabel_7").html(" All ")
                  : $("#dropdownCategoryLabel_7").html(" " + e + " "),
                  $(".dropdownCategory_7").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showCategory_7").removeClass("show"),
                  $("#dropdownCategory_7").removeClass("show"),
                  (this.current7 = 1),
                  this.searchMyLikedAsset();
              },
              showOnChange7: function (t) {
                (this.selectedNumberofShow7 =
                  t.currentTarget.getAttribute("value")),
                  0 == this.selectedNumberofShow7
                    ? $("#dropdownShowLabel_7").html(" All ")
                    : $("#dropdownShowLabel_7").html(
                        " " + this.selectedNumberofShow7 + " "
                      ),
                  $(".dropdownShow_7").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showcover_7").removeClass("show"),
                  $("#dropdownShow_7").removeClass("show"),
                  (this.current7 = 1),
                  this.searchMyLikedAsset();
              },
              onPageChange7: function (t) {
                0 < t &&
                  t <= this.total7 &&
                  ((this.current7 = t), this.searchMyLikedAsset());
              },
              searchMyLikedAsset:
                ((y = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = 0),
                                this.current7 > 1 &&
                                  (e =
                                    (this.current7 - 1) *
                                    this.selectedNumberofShow7),
                                (t.next = 4),
                                this.GetMyLikedAssetList({
                                  walletAddress: this.account,
                                  categoryId: this.selectedCategory7,
                                  start: e,
                                  length: this.selectedNumberofShow7,
                                })
                              );
                            case 4:
                              this.myLikedAssetList.length
                                ? ((this.total7 =
                                    this.myLikedAssetList[0].TotalPage),
                                  (this.totalItem7 =
                                    this.myLikedAssetList[0].TotalRow))
                                : ((this.total7 = 0), (this.totalItem7 = 0));
                            case 5:
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
              statusOnChange8: function (t) {
                this.selectedStatus8 = t.currentTarget.getAttribute("value");
                var e = t.currentTarget.getAttribute("text");
                0 == this.selectedStatus8
                  ? $("#dropdownStatusLabel_8").html(" All ")
                  : $("#dropdownStatusLabel_8").html(" " + e + " "),
                  $(".dropdownStatus_8").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showStatus_8").removeClass("show"),
                  $("#dropdownStatus_8").removeClass("show"),
                  (this.current8 = 1),
                  this.searchMyAuction();
              },
              categoryOnChange8: function (t) {
                this.selectedCategory8 = t.currentTarget.getAttribute("value");
                var e = t.currentTarget.getAttribute("text");
                0 == this.selectedCategory8
                  ? $("#dropdownCategoryLabel_8").html(" All ")
                  : $("#dropdownCategoryLabel_8").html(" " + e + " "),
                  $(".dropdownCategory_8").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showCategory_8").removeClass("show"),
                  $("#dropdownCategory_8").removeClass("show"),
                  (this.current8 = 1),
                  this.searchMyAuction();
              },
              showOnChange8: function (t) {
                (this.selectedNumberofShow8 =
                  t.currentTarget.getAttribute("value")),
                  0 == this.selectedNumberofShow8
                    ? $("#dropdownShowLabel_8").html(" All ")
                    : $("#dropdownShowLabel_8").html(
                        " " + this.selectedNumberofShow8 + " "
                      ),
                  $(".dropdownShow_8").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#showcover_8").removeClass("show"),
                  $("#dropdownShow_8").removeClass("show"),
                  (this.current8 = 1),
                  this.searchMyAuction();
              },
              onPageChange8: function (t) {
                0 < t &&
                  t <= this.total8 &&
                  ((this.current8 = t), this.searchMyAuction());
              },
              sortbyOnChange8: function (t) {
                (this.selectedSort8 = t.currentTarget.getAttribute("value")),
                  $("#dropdownSortLabel_8").html(
                    " " + t.currentTarget.getAttribute("text") + " "
                  ),
                  $(".dropdownSort_8").removeClass("active"),
                  $("#" + t.currentTarget.id).addClass("active"),
                  $("#sortcover_8").removeClass("show"),
                  $("#dropdownSort_8").removeClass("show"),
                  (this.current8 = 1),
                  this.searchMyAuction();
              },
              searchMyAuction:
                ((f = Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    var e;
                    return regeneratorRuntime.wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (e = 0),
                                this.current8 > 1 &&
                                  (e =
                                    (this.current8 - 1) *
                                    this.selectedNumberofShow8),
                                (t.next = 4),
                                this.GetMyAuctionList({
                                  walletAddress: this.account,
                                  categoryId: this.selectedCategory8,
                                  sortBy: this.selectedSort8,
                                  auctionFilter: this.selectedStatus8,
                                  start: e,
                                  length: this.selectedNumberofShow8,
                                })
                              );
                            case 4:
                              this.auctionOrderListing.length
                                ? ((this.total8 =
                                    this.auctionOrderListing[0].TotalPage),
                                  (this.totalItem8 =
                                    this.auctionOrderListing[0].TotalRow))
                                : ((this.total8 = 0), (this.totalItem8 = 0));
                            case 5:
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
              editProfile: function () {
                (this.profile.displayName = this.displayName),
                  (this.profile.biodata = this.bioData),
                  (this.profile.email = this.email),
                  (this.profile.phoneNumber = this.phoneNumber),
                  (this.profile.avatarURLBlobURL = null),
                  (this.profile.bannerURLBlobURL = null),
                  null != this.bioData
                    ? $("#txtBio").val(this.bioData.replace("<br/>", "\n"))
                    : $("#txtBio").val(null);
              },
              openShareModal: function (t, e, r, o, l) {
                var n = "";
                1 == o
                  ? (n =
                      "https://social.stoneagenft.com/asset/" +
                      t +
                      "/" +
                      e +
                      "/" +
                      r)
                  : 2 == o &&
                    (n =
                      "https://social.stoneagenft.com/totem/" +
                      t +
                      "/" +
                      e +
                      "/" +
                      r +
                      "/" +
                      l),
                  (this.selectedShareItemURL = n);
              },
              likeAsset:
                ((w = Object(o.a)(
                  regeneratorRuntime.mark(function t(e) {
                    var r,
                      o,
                      l,
                      n,
                      c,
                      d = this;
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
                              t.next = 13;
                              break;
                            case 5:
                              (r = this.memberId),
                                (o = $(".heart_" + e)),
                                (l = $(".like_" + e)),
                                (n = parseInt($(l[0]).html())),
                                o.hasClass("fas")
                                  ? (this.unlike({ assetId: e, memberId: r }),
                                    o.removeClass("fas").addClass("far"),
                                    (n -= 1),
                                    this.likedAssetList.forEach(function (
                                      t,
                                      r
                                    ) {
                                      t === e && d.likedAssetList.splice(r, 1);
                                    }))
                                  : (this.like({ assetId: e, memberId: r }),
                                    o.removeClass("far").addClass("fas"),
                                    (n += 1),
                                    this.likedAssetList.push(e)),
                                (c = this),
                                l.html(n),
                                setTimeout(function () {
                                  c.searchMyLikedAsset();
                                }, 100);
                            case 13:
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
                  return w.apply(this, arguments);
                }),
              handleAvatarFileUpload: function (t) {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function r() {
                    var o;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              ((o = document.getElementById(
                                "UpdateProfileAvatarFile"
                              ).value),
                              /(\.jpg|\.jpeg|\.png|\.webp|\.gif)$/i.exec(o))
                            ) {
                              r.next = 7;
                              break;
                            }
                            return (
                              Object(n.b)(
                                "File types only supported: jpg,jpeg,png,webp,gif"
                              ),
                              (e.profile.avatarFile = null),
                              (e.$refs.file.value = null),
                              r.abrupt("return", !1)
                            );
                          case 7:
                            if (
                              ((e.profile.avatarFile = t.target.files[0]),
                              !(e.profile.avatarFile.size / 1024 / 1024 > 30))
                            ) {
                              r.next = 14;
                              break;
                            }
                            return (
                              Object(n.b)("File size exceeeded 30 MB"),
                              (e.profile.avatarFile = null),
                              (e.$refs.file.value = null),
                              r.abrupt("return", !1)
                            );
                          case 14:
                            e.profile.avatarURLBlobURL = URL.createObjectURL(
                              e.profile.avatarFile
                            );
                          case 15:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              handleBannerFileUpload: function (t) {
                var e = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function r() {
                    var o, l, c;
                    return regeneratorRuntime.wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              ((o =
                                document.getElementById(
                                  "UpdateBannerFile"
                                ).value),
                              /(\.jpg|\.jpeg|\.png|\.webp|\.gif)$/i.exec(o))
                            ) {
                              r.next = 7;
                              break;
                            }
                            return (
                              Object(n.b)(
                                "File types only supported: jpg,jpeg,png,webp,gif"
                              ),
                              (e.profile.bannerFile = null),
                              (e.$refs.file.value = null),
                              r.abrupt("return", !1)
                            );
                          case 7:
                            if (
                              ((e.profile.bannerFile = t.target.files[0]),
                              !(e.profile.bannerFile.size / 1024 / 1024 > 30))
                            ) {
                              r.next = 14;
                              break;
                            }
                            return (
                              Object(n.b)("File size exceeeded 30 MB"),
                              (e.profile.bannerFile = null),
                              (e.$refs.file.value = null),
                              r.abrupt("return", !1)
                            );
                          case 14:
                            return (
                              (l =
                                "This is just extra security that you own this wallet address " +
                                e.account),
                              (r.next = 17),
                              e.signMessage(l)
                            );
                          case 17:
                            return (
                              (c = r.sent),
                              (r.next = 20),
                              e.updateBanner({
                                walletAddress: e.account,
                                signature: c,
                                signatureMessage: l,
                                bannerFile: e.profile.bannerFile,
                              })
                            );
                          case 20:
                          case "end":
                            return r.stop();
                        }
                    }, r);
                  })
                )();
              },
              updateProfileNext: function () {
                return Object(o.a)(
                  regeneratorRuntime.mark(function t() {
                    return regeneratorRuntime.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            document
                              .getElementById("btnCloseUpdateProfile")
                              .click();
                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                  })
                )();
              },
              updateProfileProceed: function () {
                var t = this;
                return Object(o.a)(
                  regeneratorRuntime.mark(function e() {
                    var r, o;
                    return regeneratorRuntime.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((t.submitted = !0),
                              t.$v.$touch(),
                              !t.$v.$invalid)
                            ) {
                              e.next = 5;
                              break;
                            }
                            return (t.submitted = !1), e.abrupt("return", !1);
                          case 5:
                            return (
                              (r =
                                "This is just extra security that you own this wallet address " +
                                t.account),
                              (e.next = 8),
                              t.signMessage(r)
                            );
                          case 8:
                            return (
                              (o = e.sent),
                              t.$log.debug(t.logName, "message", r),
                              (e.next = 12),
                              t.updateProfile({
                                walletAddress: t.account,
                                displayName: t.profile.displayName,
                                bioData: $("#txtBio").val(),
                                email: t.profile.email,
                                phoneNumber: t.profile.phoneNumber,
                                avatarURL: null,
                                signature: o,
                                signatureMessage: r,
                                avatarFile: t.profile.avatarFile,
                                bannerFile: t.profile.bannerFile,
                              })
                            );
                          case 12:
                            return (
                              document
                                .getElementById("btnCloseUpdateProfile")
                                .click(),
                              (t.profile.avatarURLBlobURL = null),
                              (t.profile.bannerURLBlobURL = null),
                              (t.profile.updateProfileAgreed = !1),
                              (e.next = 18),
                              t.connect()
                            );
                          case 18:
                            Object(n.c)("Profile updated successfully."),
                              (t.submitted = !1);
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )();
              },
              init: function () {
                var t = $("body");
                $(".sort-by-product-area").length &&
                  ($(".sort-by-product-area").on(
                    "click",
                    ".sort-by-product-wrap",
                    function (t) {
                      $(".sort-by-cover").removeClass("show"),
                        $(".sort-by-dropdown").removeClass("show"),
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
                  t.on("click", function (t) {
                    var e = t.target;
                    $(e).parents().is(".sort-by-product-area") ||
                      ($(".sort-by-cover").removeClass("show"),
                      $(".sort-by-dropdown").removeClass("show"));
                  }));
                this.getCategoryListing(),
                  null != this.account &&
                    "" != this.account &&
                    (this.searchMyAsset(),
                    this.searchMySale(),
                    this.searchMySold(),
                    this.searchMyBought(),
                    this.searchHistory(),
                    this.searchMyLikedAsset(),
                    this.searchMyAuction());
              },
            }
          ),
        },
        M = N,
        I = (r(1267), r(65)),
        component = Object(I.a)(
          M,
          function () {
            var t = this,
              e = t.$createElement,
              o = t._self._c || e;
            return o(
              "main",
              { staticClass: "main" },
              [
                o(
                  "div",
                  {
                    staticClass: "profile-cover",
                    style: {
                      backgroundImage:
                        "url(" +
                        (t.memberBannerURL
                          ? t.memberBannerURL
                          : "assets/img/bg-personalized.jpg") +
                        ")",
                    },
                  },
                  [
                    o("div", { staticClass: "container" }, [
                      o("div", { staticClass: "edit-cover-photo" }, [
                        o("div", { staticClass: "fileupload btn btn-sm" }, [
                          o("input", {
                            ref: "file",
                            staticClass: "form-control-file",
                            attrs: {
                              type: "file",
                              id: "UpdateBannerFile",
                              name: "UpdateBannerFile",
                              accept: ".jpg,.jpeg,.png,.webp,.gif",
                            },
                            on: { change: t.handleBannerFileUpload },
                          }),
                          t._v(" "),
                          o("i", {
                            staticClass: "fa fa-camera",
                            attrs: { "aria-hidden": "true" },
                          }),
                          t._v(" Edit Cover Photo\n\n                      "),
                          o("div", { staticStyle: { "font-size": "11px" } }, [
                            t._v("(Recommended 1920 x 500)"),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                t._v(" "),
                o("section", { staticClass: "profile-info mb-50" }, [
                  t.account_short
                    ? o("div", { staticClass: "container" }, [
                        o("div", { staticClass: "white-bg-wrap my-profile" }, [
                          o("div", { staticClass: "row" }, [
                            o("div", { staticClass: "col-md-6" }, [
                              o(
                                "div",
                                { staticClass: "d-flex align-items-center" },
                                [
                                  o(
                                    "div",
                                    {
                                      staticClass:
                                        "flex-shrink-0 default-avatar",
                                    },
                                    [
                                      t.avatarURL
                                        ? o("img", {
                                            attrs: { src: t.avatarURL },
                                          })
                                        : t._e(),
                                      t._v(" "),
                                      t.avatarURL
                                        ? t._e()
                                        : o("img", {
                                            attrs: {
                                              src: t.profile.defaultAvatarURL,
                                            },
                                          }),
                                    ]
                                  ),
                                  t._v(" "),
                                  o(
                                    "div",
                                    { staticClass: "flex-grow-1 ms-3" },
                                    [
                                      t.displayName && t.displayName.length > 0
                                        ? o(
                                            "div",
                                            { staticClass: "profile-name" },
                                            [t._v(t._s(t.displayName))]
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      !t.displayName ||
                                      t.displayName.length <= 0
                                        ? o(
                                            "div",
                                            { staticClass: "profile-name" },
                                            [t._v(t._s(t.account_short))]
                                          )
                                        : t._e(),
                                      t._v(" "),
                                      o("div", {
                                        staticClass: "bio text-gray",
                                        domProps: {
                                          innerHTML: t._s(t.bioDataNewLine),
                                        },
                                      }),
                                      t._v(" "),
                                      o("div", { staticClass: "mt-10" }, [
                                        o(
                                          "a",
                                          {
                                            staticClass: "action-btn",
                                            attrs: {
                                              "aria-label": "Edit Profile",
                                              "data-bs-toggle": "modal",
                                              "data-bs-target":
                                                "#editProfileModal",
                                            },
                                            on: { click: t.editProfile },
                                          },
                                          [
                                            o(
                                              "button",
                                              { staticClass: "button btn-sm" },
                                              [t._v("Edit Profile")]
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                            t._v(" "),
                            o("div", { staticClass: "col-md-6" }, [
                              o(
                                "div",
                                { staticClass: "account-balance h-100" },
                                [
                                  o(
                                    "ul",
                                    { staticClass: "list-accountbalance" },
                                    [
                                      o("li", [
                                        o("strong", [t._v("Total Bought")]),
                                        t._v(" "),
                                        o(
                                          "span",
                                          { staticClass: "color-green" },
                                          [
                                            t._v(
                                              t._s(
                                                Number(
                                                  this.totalBought
                                                ).toLocaleString()
                                              ) + " USD"
                                            ),
                                          ]
                                        ),
                                      ]),
                                      t._v(" "),
                                      o("li", [
                                        o("strong", [t._v("Total Sold")]),
                                        t._v(" "),
                                        o(
                                          "span",
                                          { staticClass: "color-green" },
                                          [
                                            t._v(
                                              t._s(
                                                Number(
                                                  this.totalSold
                                                ).toLocaleString()
                                              ) + " USD"
                                            ),
                                          ]
                                        ),
                                      ]),
                                    ]
                                  ),
                                ]
                              ),
                            ]),
                          ]),
                        ]),
                        t._v(" "),
                        o(
                          "div",
                          {
                            staticClass:
                              "white-bg-wrap my-profile-details mt-20",
                          },
                          [
                            t._m(0),
                            t._v(" "),
                            o(
                              "div",
                              {
                                staticClass: "tab-content wow fadeIn animated",
                                attrs: { id: "myTabContent" },
                              },
                              [
                                o(
                                  "div",
                                  {
                                    staticClass: "tab-pane fade show active",
                                    attrs: {
                                      id: "tabAll",
                                      role: "tabpanel",
                                      "aria-labelledby": "tabAll",
                                    },
                                  },
                                  [
                                    o(
                                      "div",
                                      { staticClass: "shop-product-fillter" },
                                      [
                                        o("div", {
                                          staticClass: "totall-product",
                                        }),
                                        t._v(" "),
                                        o(
                                          "div",
                                          {
                                            staticClass:
                                              "sort-by-product-area sort-by-product-area",
                                          },
                                          [
                                            o(
                                              "div",
                                              {
                                                staticClass:
                                                  "sort-by-cover  mr-10",
                                                attrs: { id: "showCategory_1" },
                                              },
                                              [
                                                t._m(1),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownCategory_1",
                                                    },
                                                  },
                                                  [
                                                    o(
                                                      "ul",
                                                      [
                                                        o("li", [
                                                          o(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "dropdownFilter dropdownCategory_1 active",
                                                              attrs: {
                                                                id: "dropdownCategory1_1",
                                                                href: "#",
                                                                value: "0",
                                                                text: "ALL",
                                                              },
                                                              on: {
                                                                click:
                                                                  t.categoryOnChange1,
                                                              },
                                                            },
                                                            [t._v("ALL")]
                                                          ),
                                                        ]),
                                                        t._v(" "),
                                                        t._l(
                                                          t.categoryListing,
                                                          function (e) {
                                                            var r = e.Id,
                                                              l = e.Name;
                                                            return o(
                                                              "li",
                                                              {
                                                                key:
                                                                  "cat1_" + r,
                                                              },
                                                              [
                                                                o(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "dropdownFilter dropdownCategory_1",
                                                                    attrs: {
                                                                      id:
                                                                        "dropdownCategory1_" +
                                                                        r,
                                                                      href: "#",
                                                                      value: r,
                                                                      text: l,
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        t.categoryOnChange1,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(l)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            );
                                                          }
                                                        ),
                                                      ],
                                                      2
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
                                                  "sort-by-cover mr-10",
                                                attrs: { id: "showcover_1" },
                                              },
                                              [
                                                t._m(2),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownShow_1",
                                                    },
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
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    o(
                                      "div",
                                      { staticClass: "row product-grid-3" },
                                      t._l(t.assetListing, function (e) {
                                        var l = e.CollectionGroupId,
                                          n = e.CollectionId,
                                          c = e.SellOrderId,
                                          d = e.Id,
                                          v = e.Name,
                                          h = e.Liked,
                                          _ = e.ContractAddress,
                                          m = e.URI,
                                          C = e.PreviewImageURI,
                                          w = e.TokenId,
                                          f = e.OwnerWalletAddress,
                                          y = e.IsOnSales,
                                          S = e.Troop;
                                        return o(
                                          "div",
                                          {
                                            key: "All_" + d,
                                            staticClass:
                                              "col-lg-3 col-md-6 col-12 col-sm-6 mb-30",
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
                                                              to: t.assetDetailsLink(
                                                                l,
                                                                y,
                                                                _,
                                                                w,
                                                                f
                                                              ),
                                                            },
                                                          },
                                                          [
                                                            ".mp3" !=
                                                              m
                                                                .slice(-4)
                                                                .toLowerCase() &&
                                                            ".mp4" !=
                                                              m
                                                                .slice(-4)
                                                                .toLowerCase()
                                                              ? o(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-img-content",
                                                                  },
                                                                  [
                                                                    S
                                                                      ? o(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "inner is-troop",
                                                                            style:
                                                                              {
                                                                                backgroundImage:
                                                                                  "url('" +
                                                                                  t.getTroopBackgroundImage(
                                                                                    S
                                                                                  ) +
                                                                                  "')",
                                                                              },
                                                                          },
                                                                          [
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "troop",
                                                                                attrs:
                                                                                  {
                                                                                    src: m,
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "grade",
                                                                                attrs:
                                                                                  {
                                                                                    src: t.getGradeStoneIcon(
                                                                                      S.Type
                                                                                    ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "banner-wrapper",
                                                                              },
                                                                              [
                                                                                o(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "banner",
                                                                                  },
                                                                                  [
                                                                                    o(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "ranking-name",
                                                                                      },
                                                                                      [
                                                                                        t._v(
                                                                                          " " +
                                                                                            t._s(
                                                                                              S.RankingName
                                                                                            ) +
                                                                                            " "
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                    t._v(
                                                                                      " "
                                                                                    ),
                                                                                    o(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "character-name",
                                                                                      },
                                                                                      [
                                                                                        t._v(
                                                                                          " " +
                                                                                            t._s(
                                                                                              S.CharacterName
                                                                                            ) +
                                                                                            " "
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "mainattr",
                                                                                attrs:
                                                                                  {
                                                                                    src: t.getTroopMainAttrImg(
                                                                                      S.MainAttr
                                                                                    ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "text-right d-flex align-items-center hammer",
                                                                              },
                                                                              [
                                                                                o(
                                                                                  "img",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        src: r(
                                                                                          1197
                                                                                        ),
                                                                                      },
                                                                                  }
                                                                                ),
                                                                                t._v(
                                                                                  " "
                                                                                ),
                                                                                o(
                                                                                  "span",
                                                                                  [
                                                                                    t._v(
                                                                                      " " +
                                                                                        t._s(
                                                                                          S.MiningPower
                                                                                        ) +
                                                                                        " "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : o(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "inner",
                                                                          },
                                                                          [
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    src: C,
                                                                                    alt: "",
                                                                                    loading:
                                                                                      "lazy",
                                                                                  },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp4" ==
                                                            m
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
                                                                                  m
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
                                                            m
                                                              .slice(-4)
                                                              .toLowerCase()
                                                              ? o(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-audio-wrapper",
                                                                    staticStyle:
                                                                      {
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
                                                                                src: m,
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
                                                    y
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
                                                                staticStyle: {
                                                                  color:
                                                                    "#730909",
                                                                },
                                                              },
                                                              [t._v("On Sale")]
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
                                                    o("h2", [
                                                      o(
                                                        "a",
                                                        {
                                                          attrs: { href: "#" },
                                                        },
                                                        [
                                                          t._v(
                                                            t._s(
                                                              null == S
                                                                ? v
                                                                : S.Type.toUpperCase()
                                                            )
                                                          ),
                                                        ]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    o(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "cta mt-10",
                                                      },
                                                      [
                                                        o(
                                                          "nuxt-link",
                                                          {
                                                            staticClass:
                                                              "btn btn-outline btn-sm",
                                                            attrs: {
                                                              to: t.assetDetailsLink(
                                                                l,
                                                                y,
                                                                _,
                                                                w,
                                                                f
                                                              ),
                                                            },
                                                          },
                                                          [t._v("Details")]
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
                                                                2 != l ||
                                                                (2 == l && y)
                                                                  ? o(
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
                                                                                _,
                                                                                w,
                                                                                f,
                                                                                n,
                                                                                c
                                                                              );
                                                                            },
                                                                        },
                                                                      },
                                                                      [
                                                                        t._m(
                                                                          3,
                                                                          !0
                                                                        ),
                                                                        t._v(
                                                                          " Share This"
                                                                        ),
                                                                      ]
                                                                    )
                                                                  : t._e(),
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
                                                                            d
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
                                                                          d,
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            h
                                                                          )
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
                                                                          class:
                                                                            [
                                                                              t.likedAssetList.indexOf(
                                                                                d
                                                                              ) >=
                                                                              0
                                                                                ? "fas selected-heart"
                                                                                : "far  border-heart",
                                                                              "heart_" +
                                                                                d,
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
                                      }),
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
                                                  "page-change":
                                                    t.onPageChange1,
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
                                    staticClass: "tab-pane fade",
                                    attrs: {
                                      id: "tabMySales",
                                      role: "tabpanel",
                                      "aria-labelledby": "tabMySales",
                                    },
                                  },
                                  [
                                    o(
                                      "div",
                                      { staticClass: "shop-product-fillter" },
                                      [
                                        o("div", {
                                          staticClass: "totall-product",
                                        }),
                                        t._v(" "),
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-product-area",
                                          },
                                          [
                                            o(
                                              "div",
                                              {
                                                staticClass:
                                                  "sort-by-cover  mr-10",
                                                attrs: { id: "showCategory_2" },
                                              },
                                              [
                                                t._m(4),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownCategory_2",
                                                    },
                                                  },
                                                  [
                                                    o(
                                                      "ul",
                                                      [
                                                        o("li", [
                                                          o(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "dropdownCategory_2 active",
                                                              attrs: {
                                                                id: "dropdownCategory2_1",
                                                                href: "#",
                                                                value: "0",
                                                                text: "ALL",
                                                              },
                                                              on: {
                                                                click:
                                                                  t.categoryOnChange2,
                                                              },
                                                            },
                                                            [t._v("ALL")]
                                                          ),
                                                        ]),
                                                        t._v(" "),
                                                        t._l(
                                                          t.categoryListing,
                                                          function (e) {
                                                            var r = e.Id,
                                                              l = e.Name;
                                                            return o(
                                                              "li",
                                                              {
                                                                key:
                                                                  "cat2_" + r,
                                                              },
                                                              [
                                                                o(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "dropdownCategory_2",
                                                                    attrs: {
                                                                      id:
                                                                        "dropdownCategory2_" +
                                                                        r,
                                                                      href: "#",
                                                                      value: r,
                                                                      text: l,
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        t.categoryOnChange2,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(l)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            );
                                                          }
                                                        ),
                                                      ],
                                                      2
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
                                                  "sort-by-cover mr-10",
                                                attrs: { id: "showcover_2" },
                                              },
                                              [
                                                t._m(5),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownShow_2",
                                                    },
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
                                                t._m(6),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownSort_2",
                                                    },
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
                                      t._l(t.sellOrderListing, function (e, l) {
                                        var n = e.CollectionGroupId,
                                          c = e.CollectionId,
                                          d = e.SellOrderId,
                                          v = e.PriceUSD,
                                          h = e.AssetName,
                                          _ = e.AssetURI,
                                          m = e.PreviewImageURI,
                                          C = e.NumberofLike,
                                          w = e.StoreName,
                                          f = e.Price,
                                          y = e.Currency,
                                          S = e.AssetId,
                                          L = e.TokenId,
                                          k = e.ContractAddress,
                                          A = e.OwnerWalletAddress,
                                          x = e.StoreId,
                                          T = e.SaleAssetId,
                                          N = e.Troop;
                                        return o(
                                          "div",
                                          {
                                            key: "Sell_" + l,
                                            staticClass:
                                              "col-lg-3 col-md-6 col-12 col-sm-6 mb-30",
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
                                                              to: t.assetDetailsLinkSellOrder(
                                                                n,
                                                                !0,
                                                                k,
                                                                L,
                                                                A,
                                                                T
                                                              ),
                                                            },
                                                          },
                                                          [
                                                            ".mp3" !=
                                                              _.slice(
                                                                -4
                                                              ).toLowerCase() &&
                                                            ".mp4" !=
                                                              _.slice(
                                                                -4
                                                              ).toLowerCase()
                                                              ? o(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-img-content",
                                                                  },
                                                                  [
                                                                    N
                                                                      ? o(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "inner is-troop",
                                                                            style:
                                                                              {
                                                                                backgroundImage:
                                                                                  "url('" +
                                                                                  t.getTroopBackgroundImage(
                                                                                    N
                                                                                  ) +
                                                                                  "')",
                                                                              },
                                                                          },
                                                                          [
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "troop",
                                                                                attrs:
                                                                                  {
                                                                                    src: _,
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "grade",
                                                                                attrs:
                                                                                  {
                                                                                    src: t.getGradeStoneIcon(
                                                                                      N.Type
                                                                                    ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "banner-wrapper",
                                                                              },
                                                                              [
                                                                                o(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "banner",
                                                                                  },
                                                                                  [
                                                                                    o(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "ranking-name",
                                                                                      },
                                                                                      [
                                                                                        t._v(
                                                                                          " " +
                                                                                            t._s(
                                                                                              N.RankingName
                                                                                            ) +
                                                                                            " "
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                    t._v(
                                                                                      " "
                                                                                    ),
                                                                                    o(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "character-name",
                                                                                      },
                                                                                      [
                                                                                        t._v(
                                                                                          " " +
                                                                                            t._s(
                                                                                              N.CharacterName
                                                                                            ) +
                                                                                            " "
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "mainattr",
                                                                                attrs:
                                                                                  {
                                                                                    src: t.getTroopMainAttrImg(
                                                                                      N.MainAttr
                                                                                    ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "text-right d-flex align-items-center hammer",
                                                                              },
                                                                              [
                                                                                o(
                                                                                  "img",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        src: r(
                                                                                          1197
                                                                                        ),
                                                                                      },
                                                                                  }
                                                                                ),
                                                                                t._v(
                                                                                  " "
                                                                                ),
                                                                                o(
                                                                                  "span",
                                                                                  [
                                                                                    t._v(
                                                                                      " " +
                                                                                        t._s(
                                                                                          N.MiningPower
                                                                                        ) +
                                                                                        " "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : o(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "inner",
                                                                          },
                                                                          [
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    src: m,
                                                                                    alt: "",
                                                                                    loading:
                                                                                      "lazy",
                                                                                  },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp4" ==
                                                            _.slice(
                                                              -4
                                                            ).toLowerCase()
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
                                                                                  _
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
                                                            _.slice(
                                                              -4
                                                            ).toLowerCase()
                                                              ? o(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-audio-wrapper",
                                                                    staticStyle:
                                                                      {
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
                                                                                src: _,
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
                                                                  storeid: x,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                                     " +
                                                                t._s(w) +
                                                                "\n                                                       "
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
                                                        {
                                                          attrs: { href: "#" },
                                                        },
                                                        [t._v(t._s(h))]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    o(
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
                                                                f
                                                              ).toLocaleString()
                                                            ) +
                                                              " " +
                                                              t._s(y)
                                                          ),
                                                        ]),
                                                        t._v(" "),
                                                        o(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "old-price",
                                                            staticStyle: {
                                                              "text-decoration":
                                                                "none",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "$ " +
                                                                t._s(
                                                                  Number(
                                                                    v
                                                                  ).toLocaleString()
                                                                ) +
                                                                " USD"
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
                                                          "cta mt-10",
                                                      },
                                                      [
                                                        o(
                                                          "nuxt-link",
                                                          {
                                                            staticClass:
                                                              "btn btn-outline btn-sm",
                                                            attrs: {
                                                              to: t.assetDetailsLinkSellOrder(
                                                                n,
                                                                !0,
                                                                k,
                                                                L,
                                                                A,
                                                                T
                                                              ),
                                                            },
                                                          },
                                                          [t._v("Details")]
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
                                                                            k,
                                                                            L,
                                                                            A,
                                                                            c,
                                                                            d
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    t._m(7, !0),
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
                                                                            S
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
                                                                          S,
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            C
                                                                          )
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
                                                                          class:
                                                                            [
                                                                              t.likedAssetList.indexOf(
                                                                                S
                                                                              ) >=
                                                                              0
                                                                                ? "fas selected-heart"
                                                                                : "far  border-heart",
                                                                              "heart_" +
                                                                                S,
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
                                      }),
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
                                                  "page-change":
                                                    t.onPageChange2,
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
                                    staticClass: "tab-pane fade",
                                    attrs: {
                                      id: "tabMyAuction",
                                      role: "tabpanel",
                                      "aria-labelledby": "tabMyAuction",
                                    },
                                  },
                                  [
                                    o(
                                      "div",
                                      { staticClass: "shop-product-fillter" },
                                      [
                                        o("div", {
                                          staticClass: "totall-product",
                                        }),
                                        t._v(" "),
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-product-area",
                                          },
                                          [
                                            o(
                                              "div",
                                              {
                                                staticClass:
                                                  "sort-by-cover  mr-10",
                                                attrs: { id: "showCategory_8" },
                                              },
                                              [
                                                t._m(8),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownCategory_8",
                                                    },
                                                  },
                                                  [
                                                    o(
                                                      "ul",
                                                      [
                                                        o("li", [
                                                          o(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "dropdownCategory_8 active",
                                                              attrs: {
                                                                id: "dropdownCategory8_1",
                                                                href: "#",
                                                                value: "0",
                                                                text: "ALL",
                                                              },
                                                              on: {
                                                                click:
                                                                  t.categoryOnChange8,
                                                              },
                                                            },
                                                            [t._v("ALL")]
                                                          ),
                                                        ]),
                                                        t._v(" "),
                                                        t._l(
                                                          t.categoryListing,
                                                          function (e) {
                                                            var r = e.Id,
                                                              l = e.Name;
                                                            return o(
                                                              "li",
                                                              {
                                                                key:
                                                                  "cat8_" + r,
                                                              },
                                                              [
                                                                o(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "dropdownCategory_8",
                                                                    attrs: {
                                                                      id:
                                                                        "dropdownCategory8_" +
                                                                        r,
                                                                      href: "#",
                                                                      value: r,
                                                                      text: l,
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        t.categoryOnChange8,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(l)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            );
                                                          }
                                                        ),
                                                      ],
                                                      2
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
                                                  "sort-by-cover  mr-10",
                                                attrs: { id: "showStatus_8" },
                                              },
                                              [
                                                t._m(9),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownStatus_8",
                                                    },
                                                  },
                                                  [
                                                    o("ul", [
                                                      o("li", [
                                                        o(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "dropdownStatus_8 active",
                                                            attrs: {
                                                              id: "dropdownStatus0_8",
                                                              href: "#",
                                                              value: "0",
                                                              text: "ALL",
                                                            },
                                                            on: {
                                                              click:
                                                                t.statusOnChange8,
                                                            },
                                                          },
                                                          [t._v("ALL")]
                                                        ),
                                                      ]),
                                                      t._v(" "),
                                                      o("li", [
                                                        o(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "dropdownStatus_8",
                                                            attrs: {
                                                              id: "dropdownStatus1_8",
                                                              href: "#",
                                                              value: "1",
                                                              text: "Upcoming",
                                                            },
                                                            on: {
                                                              click:
                                                                t.statusOnChange8,
                                                            },
                                                          },
                                                          [t._v("Upcoming")]
                                                        ),
                                                      ]),
                                                      t._v(" "),
                                                      o("li", [
                                                        o(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "dropdownStatus_8",
                                                            attrs: {
                                                              id: "dropdownStatus2_8",
                                                              href: "#",
                                                              value: "2",
                                                              text: "Live",
                                                            },
                                                            on: {
                                                              click:
                                                                t.statusOnChange8,
                                                            },
                                                          },
                                                          [t._v("Live")]
                                                        ),
                                                      ]),
                                                      t._v(" "),
                                                      o("li", [
                                                        o(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "dropdownStatus_8",
                                                            attrs: {
                                                              id: "dropdownStatus3_8",
                                                              href: "#",
                                                              value: "3",
                                                              text: "Ended",
                                                            },
                                                            on: {
                                                              click:
                                                                t.statusOnChange8,
                                                            },
                                                          },
                                                          [t._v("Ended")]
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
                                                staticClass:
                                                  "sort-by-cover mr-10",
                                                attrs: { id: "showcover_8" },
                                              },
                                              [
                                                t._m(10),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownShow_8",
                                                    },
                                                  },
                                                  [
                                                    o("ul", [
                                                      o("li", [
                                                        o(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "dropdownShow_8 active",
                                                            attrs: {
                                                              id: "dropdownShow50_8",
                                                              href: "#",
                                                              value: "50",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange8,
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
                                                              "dropdownShow_8",
                                                            attrs: {
                                                              id: "dropdownShow100_8",
                                                              href: "#",
                                                              value: "100",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange8,
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
                                                              "dropdownShow_8",
                                                            attrs: {
                                                              id: "dropdownShow150_8",
                                                              href: "#",
                                                              value: "150",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange8,
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
                                                              "dropdownShow_8",
                                                            attrs: {
                                                              id: "dropdownShow200_8",
                                                              href: "#",
                                                              value: "200",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange8,
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
                                                              "dropdownShow_8",
                                                            attrs: {
                                                              id: "dropdownShowAll_8",
                                                              href: "#",
                                                              value: "0",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange8,
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
                                                attrs: { id: "sortcover_8" },
                                              },
                                              [
                                                t._m(11),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownSort_8",
                                                    },
                                                  },
                                                  [
                                                    o("ul", [
                                                      o("li", [
                                                        o(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "dropdownSort_8 active",
                                                            attrs: {
                                                              id: "dropdownSort1_8",
                                                              href: "#",
                                                              value: "1",
                                                              text: "Popular",
                                                            },
                                                            on: {
                                                              click:
                                                                t.sortbyOnChange8,
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
                                                              "dropdownSort_8",
                                                            attrs: {
                                                              id: "dropdownSort2_8",
                                                              href: "#",
                                                              value: "2",
                                                              text: "New Added",
                                                            },
                                                            on: {
                                                              click:
                                                                t.sortbyOnChange8,
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
                                                              "dropdownSort_8",
                                                            attrs: {
                                                              id: "dropdownSort3_8",
                                                              href: "#",
                                                              value: "3",
                                                              text: "Price: Low to High",
                                                            },
                                                            on: {
                                                              click:
                                                                t.sortbyOnChange8,
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
                                                              "dropdownSort_8",
                                                            attrs: {
                                                              id: "dropdownSort4_8",
                                                              href: "#",
                                                              value: "4",
                                                              text: "Price: High to Low",
                                                            },
                                                            on: {
                                                              click:
                                                                t.sortbyOnChange8,
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
                                      { staticClass: "row product-grid-8" },
                                      t._l(t.auctionOrderListing, function (e) {
                                        var l = e.Id,
                                          n = e.CollectionId,
                                          c = e.AuctionOrder,
                                          d = e.Name,
                                          v = e.URI,
                                          h = e.PreviewImageURI,
                                          _ = e.Liked,
                                          m = e.Store,
                                          C = e.AssetId,
                                          w = e.TokenId,
                                          f = e.ContractAddress,
                                          y = e.Owner,
                                          S = e.StoreId;
                                        return o(
                                          "div",
                                          {
                                            key: "Auction_" + l,
                                            staticClass:
                                              "col-lg-3 col-md-6 col-12 col-sm-6 mb-30",
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
                                                                name: "Asset1155",
                                                                params: {
                                                                  contractAddress:
                                                                    f,
                                                                  tokenId: w,
                                                                  ownerAddress:
                                                                    y,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [
                                                            ".mp3" !=
                                                              v
                                                                .slice(-4)
                                                                .toLowerCase() &&
                                                            ".mp4" !=
                                                              v
                                                                .slice(-4)
                                                                .toLowerCase()
                                                              ? o(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-img-content",
                                                                  },
                                                                  [
                                                                    t.Troop
                                                                      ? o(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "inner is-troop",
                                                                            style:
                                                                              {
                                                                                backgroundImage:
                                                                                  "url('" +
                                                                                  t.getTroopBackgroundImage(
                                                                                    t.Troop
                                                                                  ) +
                                                                                  "')",
                                                                              },
                                                                          },
                                                                          [
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "troop",
                                                                                attrs:
                                                                                  {
                                                                                    src: v,
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "grade",
                                                                                attrs:
                                                                                  {
                                                                                    src: t.getGradeStoneIcon(
                                                                                      t
                                                                                        .Troop
                                                                                        .Type
                                                                                    ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "banner-wrapper",
                                                                              },
                                                                              [
                                                                                o(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "banner",
                                                                                  },
                                                                                  [
                                                                                    o(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "ranking-name",
                                                                                      },
                                                                                      [
                                                                                        t._v(
                                                                                          " " +
                                                                                            t._s(
                                                                                              t
                                                                                                .Troop
                                                                                                .RankingName
                                                                                            ) +
                                                                                            " "
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                    t._v(
                                                                                      " "
                                                                                    ),
                                                                                    o(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "character-name",
                                                                                      },
                                                                                      [
                                                                                        t._v(
                                                                                          " " +
                                                                                            t._s(
                                                                                              t
                                                                                                .Troop
                                                                                                .CharacterName
                                                                                            ) +
                                                                                            " "
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "mainattr",
                                                                                attrs:
                                                                                  {
                                                                                    src: t.getTroopMainAttrImg(
                                                                                      t
                                                                                        .Troop
                                                                                        .MainAttr
                                                                                    ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "text-right d-flex align-items-center hammer",
                                                                              },
                                                                              [
                                                                                o(
                                                                                  "img",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        src: r(
                                                                                          1197
                                                                                        ),
                                                                                      },
                                                                                  }
                                                                                ),
                                                                                t._v(
                                                                                  " "
                                                                                ),
                                                                                o(
                                                                                  "span",
                                                                                  [
                                                                                    t._v(
                                                                                      " " +
                                                                                        t._s(
                                                                                          t
                                                                                            .Troop
                                                                                            .MiningPower
                                                                                        ) +
                                                                                        " "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : o(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "inner",
                                                                          },
                                                                          [
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    src: h,
                                                                                    alt: "",
                                                                                    loading:
                                                                                      "lazy",
                                                                                  },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp4" ==
                                                            v
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
                                                                                  v
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
                                                            v
                                                              .slice(-4)
                                                              .toLowerCase()
                                                              ? o(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-audio-wrapper",
                                                                    staticStyle:
                                                                      {
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
                                                                                src: v,
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
                                                    o(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "product-badges product-badges-position product-badges-mrg",
                                                      },
                                                      [
                                                        2 ==
                                                          c.AuctionStatusId &&
                                                        t.isAuctionStarted(
                                                          t.utcToLocalDateTime(
                                                            c.StartTimeUTC
                                                          )
                                                        ) &&
                                                        !t.isAuctionExpired(
                                                          t.expiryDateLocal(
                                                            c.StartTimeUTC,
                                                            c.DurationInSeconds
                                                          )
                                                        )
                                                          ? o(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "new",
                                                              },
                                                              [t._v("Live")]
                                                            )
                                                          : t._e(),
                                                        t._v(" "),
                                                        2 !=
                                                          c.AuctionStatusId ||
                                                        t.isAuctionStarted(
                                                          t.utcToLocalDateTime(
                                                            c.StartTimeUTC
                                                          )
                                                        ) ||
                                                        t.isAuctionExpired(
                                                          t.expiryDateLocal(
                                                            c.StartTimeUTC,
                                                            c.DurationInSeconds
                                                          )
                                                        )
                                                          ? t._e()
                                                          : o(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "best",
                                                                staticStyle: {
                                                                  color:
                                                                    "#730909",
                                                                },
                                                              },
                                                              [t._v("Upcoming")]
                                                            ),
                                                        t._v(" "),
                                                        3 ==
                                                          c.AuctionStatusId ||
                                                        4 ==
                                                          c.AuctionStatusId ||
                                                        5 ==
                                                          c.AuctionStatusId ||
                                                        t.isAuctionExpired(
                                                          t.expiryDateLocal(
                                                            c.StartTimeUTC,
                                                            c.DurationInSeconds
                                                          )
                                                        )
                                                          ? o(
                                                              "span",
                                                              {
                                                                staticClass:
                                                                  "hot",
                                                              },
                                                              [t._v("Closed")]
                                                            )
                                                          : t._e(),
                                                      ]
                                                    ),
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
                                                                  storeid: S,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                                     " +
                                                                t._s(m) +
                                                                "\n                                                       "
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
                                                        {
                                                          attrs: { href: "#" },
                                                        },
                                                        [t._v(t._s(d))]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    o(
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
                                                                  c.CurrentBid
                                                                  ? c.StartBid
                                                                  : c.CurrentBid
                                                              ).toLocaleString()
                                                            ) +
                                                              " " +
                                                              t._s(
                                                                c.CurrencyCode
                                                              )
                                                          ),
                                                        ]),
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
                                                    ),
                                                    t._v(" "),
                                                    o(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "cta mt-10",
                                                      },
                                                      [
                                                        o(
                                                          "nuxt-link",
                                                          {
                                                            staticClass:
                                                              "btn btn-outline btn-sm",
                                                            attrs: {
                                                              to: {
                                                                name: "Asset1155",
                                                                params: {
                                                                  contractAddress:
                                                                    f,
                                                                  tokenId: w,
                                                                  ownerAddress:
                                                                    y,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [t._v("Details")]
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
                                                                            f,
                                                                            w,
                                                                            y,
                                                                            n,
                                                                            null
                                                                          );
                                                                        },
                                                                    },
                                                                  },
                                                                  [
                                                                    t._m(
                                                                      12,
                                                                      !0
                                                                    ),
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
                                                                            C
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
                                                                          C,
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            _
                                                                          )
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
                                                                          class:
                                                                            [
                                                                              t.likedAssetList.indexOf(
                                                                                C
                                                                              ) >=
                                                                              0
                                                                                ? "fas selected-heart"
                                                                                : "far  border-heart",
                                                                              "heart_" +
                                                                                C,
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
                                      }),
                                      0
                                    ),
                                    t._v(" "),
                                    this.total8 > 1
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
                                                  current: t.current8,
                                                  total: t.total8,
                                                },
                                                on: {
                                                  "page-change":
                                                    t.onPageChange8,
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
                                    staticClass: "tab-pane fade",
                                    attrs: {
                                      id: "tabMySold",
                                      role: "tabpanel",
                                      "aria-labelledby": "tabMySold",
                                    },
                                  },
                                  [
                                    o(
                                      "div",
                                      { staticClass: "shop-product-fillter" },
                                      [
                                        o("div", {
                                          staticClass: "totall-product",
                                        }),
                                        t._v(" "),
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-product-area",
                                          },
                                          [
                                            o(
                                              "div",
                                              {
                                                staticClass:
                                                  "sort-by-cover  mr-10",
                                                attrs: { id: "showCategory_2" },
                                              },
                                              [
                                                t._m(13),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownCategory_4",
                                                    },
                                                  },
                                                  [
                                                    o(
                                                      "ul",
                                                      [
                                                        o("li", [
                                                          o(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "dropdownCategory_4 active",
                                                              attrs: {
                                                                id: "dropdownCategory4_1",
                                                                href: "#",
                                                                value: "0",
                                                                text: "ALL",
                                                              },
                                                              on: {
                                                                click:
                                                                  t.categoryOnChange4,
                                                              },
                                                            },
                                                            [t._v("ALL")]
                                                          ),
                                                        ]),
                                                        t._v(" "),
                                                        t._l(
                                                          t.categoryListing,
                                                          function (e) {
                                                            var r = e.Id,
                                                              l = e.Name;
                                                            return o(
                                                              "li",
                                                              {
                                                                key:
                                                                  "cat4_" + r,
                                                              },
                                                              [
                                                                o(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "dropdownCategory_4",
                                                                    attrs: {
                                                                      id:
                                                                        "dropdownCategory4_" +
                                                                        r,
                                                                      href: "#",
                                                                      value: r,
                                                                      text: l,
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        t.categoryOnChange4,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(l)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            );
                                                          }
                                                        ),
                                                      ],
                                                      2
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
                                                  "sort-by-cover mr-10",
                                                attrs: { id: "showcover_4" },
                                              },
                                              [
                                                t._m(14),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownShow_4",
                                                    },
                                                  },
                                                  [
                                                    o("ul", [
                                                      o("li", [
                                                        o(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "dropdownShow_4 active",
                                                            attrs: {
                                                              id: "dropdownShow50_4",
                                                              href: "#",
                                                              value: "50",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange4,
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
                                                              "dropdownShow_4",
                                                            attrs: {
                                                              id: "dropdownShow100_4",
                                                              href: "#",
                                                              value: "100",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange4,
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
                                                              "dropdownShow_4",
                                                            attrs: {
                                                              id: "dropdownShow150_4",
                                                              href: "#",
                                                              value: "150",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange4,
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
                                                              "dropdownShow_4",
                                                            attrs: {
                                                              id: "dropdownShow200_4",
                                                              href: "#",
                                                              value: "200",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange4,
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
                                                              "dropdownShow_4",
                                                            attrs: {
                                                              id: "dropdownShowAll_4",
                                                              href: "#",
                                                              value: "0",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange4,
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
                                                attrs: { id: "sortcover_4" },
                                              },
                                              [
                                                t._m(15),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownSort_4",
                                                    },
                                                  },
                                                  [
                                                    o("ul", [
                                                      o("li", [
                                                        o(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "dropdownSort_4 active",
                                                            attrs: {
                                                              id: "dropdownSort1_4",
                                                              href: "#",
                                                              value: "1",
                                                              text: "Popular",
                                                            },
                                                            on: {
                                                              click:
                                                                t.sortbyOnChange4,
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
                                                              "dropdownSort_4",
                                                            attrs: {
                                                              id: "dropdownSort2_4",
                                                              href: "#",
                                                              value: "2",
                                                              text: "New Added",
                                                            },
                                                            on: {
                                                              click:
                                                                t.sortbyOnChange4,
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
                                                              "dropdownSort_4",
                                                            attrs: {
                                                              id: "dropdownSort3_4",
                                                              href: "#",
                                                              value: "3",
                                                              text: "Price: Low to High",
                                                            },
                                                            on: {
                                                              click:
                                                                t.sortbyOnChange4,
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
                                                              "dropdownSort_4",
                                                            attrs: {
                                                              id: "dropdownSort4_4",
                                                              href: "#",
                                                              value: "4",
                                                              text: "Price: High to Low",
                                                            },
                                                            on: {
                                                              click:
                                                                t.sortbyOnChange4,
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
                                      t._l(t.soldAssetListing, function (e, l) {
                                        var n = e.isOnSales,
                                          c = e.CollectionGroupId,
                                          d = e.CollectionId,
                                          v = e.PriceUSD,
                                          h = e.AssetName,
                                          _ = e.AssetURI,
                                          m = e.PreviewImageURI,
                                          C = e.Currency,
                                          w = e.NumberofLike,
                                          f = e.StoreName,
                                          y = e.Price,
                                          S = e.AssetId,
                                          L = e.TokenId,
                                          k = e.ContractAddress,
                                          A = e.OwnerWalletAddress,
                                          x = e.StoreId,
                                          T = e.Troop;
                                        return o(
                                          "div",
                                          {
                                            key: "Sold_" + l,
                                            staticClass:
                                              "col-lg-3 col-md-6 col-12 col-sm-6 mb-30",
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
                                                              to: t.assetDetailsLink(
                                                                c,
                                                                n,
                                                                k,
                                                                L,
                                                                A
                                                              ),
                                                            },
                                                          },
                                                          [
                                                            ".mp3" !=
                                                              _.slice(
                                                                -4
                                                              ).toLowerCase() &&
                                                            ".mp4" !=
                                                              _.slice(
                                                                -4
                                                              ).toLowerCase()
                                                              ? o(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-img-content",
                                                                  },
                                                                  [
                                                                    T
                                                                      ? o(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "inner is-troop",
                                                                            style:
                                                                              {
                                                                                backgroundImage:
                                                                                  "url('" +
                                                                                  t.getTroopBackgroundImage(
                                                                                    T
                                                                                  ) +
                                                                                  "')",
                                                                              },
                                                                          },
                                                                          [
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "troop",
                                                                                attrs:
                                                                                  {
                                                                                    src: _,
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "grade",
                                                                                attrs:
                                                                                  {
                                                                                    src: t.getGradeStoneIcon(
                                                                                      T.Type
                                                                                    ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "banner-wrapper",
                                                                              },
                                                                              [
                                                                                o(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "banner",
                                                                                  },
                                                                                  [
                                                                                    o(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "ranking-name",
                                                                                      },
                                                                                      [
                                                                                        t._v(
                                                                                          " " +
                                                                                            t._s(
                                                                                              T.RankingName
                                                                                            ) +
                                                                                            " "
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                    t._v(
                                                                                      " "
                                                                                    ),
                                                                                    o(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "character-name",
                                                                                      },
                                                                                      [
                                                                                        t._v(
                                                                                          " " +
                                                                                            t._s(
                                                                                              T.CharacterName
                                                                                            ) +
                                                                                            " "
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "mainattr",
                                                                                attrs:
                                                                                  {
                                                                                    src: t.getTroopMainAttrImg(
                                                                                      T.MainAttr
                                                                                    ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "text-right d-flex align-items-center hammer",
                                                                              },
                                                                              [
                                                                                o(
                                                                                  "img",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        src: r(
                                                                                          1197
                                                                                        ),
                                                                                      },
                                                                                  }
                                                                                ),
                                                                                t._v(
                                                                                  " "
                                                                                ),
                                                                                o(
                                                                                  "span",
                                                                                  [
                                                                                    t._v(
                                                                                      " " +
                                                                                        t._s(
                                                                                          T.MiningPower
                                                                                        ) +
                                                                                        " "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : o(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "inner",
                                                                          },
                                                                          [
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    src: m,
                                                                                    alt: "",
                                                                                    loading:
                                                                                      "lazy",
                                                                                  },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp4" ==
                                                            _.slice(
                                                              -4
                                                            ).toLowerCase()
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
                                                                                  _
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
                                                            _.slice(
                                                              -4
                                                            ).toLowerCase()
                                                              ? o(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-audio-wrapper",
                                                                    staticStyle:
                                                                      {
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
                                                                                src: _,
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
                                                                  storeid: x,
                                                                },
                                                              },
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "\n                                                     " +
                                                                t._s(f) +
                                                                "\n                                                       "
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
                                                        {
                                                          attrs: { href: "#" },
                                                        },
                                                        [t._v(t._s(h))]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    o(
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
                                                                y
                                                              ).toLocaleString()
                                                            ) +
                                                              " " +
                                                              t._s(C)
                                                          ),
                                                        ]),
                                                        t._v(" "),
                                                        o(
                                                          "span",
                                                          {
                                                            staticClass:
                                                              "old-price",
                                                            staticStyle: {
                                                              "text-decoration":
                                                                "none",
                                                            },
                                                          },
                                                          [
                                                            t._v(
                                                              "$ " +
                                                                t._s(
                                                                  Number(
                                                                    v
                                                                  ).toLocaleString()
                                                                ) +
                                                                " USD"
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
                                                          "cta mt-10",
                                                      },
                                                      [
                                                        o(
                                                          "nuxt-link",
                                                          {
                                                            staticClass:
                                                              "btn btn-outline btn-sm",
                                                            attrs: {
                                                              to: t.assetDetailsLink(
                                                                c,
                                                                n,
                                                                k,
                                                                L,
                                                                A
                                                              ),
                                                            },
                                                          },
                                                          [t._v("Details")]
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
                                                                2 != c
                                                                  ? o(
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
                                                                                k,
                                                                                L,
                                                                                A,
                                                                                d,
                                                                                null
                                                                              );
                                                                            },
                                                                        },
                                                                      },
                                                                      [
                                                                        t._m(
                                                                          16,
                                                                          !0
                                                                        ),
                                                                        t._v(
                                                                          " Share This"
                                                                        ),
                                                                      ]
                                                                    )
                                                                  : t._e(),
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
                                                                            S
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
                                                                          S,
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            w
                                                                          )
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
                                                                          class:
                                                                            [
                                                                              t.likedAssetList.indexOf(
                                                                                S
                                                                              ) >=
                                                                              0
                                                                                ? "fas selected-heart"
                                                                                : "far  border-heart",
                                                                              "heart_" +
                                                                                S,
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
                                      }),
                                      0
                                    ),
                                    t._v(" "),
                                    this.total4 > 1
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
                                                  current: t.current4,
                                                  total: t.total4,
                                                },
                                                on: {
                                                  "page-change":
                                                    t.onPageChange4,
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
                                    staticClass: "tab-pane fade",
                                    attrs: {
                                      id: "tabMyBought",
                                      role: "tabpanel",
                                      "aria-labelledby": "tabMyBought",
                                    },
                                  },
                                  [
                                    o(
                                      "div",
                                      { staticClass: "shop-product-fillter" },
                                      [
                                        o("div", {
                                          staticClass: "totall-product",
                                        }),
                                        t._v(" "),
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-product-area",
                                          },
                                          [
                                            o(
                                              "div",
                                              {
                                                staticClass:
                                                  "sort-by-cover  mr-10",
                                                attrs: { id: "showCategory_5" },
                                              },
                                              [
                                                t._m(17),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownCategory_5",
                                                    },
                                                  },
                                                  [
                                                    o(
                                                      "ul",
                                                      [
                                                        o("li", [
                                                          o(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "dropdownCategory_5 active",
                                                              attrs: {
                                                                id: "dropdownCategory5_1",
                                                                href: "#",
                                                                value: "0",
                                                                text: "ALL",
                                                              },
                                                              on: {
                                                                click:
                                                                  t.categoryOnChange5,
                                                              },
                                                            },
                                                            [t._v("ALL")]
                                                          ),
                                                        ]),
                                                        t._v(" "),
                                                        t._l(
                                                          t.categoryListing,
                                                          function (e) {
                                                            var r = e.Id,
                                                              l = e.Name;
                                                            return o(
                                                              "li",
                                                              {
                                                                key:
                                                                  "cat5_" + r,
                                                              },
                                                              [
                                                                o(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "dropdownCategory_5",
                                                                    attrs: {
                                                                      id:
                                                                        "dropdownCategory5_" +
                                                                        r,
                                                                      href: "#",
                                                                      value: r,
                                                                      text: l,
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        t.categoryOnChange5,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(l)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            );
                                                          }
                                                        ),
                                                      ],
                                                      2
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
                                                  "sort-by-cover mr-10",
                                                attrs: { id: "showcover_5" },
                                              },
                                              [
                                                t._m(18),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownShow_5",
                                                    },
                                                  },
                                                  [
                                                    o("ul", [
                                                      o("li", [
                                                        o(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "dropdownShow_5 active",
                                                            attrs: {
                                                              id: "dropdownShow50_5",
                                                              href: "#",
                                                              value: "50",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange5,
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
                                                              "dropdownShow_5",
                                                            attrs: {
                                                              id: "dropdownShow100_5",
                                                              href: "#",
                                                              value: "100",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange5,
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
                                                              "dropdownShow_5",
                                                            attrs: {
                                                              id: "dropdownShow150_5",
                                                              href: "#",
                                                              value: "150",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange5,
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
                                                              "dropdownShow_5",
                                                            attrs: {
                                                              id: "dropdownShow200_5",
                                                              href: "#",
                                                              value: "200",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange5,
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
                                                              "dropdownShow_5",
                                                            attrs: {
                                                              id: "dropdownShowAll_5",
                                                              href: "#",
                                                              value: "0",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange5,
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
                                                attrs: { id: "sortcover_5" },
                                              },
                                              [
                                                t._m(19),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownSort_5",
                                                    },
                                                  },
                                                  [
                                                    o("ul", [
                                                      o("li", [
                                                        o(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "dropdownSort_5 active",
                                                            attrs: {
                                                              id: "dropdownSort1_5",
                                                              href: "#",
                                                              value: "1",
                                                              text: "Popular",
                                                            },
                                                            on: {
                                                              click:
                                                                t.sortbyOnChange5,
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
                                                              "dropdownSort_5",
                                                            attrs: {
                                                              id: "dropdownSort2_5",
                                                              href: "#",
                                                              value: "2",
                                                              text: "New Added",
                                                            },
                                                            on: {
                                                              click:
                                                                t.sortbyOnChange5,
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
                                                              "dropdownSort_5",
                                                            attrs: {
                                                              id: "dropdownSort3_5",
                                                              href: "#",
                                                              value: "3",
                                                              text: "Price: Low to High",
                                                            },
                                                            on: {
                                                              click:
                                                                t.sortbyOnChange5,
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
                                                              "dropdownSort_5",
                                                            attrs: {
                                                              id: "dropdownSort4_5",
                                                              href: "#",
                                                              value: "4",
                                                              text: "Price: High to Low",
                                                            },
                                                            on: {
                                                              click:
                                                                t.sortbyOnChange5,
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
                                        t.boughtAssetListing,
                                        function (e, l) {
                                          var n = e.IsOnSales,
                                            c = e.SellOrderId,
                                            d = e.CollectionId,
                                            v = e.CollectionGroupId,
                                            h = e.PriceUSD,
                                            _ = e.AssetName,
                                            m = e.AssetURI,
                                            C = e.PreviewImageURI,
                                            w = e.Currency,
                                            f = e.NumberofLike,
                                            y = e.StoreName,
                                            S = e.Price,
                                            L = e.AssetId,
                                            k = e.TokenId,
                                            A = e.ContractAddress,
                                            x = e.OwnerWalletAddress,
                                            T = e.StoreId,
                                            N = e.Troop;
                                          return o(
                                            "div",
                                            {
                                              key: "Bought_" + l,
                                              staticClass:
                                                "col-lg-3 col-md-6 col-12 col-sm-6 mb-30",
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
                                                                to: t.assetDetailsLink(
                                                                  v,
                                                                  n,
                                                                  A,
                                                                  k,
                                                                  x
                                                                ),
                                                              },
                                                            },
                                                            [
                                                              ".mp3" !=
                                                                m
                                                                  .slice(-4)
                                                                  .toLowerCase() &&
                                                              ".mp4" !=
                                                                m
                                                                  .slice(-4)
                                                                  .toLowerCase()
                                                                ? o(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "product-img-content",
                                                                    },
                                                                    [
                                                                      N
                                                                        ? o(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "inner is-troop",
                                                                              style:
                                                                                {
                                                                                  backgroundImage:
                                                                                    "url('" +
                                                                                    t.getTroopBackgroundImage(
                                                                                      N
                                                                                    ) +
                                                                                    "')",
                                                                                },
                                                                            },
                                                                            [
                                                                              o(
                                                                                "img",
                                                                                {
                                                                                  staticClass:
                                                                                    "troop",
                                                                                  attrs:
                                                                                    {
                                                                                      src: m,
                                                                                    },
                                                                                }
                                                                              ),
                                                                              t._v(
                                                                                " "
                                                                              ),
                                                                              o(
                                                                                "img",
                                                                                {
                                                                                  staticClass:
                                                                                    "grade",
                                                                                  attrs:
                                                                                    {
                                                                                      src: t.getGradeStoneIcon(
                                                                                        N.Type
                                                                                      ),
                                                                                    },
                                                                                }
                                                                              ),
                                                                              t._v(
                                                                                " "
                                                                              ),
                                                                              o(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "banner-wrapper",
                                                                                },
                                                                                [
                                                                                  o(
                                                                                    "div",
                                                                                    {
                                                                                      staticClass:
                                                                                        "banner",
                                                                                    },
                                                                                    [
                                                                                      o(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "ranking-name",
                                                                                        },
                                                                                        [
                                                                                          t._v(
                                                                                            " " +
                                                                                              t._s(
                                                                                                N.RankingName
                                                                                              ) +
                                                                                              " "
                                                                                          ),
                                                                                        ]
                                                                                      ),
                                                                                      t._v(
                                                                                        " "
                                                                                      ),
                                                                                      o(
                                                                                        "span",
                                                                                        {
                                                                                          staticClass:
                                                                                            "character-name",
                                                                                        },
                                                                                        [
                                                                                          t._v(
                                                                                            " " +
                                                                                              t._s(
                                                                                                N.CharacterName
                                                                                              ) +
                                                                                              " "
                                                                                          ),
                                                                                        ]
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                              t._v(
                                                                                " "
                                                                              ),
                                                                              o(
                                                                                "img",
                                                                                {
                                                                                  staticClass:
                                                                                    "mainattr",
                                                                                  attrs:
                                                                                    {
                                                                                      src: t.getTroopMainAttrImg(
                                                                                        N.MainAttr
                                                                                      ),
                                                                                    },
                                                                                }
                                                                              ),
                                                                              t._v(
                                                                                " "
                                                                              ),
                                                                              o(
                                                                                "div",
                                                                                {
                                                                                  staticClass:
                                                                                    "text-right d-flex align-items-center hammer",
                                                                                },
                                                                                [
                                                                                  o(
                                                                                    "img",
                                                                                    {
                                                                                      attrs:
                                                                                        {
                                                                                          src: r(
                                                                                            1197
                                                                                          ),
                                                                                        },
                                                                                    }
                                                                                  ),
                                                                                  t._v(
                                                                                    " "
                                                                                  ),
                                                                                  o(
                                                                                    "span",
                                                                                    [
                                                                                      t._v(
                                                                                        " " +
                                                                                          t._s(
                                                                                            N.MiningPower
                                                                                          ) +
                                                                                          " "
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                ]
                                                                              ),
                                                                            ]
                                                                          )
                                                                        : o(
                                                                            "div",
                                                                            {
                                                                              staticClass:
                                                                                "inner",
                                                                            },
                                                                            [
                                                                              o(
                                                                                "img",
                                                                                {
                                                                                  attrs:
                                                                                    {
                                                                                      src: C,
                                                                                      alt: "",
                                                                                      loading:
                                                                                        "lazy",
                                                                                    },
                                                                                }
                                                                              ),
                                                                            ]
                                                                          ),
                                                                    ]
                                                                  )
                                                                : t._e(),
                                                              t._v(" "),
                                                              ".mp4" ==
                                                              m
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
                                                                          attrs:
                                                                            {
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
                                                                                    m
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
                                                              m
                                                                .slice(-4)
                                                                .toLowerCase()
                                                                ? o(
                                                                    "div",
                                                                    {
                                                                      staticClass:
                                                                        "product-audio-wrapper",
                                                                      staticStyle:
                                                                        {
                                                                          "background-image":
                                                                            "url('assets/img/default-img-audio.jpg')",
                                                                        },
                                                                    },
                                                                    [
                                                                      o(
                                                                        "audio",
                                                                        {
                                                                          attrs:
                                                                            {
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
                                                                                  src: m,
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
                                                                    storeid: T,
                                                                  },
                                                                },
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                "\n                                                     " +
                                                                  t._s(y) +
                                                                  "\n                                                       "
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
                                                          {
                                                            attrs: {
                                                              href: "#",
                                                            },
                                                          },
                                                          [t._v(t._s(_))]
                                                        ),
                                                      ]),
                                                      t._v(" "),
                                                      o(
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
                                                                  S
                                                                ).toLocaleString()
                                                              ) +
                                                                " " +
                                                                t._s(w)
                                                            ),
                                                          ]),
                                                          t._v(" "),
                                                          o(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "old-price",
                                                              staticStyle: {
                                                                "text-decoration":
                                                                  "none",
                                                              },
                                                            },
                                                            [
                                                              t._v(
                                                                "$ " +
                                                                  t._s(
                                                                    Number(
                                                                      h
                                                                    ).toLocaleString()
                                                                  ) +
                                                                  " USD"
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
                                                            "cta mt-10",
                                                        },
                                                        [
                                                          o(
                                                            "nuxt-link",
                                                            {
                                                              staticClass:
                                                                "btn btn-outline btn-sm",
                                                              attrs: {
                                                                to: t.assetDetailsLink(
                                                                  v,
                                                                  n,
                                                                  A,
                                                                  k,
                                                                  x
                                                                ),
                                                              },
                                                            },
                                                            [t._v("Details")]
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
                                                                  2 != v
                                                                    ? o(
                                                                        "a",
                                                                        {
                                                                          staticClass:
                                                                            "share action-btn hover-up",
                                                                          attrs:
                                                                            {
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
                                                                                  A,
                                                                                  k,
                                                                                  x,
                                                                                  d,
                                                                                  c
                                                                                );
                                                                              },
                                                                          },
                                                                        },
                                                                        [
                                                                          t._m(
                                                                            20,
                                                                            !0
                                                                          ),
                                                                          t._v(
                                                                            " Share This"
                                                                          ),
                                                                        ]
                                                                      )
                                                                    : t._e(),
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
                                                                              L
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
                                                                            L,
                                                                        },
                                                                        [
                                                                          t._v(
                                                                            t._s(
                                                                              f
                                                                            )
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
                                                                          o(
                                                                            "i",
                                                                            {
                                                                              staticClass:
                                                                                "fa-heart",
                                                                              class:
                                                                                [
                                                                                  t.likedAssetList.indexOf(
                                                                                    L
                                                                                  ) >=
                                                                                  0
                                                                                    ? "fas selected-heart"
                                                                                    : "far  border-heart",
                                                                                  "heart_" +
                                                                                    L,
                                                                                ],
                                                                            }
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
                                              ),
                                            ]
                                          );
                                        }
                                      ),
                                      0
                                    ),
                                    t._v(" "),
                                    this.total5 > 1
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
                                                  current: t.current5,
                                                  total: t.total5,
                                                },
                                                on: {
                                                  "page-change":
                                                    t.onPageChange5,
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
                                    staticClass:
                                      "tab-pane fade transactionHistory",
                                    attrs: {
                                      id: "tabMyTransactionHistory",
                                      role: "tabpanel",
                                      "aria-labelledby":
                                        "tabMyTransactionHistory",
                                    },
                                  },
                                  [
                                    o(
                                      "div",
                                      { staticClass: "shop-product-fillter" },
                                      [
                                        o("div", {
                                          staticClass: "totall-product",
                                        }),
                                        t._v(" "),
                                        o(
                                          "div",
                                          {
                                            staticClass: "sort-by-product-area",
                                          },
                                          [
                                            o(
                                              "div",
                                              {
                                                staticClass:
                                                  "sort-by-cover mr-10",
                                                attrs: { id: "showcover_6" },
                                              },
                                              [
                                                t._m(21),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownShow_6",
                                                    },
                                                  },
                                                  [
                                                    o("ul", [
                                                      o("li", [
                                                        o(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "dropdownShow_6 active",
                                                            attrs: {
                                                              id: "dropdownShow50_6",
                                                              href: "#",
                                                              value: "50",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange6,
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
                                                              "dropdownShow_6",
                                                            attrs: {
                                                              id: "dropdownShow100_6",
                                                              href: "#",
                                                              value: "100",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange6,
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
                                                              "dropdownShow_6",
                                                            attrs: {
                                                              id: "dropdownShow150_6",
                                                              href: "#",
                                                              value: "150",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange6,
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
                                                              "dropdownShow_6",
                                                            attrs: {
                                                              id: "dropdownShow200_6",
                                                              href: "#",
                                                              value: "200",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange6,
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
                                                              "dropdownShow_6",
                                                            attrs: {
                                                              id: "dropdownShowAll_6",
                                                              href: "#",
                                                              value: "0",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange6,
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
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    t._l(t.transactionHistory, function (e, r) {
                                      var l = e.AssetName,
                                        n = e.Amount,
                                        c = e.MintedQuantity,
                                        d = e.TransferredQuantity,
                                        v = e.TransactionHash,
                                        h = e.TransactionHashShort,
                                        _ = e.HistoryWalletAddress,
                                        m = e.SellToWalletAddressShort,
                                        C = e.BuyFromWalletAddressShort,
                                        w = e.SellToWalletAddress,
                                        f = e.BuyFromWalletAddress,
                                        y = e.HistoryWalletAddressShort,
                                        S = e.TransactionTypeId,
                                        L = e.Currency,
                                        k = e.CreatedDate,
                                        A = e.BuyCoinHash,
                                        x = e.BuyCoinAmount,
                                        T = e.BuyCoinCurrency,
                                        N = e.SellCoinAmount,
                                        M = e.SellCoinCurrency;
                                      return o(
                                        "div",
                                        {
                                          key: "TxHistory_" + r,
                                          staticClass: "assetDetailsHistory",
                                        },
                                        [
                                          o("div", [
                                            1 == S
                                              ? o("span", [
                                                  t._v(
                                                    "\n                                                                                Minted " +
                                                      t._s(c) +
                                                      " editions " +
                                                      t._s(l) +
                                                      "\n                                                                            "
                                                  ),
                                                ])
                                              : t._e(),
                                            t._v(" "),
                                            2 == S
                                              ? o("span", [
                                                  t._v(
                                                    "\n                                                                                Sold " +
                                                      t._s(d) +
                                                      " editions " +
                                                      t._s(l) +
                                                      "\n                                                                            "
                                                  ),
                                                ])
                                              : t._e(),
                                            t._v(" "),
                                            3 == S
                                              ? o("span", [
                                                  t._v(
                                                    "\n                                                                                Selling 1 edition " +
                                                      t._s(l) +
                                                      "\n                                                                            "
                                                  ),
                                                ])
                                              : t._e(),
                                            t._v(" "),
                                            4 == S
                                              ? o("span", [
                                                  t._v(
                                                    "\n                                                                            Cancelled Sell 1 edition " +
                                                      t._s(l) +
                                                      "\n                                                                            "
                                                  ),
                                                ])
                                              : t._e(),
                                            t._v(" "),
                                            5 == S
                                              ? o("span", [
                                                  t._v(
                                                    "\n                                                                                Bid 1 edition " +
                                                      t._s(l) +
                                                      "\n                                                                            "
                                                  ),
                                                ])
                                              : t._e(),
                                            t._v(" "),
                                            6 == S
                                              ? o("span", [
                                                  t._v(
                                                    "\n                                                                                Cancelled Bid 1 edition " +
                                                      t._s(l) +
                                                      "\n                                                                            "
                                                  ),
                                                ])
                                              : t._e(),
                                            t._v(" "),
                                            0 == S
                                              ? o("span", [
                                                  t._v(
                                                    "\n                                                                                Bought " +
                                                      t._s(N) +
                                                      " " +
                                                      t._s(M) +
                                                      " ( " +
                                                      t._s(x) +
                                                      " " +
                                                      t._s(T) +
                                                      " ), transaction hash: " +
                                                      t._s(A) +
                                                      "\n                                                                            "
                                                  ),
                                                ])
                                              : t._e(),
                                            t._v(" "),
                                            t._v(
                                              "\n                                                                            on " +
                                                t._s(
                                                  t
                                                    .moment(k)
                                                    .format("YYYY-MMM-DD HH:mm")
                                                ) +
                                                "\n                                                                    "
                                            ),
                                          ]),
                                          t._v(" "),
                                          0 != S
                                            ? o("div", [
                                                2 != S
                                                  ? o(
                                                      "span",
                                                      [
                                                        t._v(
                                                          "by\n                                                                              "
                                                        ),
                                                        o(
                                                          "NuxtLink",
                                                          {
                                                            attrs: {
                                                              to:
                                                                "/Artist/" + _,
                                                            },
                                                          },
                                                          [t._v(t._s(y))]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                2 == S
                                                  ? o(
                                                      "span",
                                                      [
                                                        t._v(
                                                          "from\n                                                                              "
                                                        ),
                                                        o(
                                                          "NuxtLink",
                                                          {
                                                            attrs: {
                                                              to:
                                                                "/Artist/" + f,
                                                            },
                                                          },
                                                          [t._v(t._s(C))]
                                                        ),
                                                      ],
                                                      1
                                                    )
                                                  : t._e(),
                                                t._v(" "),
                                                !n || (3 != S && 5 != S)
                                                  ? t._e()
                                                  : o(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "float-right",
                                                      },
                                                      [
                                                        t._v(
                                                          "$" +
                                                            t._s(
                                                              Number(
                                                                n
                                                              ).toLocaleString()
                                                            ) +
                                                            " " +
                                                            t._s(L)
                                                        ),
                                                      ]
                                                    ),
                                              ])
                                            : t._e(),
                                          t._v(" "),
                                          2 == S
                                            ? o("div", [
                                                o(
                                                  "span",
                                                  [
                                                    t._v(
                                                      "to\n                                                                          "
                                                    ),
                                                    o(
                                                      "NuxtLink",
                                                      {
                                                        attrs: {
                                                          to: "/Artist/" + w,
                                                        },
                                                      },
                                                      [t._v(t._s(m))]
                                                    ),
                                                  ],
                                                  1
                                                ),
                                                t._v(" "),
                                                n && 2 == S
                                                  ? o(
                                                      "span",
                                                      {
                                                        staticClass:
                                                          "float-right",
                                                      },
                                                      [
                                                        t._v(
                                                          "$" +
                                                            t._s(
                                                              Number(
                                                                n
                                                              ).toLocaleString()
                                                            ) +
                                                            " " +
                                                            t._s(L)
                                                        ),
                                                      ]
                                                    )
                                                  : t._e(),
                                              ])
                                            : t._e(),
                                          t._v(" "),
                                          null != v && "" != v
                                            ? o(
                                                "div",
                                                [
                                                  o("span", [t._v("Hash ")]),
                                                  o(
                                                    "nuxt-link",
                                                    {
                                                      attrs: {
                                                        target: "_blank",
                                                        to: {
                                                          name: "BSCScan",
                                                          params: { txhash: v },
                                                        },
                                                      },
                                                    },
                                                    [t._v(t._s(h))]
                                                  ),
                                                ],
                                                1
                                              )
                                            : t._e(),
                                          t._v(" "),
                                          o("hr"),
                                        ]
                                      );
                                    }),
                                    t._v(" "),
                                    this.total6 > 1
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
                                                  current: t.current6,
                                                  total: t.total6,
                                                },
                                                on: {
                                                  "page-change":
                                                    t.onPageChange6,
                                                },
                                              }),
                                            ],
                                          ],
                                          2
                                        )
                                      : t._e(),
                                  ],
                                  2
                                ),
                                t._v(" "),
                                o(
                                  "div",
                                  {
                                    staticClass: "tab-pane fade",
                                    attrs: {
                                      id: "tabMyLiked",
                                      role: "tabpanel",
                                      "aria-labelledby": "tabMyLiked",
                                    },
                                  },
                                  [
                                    o(
                                      "div",
                                      { staticClass: "shop-product-fillter" },
                                      [
                                        o("div", {
                                          staticClass: "totall-product",
                                        }),
                                        t._v(" "),
                                        o(
                                          "div",
                                          {
                                            staticClass:
                                              "sort-by-product-area sort-by-product-area",
                                          },
                                          [
                                            o(
                                              "div",
                                              {
                                                staticClass:
                                                  "sort-by-cover  mr-10",
                                                attrs: { id: "showCategory_7" },
                                              },
                                              [
                                                t._m(22),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownCategory_7",
                                                    },
                                                  },
                                                  [
                                                    o(
                                                      "ul",
                                                      [
                                                        o("li", [
                                                          o(
                                                            "a",
                                                            {
                                                              staticClass:
                                                                "dropdownCategory_7 active",
                                                              attrs: {
                                                                id: "dropdownCategory7_1",
                                                                href: "#",
                                                                value: "0",
                                                                text: "ALL",
                                                              },
                                                              on: {
                                                                click:
                                                                  t.categoryOnChange7,
                                                              },
                                                            },
                                                            [t._v("ALL")]
                                                          ),
                                                        ]),
                                                        t._v(" "),
                                                        t._l(
                                                          t.categoryListing,
                                                          function (e) {
                                                            var r = e.Id,
                                                              l = e.Name;
                                                            return o(
                                                              "li",
                                                              {
                                                                key:
                                                                  "cat7_" + r,
                                                              },
                                                              [
                                                                o(
                                                                  "a",
                                                                  {
                                                                    staticClass:
                                                                      "dropdownCategory_7",
                                                                    attrs: {
                                                                      id:
                                                                        "dropdownCategory7_" +
                                                                        r,
                                                                      href: "#",
                                                                      value: r,
                                                                      text: l,
                                                                    },
                                                                    on: {
                                                                      click:
                                                                        t.categoryOnChange7,
                                                                    },
                                                                  },
                                                                  [
                                                                    t._v(
                                                                      t._s(l)
                                                                    ),
                                                                  ]
                                                                ),
                                                              ]
                                                            );
                                                          }
                                                        ),
                                                      ],
                                                      2
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
                                                  "sort-by-cover mr-10",
                                                attrs: { id: "showcover_7" },
                                              },
                                              [
                                                t._m(23),
                                                t._v(" "),
                                                o(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "sort-by-dropdown",
                                                    attrs: {
                                                      id: "dropdownShow_7",
                                                    },
                                                  },
                                                  [
                                                    o("ul", [
                                                      o("li", [
                                                        o(
                                                          "a",
                                                          {
                                                            staticClass:
                                                              "dropdownShow_7 active",
                                                            attrs: {
                                                              id: "dropdownShow50_7",
                                                              href: "#",
                                                              value: "50",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange7,
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
                                                              "dropdownShow_7",
                                                            attrs: {
                                                              id: "dropdownShow100_7",
                                                              href: "#",
                                                              value: "100",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange7,
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
                                                              "dropdownShow_7",
                                                            attrs: {
                                                              id: "dropdownShow150_7",
                                                              href: "#",
                                                              value: "150",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange7,
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
                                                              "dropdownShow_7",
                                                            attrs: {
                                                              id: "dropdownShow200_7",
                                                              href: "#",
                                                              value: "200",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange7,
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
                                                              "dropdownShow_7",
                                                            attrs: {
                                                              id: "dropdownShowAll_7",
                                                              href: "#",
                                                              value: "0",
                                                            },
                                                            on: {
                                                              click:
                                                                t.showOnChange7,
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
                                          ]
                                        ),
                                      ]
                                    ),
                                    t._v(" "),
                                    o(
                                      "div",
                                      { staticClass: "row product-grid-3" },
                                      t._l(t.myLikedAssetList, function (e) {
                                        var l = e.IsOnSales,
                                          n = e.SellOrderId,
                                          c = e.CollectionId,
                                          d = e.CollectionGroupId,
                                          v = e.Id,
                                          h = e.Name,
                                          _ = e.Liked,
                                          m = e.ContractAddress,
                                          C = e.URI,
                                          w = e.PreviewImageURI,
                                          f = e.TokenId,
                                          y = e.OwnerWalletAddress,
                                          S = e.Troop;
                                        return o(
                                          "div",
                                          {
                                            key: "Liked_" + v,
                                            staticClass:
                                              "col-lg-3 col-md-6 col-12 col-sm-6 mb-30",
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
                                                              to: t.assetDetailsLink(
                                                                d,
                                                                l,
                                                                m,
                                                                f,
                                                                y
                                                              ),
                                                            },
                                                          },
                                                          [
                                                            ".mp3" !=
                                                              C.slice(
                                                                -4
                                                              ).toLowerCase() &&
                                                            ".mp4" !=
                                                              C.slice(
                                                                -4
                                                              ).toLowerCase()
                                                              ? o(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-img-content",
                                                                  },
                                                                  [
                                                                    S
                                                                      ? o(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "inner is-troop",
                                                                            style:
                                                                              {
                                                                                backgroundImage:
                                                                                  "url('" +
                                                                                  t.getTroopBackgroundImage(
                                                                                    S
                                                                                  ) +
                                                                                  "')",
                                                                              },
                                                                          },
                                                                          [
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "troop",
                                                                                attrs:
                                                                                  {
                                                                                    src: C,
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "grade",
                                                                                attrs:
                                                                                  {
                                                                                    src: t.getGradeStoneIcon(
                                                                                      S.Type
                                                                                    ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "banner-wrapper",
                                                                              },
                                                                              [
                                                                                o(
                                                                                  "div",
                                                                                  {
                                                                                    staticClass:
                                                                                      "banner",
                                                                                  },
                                                                                  [
                                                                                    o(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "ranking-name",
                                                                                      },
                                                                                      [
                                                                                        t._v(
                                                                                          " " +
                                                                                            t._s(
                                                                                              S.RankingName
                                                                                            ) +
                                                                                            " "
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                    t._v(
                                                                                      " "
                                                                                    ),
                                                                                    o(
                                                                                      "span",
                                                                                      {
                                                                                        staticClass:
                                                                                          "character-name",
                                                                                      },
                                                                                      [
                                                                                        t._v(
                                                                                          " " +
                                                                                            t._s(
                                                                                              S.CharacterName
                                                                                            ) +
                                                                                            " "
                                                                                        ),
                                                                                      ]
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                staticClass:
                                                                                  "mainattr",
                                                                                attrs:
                                                                                  {
                                                                                    src: t.getTroopMainAttrImg(
                                                                                      S.MainAttr
                                                                                    ),
                                                                                  },
                                                                              }
                                                                            ),
                                                                            t._v(
                                                                              " "
                                                                            ),
                                                                            o(
                                                                              "div",
                                                                              {
                                                                                staticClass:
                                                                                  "text-right d-flex align-items-center hammer",
                                                                              },
                                                                              [
                                                                                o(
                                                                                  "img",
                                                                                  {
                                                                                    attrs:
                                                                                      {
                                                                                        src: r(
                                                                                          1197
                                                                                        ),
                                                                                      },
                                                                                  }
                                                                                ),
                                                                                t._v(
                                                                                  " "
                                                                                ),
                                                                                o(
                                                                                  "span",
                                                                                  [
                                                                                    t._v(
                                                                                      " " +
                                                                                        t._s(
                                                                                          S.MiningPower
                                                                                        ) +
                                                                                        " "
                                                                                    ),
                                                                                  ]
                                                                                ),
                                                                              ]
                                                                            ),
                                                                          ]
                                                                        )
                                                                      : o(
                                                                          "div",
                                                                          {
                                                                            staticClass:
                                                                              "inner",
                                                                          },
                                                                          [
                                                                            o(
                                                                              "img",
                                                                              {
                                                                                attrs:
                                                                                  {
                                                                                    src: w,
                                                                                    alt: "",
                                                                                    loading:
                                                                                      "lazy",
                                                                                  },
                                                                              }
                                                                            ),
                                                                          ]
                                                                        ),
                                                                  ]
                                                                )
                                                              : t._e(),
                                                            t._v(" "),
                                                            ".mp4" ==
                                                            C.slice(
                                                              -4
                                                            ).toLowerCase()
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
                                                                                  C
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
                                                            C.slice(
                                                              -4
                                                            ).toLowerCase()
                                                              ? o(
                                                                  "div",
                                                                  {
                                                                    staticClass:
                                                                      "product-audio-wrapper",
                                                                    staticStyle:
                                                                      {
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
                                                                                src: C,
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
                                                    o("h2", [
                                                      o(
                                                        "a",
                                                        {
                                                          attrs: { href: "#" },
                                                        },
                                                        [t._v(t._s(h))]
                                                      ),
                                                    ]),
                                                    t._v(" "),
                                                    o(
                                                      "div",
                                                      {
                                                        staticClass:
                                                          "cta mt-10",
                                                      },
                                                      [
                                                        o(
                                                          "nuxt-link",
                                                          {
                                                            staticClass:
                                                              "btn btn-outline btn-sm",
                                                            attrs: {
                                                              to: t.assetDetailsLink(
                                                                d,
                                                                !0,
                                                                m,
                                                                f,
                                                                y
                                                              ),
                                                            },
                                                          },
                                                          [t._v("Details")]
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
                                                                2 != d ||
                                                                (2 == d && l)
                                                                  ? o(
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
                                                                                m,
                                                                                f,
                                                                                y,
                                                                                c,
                                                                                n
                                                                              );
                                                                            },
                                                                        },
                                                                      },
                                                                      [
                                                                        t._m(
                                                                          24,
                                                                          !0
                                                                        ),
                                                                        t._v(
                                                                          " Share This"
                                                                        ),
                                                                      ]
                                                                    )
                                                                  : t._e(),
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
                                                                            v
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
                                                                          v,
                                                                      },
                                                                      [
                                                                        t._v(
                                                                          t._s(
                                                                            _
                                                                          )
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
                                                                          class:
                                                                            [
                                                                              t.likedAssetList.indexOf(
                                                                                v
                                                                              ) >=
                                                                              0
                                                                                ? "fas selected-heart"
                                                                                : "far  border-heart",
                                                                              "heart_" +
                                                                                v,
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
                                      }),
                                      0
                                    ),
                                    t._v(" "),
                                    this.total7 > 1
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
                                                  current: t.current7,
                                                  total: t.total7,
                                                },
                                                on: {
                                                  "page-change":
                                                    t.onPageChange7,
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
                          ]
                        ),
                      ])
                    : t._e(),
                ]),
                t._v(" "),
                o(
                  "div",
                  {
                    staticClass: "modal fade custom-modal popup",
                    attrs: {
                      id: "editProfileModal",
                      tabindex: "-1",
                      "aria-labelledby": "editProfileModalLabel",
                      "aria-hidden": "true",
                    },
                  },
                  [
                    o(
                      "div",
                      {
                        staticClass: "modal-dialog modal-lg",
                        staticStyle: { "max-width": "500px !important" },
                      },
                      [
                        o("div", { staticClass: "modal-content" }, [
                          o("button", {
                            staticClass: "btn-close",
                            attrs: {
                              type: "button",
                              id: "btnCloseUpdateProfile",
                              "data-bs-dismiss": "modal",
                              "aria-label": "Close",
                            },
                          }),
                          t._v(" "),
                          o("div", { staticClass: "modal-body" }, [
                            o("h5", { staticClass: "section-title style-1" }, [
                              t._v("Edit Profile"),
                            ]),
                            t._v(" "),
                            o("div", { staticClass: "row" }, [
                              o("div", { staticClass: "col-12 mt-30" }, [
                                o(
                                  "div",
                                  { staticClass: "d-flex align-items-center" },
                                  [
                                    o(
                                      "div",
                                      {
                                        staticClass:
                                          "flex-shrink-0 default-avatar",
                                      },
                                      [
                                        t.profile.avatarURLBlobURL
                                          ? o("img", {
                                              staticStyle: { width: "100px" },
                                              attrs: {
                                                src: t.profile.avatarURLBlobURL,
                                              },
                                            })
                                          : t._e(),
                                        t._v(" "),
                                        !t.profile.avatarURLBlobURL &&
                                        t.avatarURL
                                          ? o("img", {
                                              staticStyle: { width: "100px" },
                                              attrs: { src: t.avatarURL },
                                            })
                                          : t._e(),
                                        t._v(" "),
                                        t.profile.avatarURLBlobURL ||
                                        t.avatarURL
                                          ? t._e()
                                          : o("img", {
                                              staticStyle: { width: "100px" },
                                              attrs: {
                                                src: t.profile.defaultAvatarURL,
                                              },
                                            }),
                                      ]
                                    ),
                                    t._v(" "),
                                    o(
                                      "div",
                                      { staticClass: "flex-grow-1 ms-3" },
                                      [
                                        t._m(25),
                                        t._v(" "),
                                        o("div", { staticClass: "mt-10" }, [
                                          o(
                                            "div",
                                            {
                                              staticClass:
                                                "fileupload btn btn-sm",
                                            },
                                            [
                                              o("input", {
                                                ref: "file",
                                                staticClass:
                                                  "form-control-file",
                                                attrs: {
                                                  type: "file",
                                                  id: "UpdateProfileAvatarFile",
                                                  name: "UpdateProfileAvatarFile",
                                                  accept:
                                                    ".jpg,.jpeg,.png,.webp,.gif",
                                                },
                                                on: {
                                                  change:
                                                    t.handleAvatarFileUpload,
                                                },
                                              }),
                                              t._v(
                                                "\n                                    Choose File\n                                    "
                                              ),
                                            ]
                                          ),
                                        ]),
                                      ]
                                    ),
                                  ]
                                ),
                                t._v(" "),
                                o(
                                  "div",
                                  {
                                    staticClass: "mt-3 form-group",
                                    staticStyle: { "text-align": "left" },
                                  },
                                  [
                                    o("h5", { staticClass: "b" }, [
                                      t._v(" Display Name "),
                                    ]),
                                    t._v(" "),
                                    o("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.profile.displayName,
                                          expression: "profile.displayName",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Enter your display name",
                                        maxlength: "100",
                                      },
                                      domProps: {
                                        value: t.profile.displayName,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.profile,
                                              "displayName",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    o("small", { staticClass: "t-gray" }, [
                                      t._v(
                                        " Only use letters, numbers, underscores and emojis "
                                      ),
                                    ]),
                                  ]
                                ),
                                t._v(" "),
                                o(
                                  "div",
                                  {
                                    staticClass: "mt-3 form-group",
                                    staticStyle: { "text-align": "left" },
                                  },
                                  [
                                    o("h5", { staticClass: "b" }, [
                                      t._v(" Email "),
                                    ]),
                                    t._v(" "),
                                    o("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.profile.email,
                                          expression: "profile.email",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder: "Enter your email",
                                        maxlength: "100",
                                      },
                                      domProps: { value: t.profile.email },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.profile,
                                              "email",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    t.$v.profile.email.$error
                                      ? o(
                                          "small",
                                          { staticStyle: { color: "red" } },
                                          [
                                            t._v(
                                              " Please enter valid email address "
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
                                    staticClass: "mt-3 form-group",
                                    staticStyle: { "text-align": "left" },
                                  },
                                  [
                                    o("h5", { staticClass: "b" }, [
                                      t._v(" Contact Number "),
                                    ]),
                                    t._v(" "),
                                    o("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.profile.phoneNumber,
                                          expression: "profile.phoneNumber",
                                        },
                                      ],
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "text",
                                        placeholder:
                                          "Enter your contact number",
                                        maxlength: "100",
                                      },
                                      domProps: {
                                        value: t.profile.phoneNumber,
                                      },
                                      on: {
                                        input: function (e) {
                                          e.target.composing ||
                                            t.$set(
                                              t.profile,
                                              "phoneNumber",
                                              e.target.value
                                            );
                                        },
                                      },
                                    }),
                                  ]
                                ),
                                t._v(" "),
                                t._m(26),
                                t._v(" "),
                                o(
                                  "div",
                                  { staticClass: "mt-3 tac form-group" },
                                  [
                                    o(
                                      "button",
                                      {
                                        staticClass:
                                          "btn btn-primary btn-round",
                                        staticStyle: {
                                          background: "#ffb300",
                                          color: "black",
                                          border: "1px solid #ffb300",
                                        },
                                        on: { click: t.updateProfileProceed },
                                      },
                                      [t._v(" Update ")]
                                    ),
                                  ]
                                ),
                              ]),
                            ]),
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
                    staticClass: "modal fade custom-modal popup",
                    attrs: {
                      id: "updateProfileTnCModal",
                      tabindex: "-1",
                      "aria-labelledby": "updateProfileTnCModalLabel",
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
                            id: "btn-close-tncupdateProfile",
                            "data-bs-dismiss": "modal",
                            "aria-label": "Close",
                          },
                        }),
                        t._v(" "),
                        o("div", { staticClass: "modal-body" }, [
                          o("h5", { staticClass: "section-title style-1" }, [
                            t._v("Mastermind NFT Terms of Service"),
                          ]),
                          t._v(" "),
                          o("div", { staticClass: "row text-center" }, [
                            o("div", { staticClass: "col-12 mt-30" }, [
                              o("div", { staticClass: "p-1" }, [
                                t._m(27),
                                t._v(" "),
                                o("div", { staticClass: "mt-4" }, [
                                  o("div", { staticClass: "mb-2 form-check" }, [
                                    o("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: t.profile.updateProfileAgreed,
                                          expression:
                                            "profile.updateProfileAgreed",
                                        },
                                      ],
                                      staticClass: "form-check-input",
                                      attrs: {
                                        type: "checkbox",
                                        id: "chkAccept",
                                      },
                                      domProps: {
                                        checked: Array.isArray(
                                          t.profile.updateProfileAgreed
                                        )
                                          ? t._i(
                                              t.profile.updateProfileAgreed,
                                              null
                                            ) > -1
                                          : t.profile.updateProfileAgreed,
                                      },
                                      on: {
                                        change: function (e) {
                                          var r = t.profile.updateProfileAgreed,
                                            o = e.target,
                                            l = !!o.checked;
                                          if (Array.isArray(r)) {
                                            var n = t._i(r, null);
                                            o.checked
                                              ? n < 0 &&
                                                t.$set(
                                                  t.profile,
                                                  "updateProfileAgreed",
                                                  r.concat([null])
                                                )
                                              : n > -1 &&
                                                t.$set(
                                                  t.profile,
                                                  "updateProfileAgreed",
                                                  r
                                                    .slice(0, n)
                                                    .concat(r.slice(n + 1))
                                                );
                                          } else
                                            t.$set(
                                              t.profile,
                                              "updateProfileAgreed",
                                              l
                                            );
                                        },
                                      },
                                    }),
                                    t._v(" "),
                                    o(
                                      "label",
                                      {
                                        staticClass: "form-check-label",
                                        attrs: { for: "chkAccept" },
                                      },
                                      [
                                        t._v(
                                          " I accept the Mastermind NFT Terms of Service "
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]),
                                t._v(" "),
                                o("div", { staticClass: "mt-3 tac" }, [
                                  o(
                                    "button",
                                    {
                                      staticClass: "btn btn-primary btn-round",
                                      staticStyle: {
                                        background: "#ffb300",
                                        color: "black",
                                        border: "1px solid #ffb300",
                                      },
                                      attrs: {
                                        disabled:
                                          !t.profile.updateProfileAgreed,
                                      },
                                      on: { click: t.updateProfileProceed },
                                    },
                                    [t._v(" Proceed ")]
                                  ),
                                ]),
                              ]),
                            ]),
                          ]),
                        ]),
                      ]),
                    ]),
                  ]
                ),
                t._v(" "),
                o("ShareAsset"),
                t._v(" "),
                o("router-view"),
                t._v(" "),
                o("ShareAsset"),
              ],
              1
            );
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "tab-header" }, [
                r(
                  "ul",
                  {
                    staticClass: "nav nav-tabs mb-0",
                    attrs: { id: "myTab", role: "tablist" },
                  },
                  [
                    r(
                      "li",
                      {
                        staticClass: "nav-item",
                        staticStyle: { "margin-bottom": "10px" },
                        attrs: { role: "presentation" },
                      },
                      [
                        r(
                          "button",
                          {
                            staticClass: "nav-link active",
                            attrs: {
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#tabAll",
                              type: "button",
                              role: "tab",
                              "aria-controls": "tab-one",
                              "aria-selected": "true",
                            },
                          },
                          [t._v("All")]
                        ),
                      ]
                    ),
                    t._v(" "),
                    r(
                      "li",
                      {
                        staticClass: "nav-item",
                        staticStyle: { "margin-bottom": "10px" },
                        attrs: { role: "presentation" },
                      },
                      [
                        r(
                          "button",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#tabMySales",
                              type: "button",
                              role: "tab",
                              "aria-controls": "tab-two",
                              "aria-selected": "true",
                            },
                          },
                          [t._v("My Sells")]
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
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#tabMyAuction",
                              type: "button",
                              role: "tab",
                              "aria-controls": "tab-two",
                              "aria-selected": "false",
                            },
                          },
                          [t._v("My Auctions")]
                        ),
                      ]
                    ),
                    t._v(" "),
                    r(
                      "li",
                      {
                        staticClass: "nav-item",
                        staticStyle: { "margin-bottom": "10px" },
                        attrs: { role: "presentation" },
                      },
                      [
                        r(
                          "button",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#tabMySold",
                              type: "button",
                              role: "tab",
                              "aria-controls": "tab-three",
                              "aria-selected": "false",
                            },
                          },
                          [t._v("Sold")]
                        ),
                      ]
                    ),
                    t._v(" "),
                    r(
                      "li",
                      {
                        staticClass: "nav-item",
                        staticStyle: { "margin-bottom": "10px" },
                        attrs: { role: "presentation" },
                      },
                      [
                        r(
                          "button",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#tabMyBought",
                              type: "button",
                              role: "tab",
                              "aria-controls": "tab-four",
                              "aria-selected": "false",
                            },
                          },
                          [t._v("Bought")]
                        ),
                      ]
                    ),
                    t._v(" "),
                    r(
                      "li",
                      {
                        staticClass: "nav-item",
                        staticStyle: { "margin-bottom": "10px" },
                        attrs: { role: "presentation" },
                      },
                      [
                        r(
                          "button",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#tabMyLiked",
                              type: "button",
                              role: "tab",
                              "aria-controls": "tab-four",
                              "aria-selected": "false",
                            },
                          },
                          [t._v("Liked")]
                        ),
                      ]
                    ),
                    t._v(" "),
                    r(
                      "li",
                      {
                        staticClass: "nav-item",
                        staticStyle: { "margin-bottom": "10px" },
                        attrs: { role: "presentation" },
                      },
                      [
                        r(
                          "button",
                          {
                            staticClass: "nav-link",
                            attrs: {
                              "data-bs-toggle": "tab",
                              "data-bs-target": "#tabMyTransactionHistory",
                              type: "button",
                              role: "tab",
                              "aria-controls": "tab-fice",
                              "aria-selected": "false",
                            },
                          },
                          [t._v("Transaction History")]
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
              return r("div", { staticClass: "sort-by-product-wrap mb-10" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Category:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownCategoryLabel_1" } }, [
                    t._v(" All "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
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
              return r("div", { staticClass: "sort-by-product-wrap mb-10" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Category:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownCategoryLabel_2" } }, [
                    t._v(" All "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap  mb-10" }, [
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
              ]);
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
              return r("div", { staticClass: "sort-by-product-wrap mb-10" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Category:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownCategoryLabel_8" } }, [
                    t._v(" All "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap mb-10" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Status:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownStatusLabel_8" } }, [
                    t._v(" All "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap mb-10" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Show:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownShowLabel_8" } }, [
                    t._v(" 50 "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
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
                  r("span", { attrs: { id: "dropdownSortLabel_8" } }, [
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
              return r("div", { staticClass: "sort-by-product-wrap mb-10" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Category:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownCategoryLabel_4" } }, [
                    t._v(" All "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap mb-10" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Show:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownShowLabel_4" } }, [
                    t._v(" 50 "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
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
                  r("span", { attrs: { id: "dropdownSortLabel_4" } }, [
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
              return r("div", { staticClass: "sort-by-product-wrap mb-10" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Category:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownCategoryLabel_5" } }, [
                    t._v(" All "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap mb-10" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Show:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownShowLabel_5" } }, [
                    t._v(" 50 "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
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
                  r("span", { attrs: { id: "dropdownSortLabel_5" } }, [
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
              return r("div", { staticClass: "sort-by-product-wrap" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Show:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownShowLabel_6" } }, [
                    t._v(" 50 "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "sort-by-product-wrap mb-10" }, [
                r("div", { staticClass: "sort-by" }, [
                  r("span", [
                    r("i", { staticClass: "fi-rs-apps" }),
                    t._v("Category:"),
                  ]),
                ]),
                t._v(" "),
                r("div", { staticClass: "sort-by-dropdown-wrap" }, [
                  r("span", { attrs: { id: "dropdownCategoryLabel_7" } }, [
                    t._v(" All "),
                  ]),
                  r("i", { staticClass: "fi-rs-angle-small-down" }),
                ]),
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
                    r("span", { attrs: { id: "dropdownShowLabel_7" } }, [
                      t._v(" 50 "),
                    ]),
                    r("i", { staticClass: "fi-rs-angle-small-down" }),
                  ]),
                ]
              );
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
              return r("div", { staticClass: "note" }, [
                t._v("We recommend an image of at least 400x400px. "),
                r("span", { staticClass: "text-red" }, [
                  t._v("Gifs work too."),
                ]),
              ]);
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r(
                "div",
                {
                  staticClass: "mt-3 form-group",
                  staticStyle: { "text-align": "left" },
                },
                [
                  r("h5", { staticClass: "b" }, [t._v(" Bio ")]),
                  t._v(" "),
                  r("textarea", {
                    attrs: {
                      id: "txtBio",
                      rows: "3",
                      cols: "50",
                      type: "text",
                      placeholder: "Tell us a little about yourself",
                      maxlength: "2000",
                    },
                  }),
                  t._v(" "),
                  r("small", { staticClass: "t-gray" }, [
                    t._v(" URLs are allowed "),
                  ]),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                r = t._self._c || e;
              return r("div", { staticClass: "mt-4 tac small" }, [
                t._v(" Please take a few minutes to read and understand  "),
                r(
                  "a",
                  {
                    staticClass: "router-link-exact-active router-link-active",
                    attrs: {
                      href: "../assets/document/SA Terms of Service Draft.pdf",
                      target: "_blank",
                      "aria-current": "page",
                    },
                  },
                  [
                    r("span", { staticClass: "c" }, [
                      t._v(" Mastermind NFT Terms of Service "),
                    ]),
                  ]
                ),
                t._v(
                  ". To continue, you’ll need to accept the Terms of Service by checking the box.\n                                "
                ),
              ]);
            },
          ],
          !1,
          null,
          null,
          null
        );
      e.default = component.exports;
      installComponents(component, { ShareAsset: r(1188).default });
    },
  },
]);
