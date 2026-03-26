// Sermon message list (title + Mega link). This list is used to render the messages page.
// Each item references the shared image at /bible-interpretatioin.png.

const rawMessages = [
  {
    title: "A CHARGE ON PERSUASION",
    link: "https://mega.nz/folder/uwBSQTQA#bIygYqrOOa0qDvx1vuL29A",
  },
  {
    title: "A LITTLE DISCUSSION ON SPIRITUAL GROWTH",
    link: "https://mega.nz/folder/CwRg0DxJ#mjFz8voZG1QFizWO1RRO_w",
    image: "/a little discussion on spiritual growth.jpeg",
  },
  {
    title: "A LITTLE GIST ABOUT MARITAL RELATIONSHIP",
    link: "https://mega.nz/folder/b55hAKqS#TGapuYdIFd_avLHGtTE8pA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "A SHORT EXHORTATION ON POWER",
    link: "https://mega.nz/folder/Tp5AzQzJ#xVF75lZW3hkh3ZgTae8qfQ",
    image: "/a short exhortation on power.jpeg",
  },
  {
    title: "ABOUT MINISTRY",
    link: "https://mega.nz/folder/upxgUQ5I#8kElgX-PKEkN0nASIv1TYQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "ABOUT THE NEW YEAR",
    link: "https://mega.nz/folder/W851UYrT#JPYhnph-cUnAhHJ_r-Kkmw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "ACCESS TO GOD - THE REALITY OF A BELIEVER",
    link: "https://mega.nz/folder/v1owGDxb#uZVD7dDVh9NoqtZjDtk1Vg",
    image: "/access to God the reality of the believer.jpeg",
  },
  {
    title: "ASSOCIATION",
    link: "https://mega.nz/folder/30RkzLBZ#TUMHuEV0FVFJlHX9I-3fuw",
    image: "/association.jpeg",
  },
  {
    title: "BE A GOOD EXAMPLE",
    link: "https://mega.nz/folder/y9xDhbaT#bauiy4qk-Qn_FODUBU-trg",
    image: "/be a good example.jpeg",
  },
  {
    title: "BE FILLED",
    link: "https://mega.nz/folder/espSCCQa#Oab5RkYfrARCZWlBqMtIrA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "BEING INFLUENCED BY GOD'S WORD",
    link: "https://mega.nz/folder/LsYWBTjJ#JjkR2hgrdf0-9Iy716zllA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "BELIEVERS' CONFERENCE '25",
    link: "https://mega.nz/folder/b0pxBRrT#D9CK-uRVjLtiQWfWWQNlXA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "believers' conference 2023.jpeg",
    link: "https://mega.nz/folder/Dlhz3Yga#oO5sWrsrYSLTceqnzEkvbw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "BEWARE OF MATERIALISM",
    link: "https://mega.nz/folder/Cwhn0ILb#_ct6lTKdHUEOcgKYhiHegw",
    image: "/beware of materialism.jpeg",
  },
  {
    title: "BIBLE INTERPRETATION",
    link: "https://mega.nz/folder/m8hDGITK#ip1wlIXPr11Y-YbSQ4Pamg",
    image: "/bible interpretation.jpeg",
  },
  {
    title: "BIBLE SCHOOL 2020",
    link: "https://mega.nz/folder/rpxhGaRQ#-A8HeXCMVueHi_oeUYlE0g",
    image: "/bible school.jpeg",
  },
  {
    title: "BROTHERLY LOVE",
    link: "https://mega.nz/folder/G9Qnja6S#vZ-6iQ_jkVbNvVLn7DauBQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "CASTING YOUR CARES UPON GOD.",
    link: "https://mega.nz/folder/WxomjDLA#Mc203GI2QTePF2_je9_hGw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "CHARGE FOR MINISTRY",
    link: "https://mega.nz/folder/qx4ngJoa#yZQo0BLdhpahU-RiRjp7IQ",
    image: "/charge for ministry.jpeg",
  },
  {
    title: "CHRIST IN ME, THE HOPE OF GLORY",
    link: "https://mega.nz/folder/KwRHWJ4a#sGhGkAGVdhsQiOrAIqDm1g",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "CHRIST'S GIFTS TO HIS CHURCH",
    link: "https://mega.nz/folder/ntgEjLzI#75O2On91eB6R17LM7jt98A",
    image: "/christ's gift to his church.jpeg",
  },
  {
    title: "CHRISTIAN GIVING",
    link: "https://mega.nz/folder/bshy1K6Y#_HZcEmW7e6Uti-foGEKTRw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "CHURCH",
    link: "https://mega.nz/folder/i0x1jIJJ#oXm4f9PpJCx8nvjJOqH9tw",
    image: "/church.jpeg",
  },
  {
    title: "CONCERNING MARITALS",
    link: "https://mega.nz/folder/6tYzFZDZ#4M0bohw_NOeYpYEbNWd5aA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "CONCERNING POWER",
    link: "https://mega.nz/folder/31BiDDDb#NeRbidPqOr6231fvvrtbIg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "CONTENDING FOR THE SUPERNATURAL",
    link: "https://mega.nz/folder/vlAiHTxI#rSQuYfc35ZzIJk6UbFs-SQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "CONTENDING FOR THE SUPERNATURAL SERIES 2",
    link: "https://mega.nz/folder/2t4AHQgS#AK0_qs0dr2Mwpg4mjlV8aw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "DISCIPLESHIP",
    link: "https://mega.nz/folder/bl5TiKja#HGSrv43hi43zQYpA0q4fXQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "DOES GOD VISIT THE FATHER'S SINS ON THE CHILDREN",
    link: "https://mega.nz/folder/G9QiCDxD#Vlk9p1l8g2nhJ2QkJfZNQQ",
    image: "/does god visit the iniquities of the father on the son.jpeg",
  },
  {
    title: "DOING THE WORKS OF JESUS",
    link: "https://mega.nz/folder/ilgRQS4B#AE6AoHo5vcpubHuqMcu2jg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "DON'T GET FAMILIAR",
    link: "https://mega.nz/folder/PloFECiT#fCg7DcXLWWZ6RtqQl7oNZA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "ENABLED TO DO",
    link: "https://mega.nz/folder/W8I2DDBb#Fo3JPRr73NS0d3xWqcF3pQ",
    image: "/enabled to do.jpeg",
  },
  {
    title: "ENRICHED IN CHRIST",
    link: "https://mega.nz/folder/LthE1YTa#e6zHKjGtirO2defO0Xg90g",
    image: "/enriched in christ.jpeg",
  },
  {
    title: "EVANGELISM AND DISCIPLESHIP",
    link: "https://mega.nz/folder/ahAylRyI#BmlLeER2lIg1IB5XNHl_Hw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "EXPOSITION ON 1 CORINTHIANS 5 VS 5",
    link: "https://mega.nz/folder/jgY1GSTD#ZRbYlVqWctoMdDT40BDJRg",
    image: "/exposition on 1 corinthians 5.jpeg",
  },
  {
    title: "EXPOSITION ON 2 PETER CHAPTER 2",
    link: "https://mega.nz/folder/GtRTFTgK#ZZp4w1H6-tAgTgdjGucfww",
    image: "/exposition on 2 peter 2.jpeg",
  },
  {
    title: "EXPOSITION ON EPHESIANS 1 VS 3",
    link: "https://mega.nz/folder/jsIHGCja#nsMDPdX7bxHffy38EuZqkQ",
    image: "/exposition on ephesian 1-3.jpeg",
  },
  {
    title: "EXPOSITION ON GENESIS 2 VS 16-17",
    link: "https://mega.nz/folder/y5xSiLob#S7QZ-IxtjAgOxOS7AaZ7aQ",
    image: "/exposition on Genesis 2.jpeg",
  },
  {
    title: "EXPOSITION ON HEBREW 12 VS 14",
    link: "https://mega.nz/folder/XhQWQSdJ#HXAgqIfykijHVu02S05bcw",
    image: "/exposition on hebrew 12.jpeg",
  },
  {
    title: "EXPOSITION ON JOHN 14",
    link: "https://mega.nz/folder/OswmVC7T#20Lt8ll-GDbgl5-PousV0g",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "EXPOSITION ON MATTHEW 17 VS 27",
    link: "https://mega.nz/folder/DpR1TBI#xcXViVF5ZQBAfEP0zxYxxQ",
    image: "/exposition on matthew 17.jpeg",
  },
  {
    title: "EXPOSITION ON ROMAN 8 VS 8-9",
    link: "https://mega.nz/folder/WgA2Q8Lk#ysrEpYqg1yNSYdeCGOcH",
    image: "/exposition on romans 8.jpeg",
  },
  {
    title: "FAITH BEYOND EMOTIONS",
    link: "https://mega.nz/folder/3sInXLgb#GaZTFILJUDiadCGnc0sSFA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "FAITH FOR 2026",
    link: "https://mega.nz/folder/P55UARpK#XJeR_QBtMa7B8kkO7c39-Q",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "FAITH FOR THE IMPOSSIBLE",
    link: "https://mega.nz/folder/20hXUQbK#IjRzpKKxhEBQ3IJcXAVXxQ",
    image: "/faith for the impossilbe.jpeg",
  },
  {
    title: "FAITH OVER FEAR",
    link: "https://mega.nz/folder/b4I1iSKZ#zwF4pN8PWttEdw7IVP9-pA",
    image: "/faith over fear.jpeg",
  },
  {
    title: "FIVE HELPFUL TIPS FOR BIBLE INTERPRETATION",
    link: "https://mega.nz/folder/OwwRUSqI#udXGSiL2r59N4NDgt_u07g",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "GOD WANTS YOU TO PROSPER SERIES",
    link: "https://mega.nz/folder/GpxX3ChC#2NA_rHXOLqiGQn6fDgMI9Q",
    image: "/god want you to prosper.jpeg",
  },
  {
    title: "GOD'S EVERLASTING LOVE",
    link: "https://mega.nz/folder/6xoi1ZYa#bcYVZB4sgELRbgJHf9T5Ug",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "GOD'S PLAN FOR MAN",
    link: "https://mega.nz/folder/Px4GiC4Z#YLo-k06N1v2EOwlyKNg0cw",
    image: "/God's plan for man.jpeg",
  },
  {
    title: "GOD'S VOICE",
    link: "https://mega.nz/folder/qkhRWCQI#KR8cfkyc3vGMdK5qY3KRyg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "GRACE AND MERCY",
    link: "https://mega.nz/folder/GwgV1YTa#pCgOzrkHwC1djXRJC4eBug",
    image: "/grace and mercy.jpeg",
  },
  {
    title: "GROW IN GRACE",
    link: "https://mega.nz/folder/jlwXGQ7b#_BamhOh5QwI424u3mzgIMA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "GUARD YOUR HEART",
    link: "https://mega.nz/folder/28AkxJaY#S3hKiZhAuFmad5gQzGaPpQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "Healing and Miracles",
    link: "https://mega.nz/folder/z5oFnaIa#r_4J73kGEyAYFj4TuDff_Q",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "HEALING CONFERENCE 2020",
    link: "https://mega.nz/folder/uhgVnISS#2gziRtqS8T0QzLDQ3gFvQ",
    image: "/healing conference 2020.jpeg",
  },
  {
    title: "HEALING CONFERENCE 2021",
    link: "https://mega.nz/folder/roIiRY7a#YAfqO84UVKep2Z3XZYC1w",
    image: "/healing conference 2021.jpeg",
  },
  {
    title: "HEARING GOD'S VOICE",
    link: "https://mega.nz/folder/C4gBQa6b#da1LyWcRp5VJC3au14Qj24",
    image: "/hearing god's voice.jpeg",
  },
  {
    title: "HOLY GHOST PARTY",
    link: "https://mega.nz/folder/qxQzzQDZ#haaQJbHtOAUyaZ2Q3LeKg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "HONOUR",
    link: "https://mega.nz/folder/a8hAgLxR#4CgPDDxNSMf3za6d62DmCQ",
    image: "/honour.jpeg",
  },
  {
    title: "HOW TO VIEW THE SCRIPTURES",
    link: "https://mega.nz/folder/u14xDLIJ#dX4XPSo_aNykd8scjfrpvA",
    image: "/how to view the scripture.jpeg",
  },
  {
    title: "I WILL SERVE THE LORD",
    link: "https://mega.nz/folder/nhRxjDCI#AH_yeUFvCiCIOsiG5JdDRQ",
    image: "/i will serve the lord.jpeg",
  },
  {
    title: "IN CHRIST",
    link: "https://mega.nz/folder/7xoWDZaC#AlpA7YgXrR_A9XwhSiMYdA",
    image: "/in christ.jpeg",
  },
  {
    title: "IN CHRIST (2)",
    link: "https://mega.nz/folder/z8QDhCYJ#fzCXtWsZ7Ek4afW1B348MQ",
    image: "/in christ.jpeg",
  },
  {
    title: "JOY",
    link: "https://mega.nz/folder/3h4RWLaT#5_alGwbulmS2i7qA9cOgKQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "LEADERSHIP SCHOOL",
    link: "https://mega.nz/folder/i5oVnIAI#fQ9nI4Y0Gbs7TrBV7wHt3A",
    image: "/leadership school 1.jpeg",
  },
  {
    title: "LEADERSHIP SCHOOL 2",
    link: "https://mega.nz/folder/vkBSHJbZ#hswPOBmTY0kcmLglav7TRQ",
    image: "/leadership school 2.jpeg",
  },
  {
    title: "LESSONS FROM MATTHEW 5-7",
    link: "https://mega.nz/folder/bkxB2LQB#jUNxTyG41CXfQVK8HUyE0g",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "LET THE FIRE BURN",
    link: "https://mega.nz/folder/Tt42RSxD#pZuibGIhgkylRlRlhVjfkg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "LET THE SCRIPTURE BE SEEN IN YOU",
    link: "https://mega.nz/folder/aoJnHYyA#48taYoRQdOA-SsRZTXXMOw",
    image: "/let the scripture be seen in you.jpeg",
  },
  {
    title: "LOVE RELATIONSHIP AND MARRIAGE",
    link: "https://mega.nz/folder/OxB3ySrK#yt9GaM1x3UU9QkPUzeSaOw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "MAKING EVERY MINUTES COUNT",
    link: "https://mega.nz/folder/e5gUURaK#TCnm8lZVU-t9pGLwuLzbSg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "MAKING THE MOST OF MEETINGS",
    link: "https://mega.nz/folder/X842BAzD#98NP6OqHZEqqaMEUuqFhcw",
    image: "/making most of meetings.jpeg",
  },
  {
    title: "MAKING THE MOST OF MEETINGS 2.",
    link: "https://mega.nz/folder/mo5DXbKQ#cKwckQgno1Bt5GF8Ghh-sw",
    image: "/making most of meetings.jpeg",
  },
  {
    title: "MELCHIZEDEK",
    link: "https://mega.nz/folder/vwo2GD6D#FIj8S95JaaFYDGyRtgTT7g",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "OUR REJOICING",
    link: "https://mega.nz/folder/yxBBDYIY#2LneatqikZarZoZScyVdZQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "OUR UNION WITH CHRIST",
    link: "https://mega.nz/folder/PtJ33ADL#XGAks3nyM45NY7ti_4VlPA",
    image: "/our union with christ.jpeg",
  },
  {
    title: "PASTOR'S CHARGE",
    link: "https://mega.nz/folder/agozHCRZ#4Gco98AHaEYW6l3KnhXfqw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "PNEUMATIKOS SERIES 1",
    link: "https://mega.nz/folder/6l40GRQA#bw7P0Vx2YxtO27W-4eGnPA",
    image: "/pneumatikos.jpeg",
  },
  {
    title: "PNEUMATIKOS SERIES 2",
    link: "https://mega.nz/folder/fpZjSRaD#KoZjH8YVxT5S1_CYvfI8tw",
    image: "/pneumatikos.jpeg",
  },
  {
    title: "PRAYER CONFERENCE 2023",
    link: "https://mega.nz/folder/b1pkyTRJ#hSxEdHijRY8pFEy-DUAiSA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "PRAYER SERIES",
    link: "https://mega.nz/folder/GxIm2S6R#Ohflb7DvPhcVfAdAXtJCSw",
    image: "/prayer series.jpeg",
  },
  {
    title: "PRAYING IN THE SPIRIT",
    link: "https://mega.nz/folder/ushyGBCQ#PV1jgRLUx3ekzDvVGFf79w",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "PRESERVED IN CHRIST",
    link: "https://mega.nz/folder/WwhFXaoQ#h-s4gofXLwD5u14Q-CH5jw",
    image: "/preserved in christ.jpeg",
  },
  {
    title: "PRIORITIZING GOD'S WORD.",
    link: "https://mega.nz/folder/b0RDUIJT#_Y7EPa_GvJ0Sd0VzIeBa8A",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "RAISING DISCIPLES",
    link: "https://mega.nz/folder/O9RRQBpY#uAa88JrEimB6UhwaIUMbgg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "REIGNING IN LIFE",
    link: "https://mega.nz/folder/X4Zxibxa#ma3D81YmwqGWH6kTtqoXOg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "SALVATION SERIES 1",
    link: "https://mega.nz/folder/71IyzRaI#e8mTZm1_QJDew2oHZdAvXg",
    image: "/salvation series 1.jpeg",
  },
  {
    title: "SALVATION SERIES 2",
    link: "https://mega.nz/folder/i4R0TI7D#r0v2bjWuRJhZu6pWpQAuyw",
    image: "/salvation series 2.jpeg",
  },
  {
    title: "SALVATION SERIES 3",
    link: "https://mega.nz/folder/PpxixLTb#zL72pLxxxAAkroC3VvS-Zg",
    image: "/salvation series 3.jpeg",
  },
  {
    title: "SALVATION SERIES 4",
    link: "https://mega.nz/folder/mxQEDBbC#9IwEgS59ApD0ILkPrWH8Dg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "SALVATION SERIES 5",
    link: "https://mega.nz/folder/qhA0URzQ#bNGjpT5-cwCOz_C3RL7j1g",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "SALVATION SERIES 6",
    link: "https://mega.nz/folder/30gVkLaD#fpeiJyvZXL9iWAVwqTsORA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "SEASON OF PRAYER",
    link: "https://mega.nz/folder/blA31LbI#4ss1TH-3uC2VfUWtnEwaDg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "SOME ADMONITIONS",
    link: "https://mega.nz/folder/esBXhaIa#2OBCGoOlhJb-TZyIPDthmA",
    image: "/some admonitions.jpeg",
  },
  {
    title: "SOMETHING TO JOY ABOUT",
    link: "https://mega.nz/folder/74hVBQSB#0mJ9AkoGIqDId8D8G_38bw",
    image: "/something to joy about.jpeg",
  },
  {
    title: "SOUL WINNING",
    link: "https://mega.nz/folder/HkhS1QLZ#HQuEBxtkNpym62BdTac7fw",
    image: "/soul winning.jpeg",
  },
  {
    title: "SOUL WINNING CONFERENCE 2022",
    link: "https://mega.nz/folder/6kx0BLBT#gDfiFLvKy-yqWn607FUtcg",
    image: "/soul winning conference 2022.jpeg",
  },
  {
    title: "SOUL WINNING CONFERENCE 2023",
    link: "https://mega.nz/folder/nlARxY6H#Z3NZOhuAe6YhCQRwCec_3Q",
    image: "/soul winning conference 2023.jpeg",
  },
  {
    title: "SPECIAL QUESTION AND ANSWER SESSION",
    link: "https://mega.nz/folder/Lsx2gZqb#Uf0OH4XKv19Ctl86YqaOdA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "STANDING FOR THE TRUTH OF GOD'S WORD",
    link: "https://mega.nz/folder/a9BV3B4A#qBCzG0SYaqbgr_mbJh9EgA",
    image: "/standing for the truth of God's word.jpeg",
  },
  {
    title: "STAYING CONSCIOUS OF THE SPIRIT",
    link: "https://mega.nz/folder/zgQ3DBBZ#MO_r_1hbx6iq4n-IdRVwQA",
    image: "/staying conscious of god's spirit.jpeg",
  },
  {
    title: "STAYING CONSISTENT",
    link: "https://mega.nz/folder/D05yHZLZ#CzFyzJjvsjLlzlfBhrOdbQ",
    image: "/staying consistent.jpeg",
  },
  {
    title: "SUPERNATURAL CONFERENCE'2022",
    link: "https://mega.nz/folder/Tw4QFbBQ#Iqm0N4QJvYYbbZjXRhClrg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "SWEET HOUR OF PRAYER",
    link: "https://mega.nz/folder/69oTHYiA#R0uzZjWh0QR0sr17Bk469Q",
    image: "/sweet hour of prayer.jpeg",
  },
  {
    title: "TAKE HEED",
    link: "https://mega.nz/folder/G1ImBS7T#ZZOmH2Bx5IQNL1fR1LPdA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "TAKE HEED TO THE WORD",
    link: "https://mega.nz/folder/ehQUCLKK#0Rds2PkzbQr2_3NKyzC8TQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THAT THE BELIEVER CARRIES GOD",
    link: "https://mega.nz/folder/aspDlI5S#lWS_JO0pAtaRUcIp8yRfeg",
    image: "/that the believer carry's god.jpeg",
  },
  {
    title: "THE BELIEVER - AN ANSWER TO THE WORLD PROBLEM",
    link: "https://mega.nz/folder/eppj3ARI#TwEewJHHZIg89eyI-rdECQ",
    image: "/the believer is the answer to the world's problem.jpeg",
  },
  {
    title: "THE ABILITY OF THE SPIRIT IN THE BELIEVER",
    link: "https://mega.nz/folder/GpgGySCK#ut9MA2wU2m5ETSKR9tRqmg",
    image: "/the abilities of the spirit in the believer.jpeg",
  },
  {
    title: "THE ADVANTAGE OF THE BELIEVER",
    link: "https://mega.nz/folder/zoBQ2LZI#KQs143wGbQyMAWq_asVvA",
    image: "/the advantage of the believer.jpeg",
  },
  {
    title: "THE ART OF FOLLOWING",
    link: "https://mega.nz/folder/m8403bzb#w3EkrmZJM8GSAf0sbIyD_w",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE BELIEVER'S IDENTITY",
    link: "https://mega.nz/folder/KkIVGIKS#hk8xdrVfNoChdb2POqevYw",
    image: "/the believers identity.jpeg",
  },
  {
    title: "THE BIBLICAL PERSPECTIVE ON MARRIAGE",
    link: "https://mega.nz/folder/jpJg3apR#37jWNx4_iMt_5j6EJ-8PcA",
    image: "/the biblical perspective of marriage.jpeg",
  },
  {
    title: "THE BOOK OF JUDE",
    link: "https://mega.nz/folder/ikhXVQLZ#cHCZPstd0hcFVD1uziKZqQ",
    image: "/the book of jude.jpeg",
  },
  {
    title: "THE COMPELLING POWER",
    link: "https://mega.nz/folder/3soCxBzK#GX09HGBtlbUxeE-BvIF5bg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE CONDUCT OF THE BELIEVER",
    link: "https://mega.nz/folder/zwZABKCL#mf_8jlwV9bQwTUcTvQefAg",
    image: "/the conduct of the believer.jpeg",
  },
  {
    title: "THE DESIRE FOR MORE",
    link: "https://mega.nz/folder/n1oElCBI#rXrZUYDL6qmO9cmfd4aurA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE ETERNAL LIFE OF CHRIST",
    link: "https://mega.nz/folder/3h4yESYK#mQ6q9X01KvUZUrFh0sgAGQ",
    image: "/the eternal life of christ.jpeg",
  },
  {
    title: "THE FIRE OF THE SPIRIT",
    link: "https://mega.nz/folder/3kAmkRKT#2A15OHpO5cytpM_7jK-zxQ",
    image: "/the fire of the spirit.jpeg",
  },
  {
    title: "THE GENEROSITY OF THE BELIEVER",
    link: "https://mega.nz/folder/21g3HCAL#tSQ-OJlxHpcTptw681V0Rg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE HEART OF THANKSGIVING",
    link: "https://mega.nz/folder/i5YBAS5Y#dqPXYDMZDFpKeqvJhFyeA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE LIFE OF A MINISTER",
    link: "https://mega.nz/folder/uhRAjTgD#29_V1KYEbMjaTVMjbwGvH_Q",
    image: "/the life of a minister.jpeg",
  },
  {
    title: "THE LIFE OF CHRIST",
    link: "https://mega.nz/folder/H5ZQDBJa#DS4fjG6iTolxP1z7KNkDsA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE LOCAL CHURCH SERIES 1",
    link: "https://mega.nz/folder/6sxRWQib#G7lpqFUta_xpjfk1RWABBQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE LOCAL CHURCH SERIES 2",
    link: "https://mega.nz/folder/fhYhSTjB#RMZMVGVEdIh-qXnv5R_tMg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE LOVE OF CHRIST",
    link: "https://mega.nz/folder/KxxygSbR#83-yAowmNcWJ92lnEIrpQ",
    image: "/the love of christ.jpeg",
  },
  {
    title: "THE MINISTRY",
    link: "https://mega.nz/folder/zhJBgLyC#1ccyuHaSHEssT6py__4AnA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE MINISTRY OF ANGELS",
    link: "https://mega.nz/folder/L5AiEAgT#_qegZYPDD0UtlhpVoeBtBQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE PASTORAL MINDSET",
    link: "https://mega.nz/folder/i1owkQYl#hHhohmwEyrKEAgpfvXALCA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE POWER MINISTRY",
    link: "https://mega.nz/folder/f0A00Y7J#-5mCyBl5I79NVPGf5gbE",
    image: "/the power ministry.jpeg",
  },
  {
    title: "THE PURPOSE OF LOCAL CHURCH",
    link: "https://mega.nz/folder/OwJijDiS#chF1eEDqDpNniy3wQkPkQ",
    image: "/the purpose of local church.jpeg",
  },
  {
    title: "THE REALITY OF REDEMPTION",
    link: "https://mega.nz/folder/O8JwHLTL#GFgN05HZeE8danw0mn_Kzw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE REALITY OF THE HOLY SPIRIT",
    link: "https://mega.nz/folder/Lh4BhDYA#c2cmsasGEzsvSMeKhf032A",
    image: "/the reality of the spirit.jpeg",
  },
  {
    title: "THE REWARD OF MINISTRY",
    link: "https://mega.nz/folder/e5BhjBDR#fV1GEzdYwHLLqhUy52CfjQ",
    image: "/the reward of ministry.jpeg",
  },
  {
    title: "THE SHEPHERD AND HIS SHEPHERDS",
    link: "https://mega.nz/folder/ToJCATBJ#260DSseB6yrDYZWuT9wQ",
    image: "/the shepherd and his shepherds.jpeg",
  },
  {
    title: "THE SPIRIT AMONG US",
    link: "https://mega.nz/folder/qgRTTTwa#MPRX4I9xfz_hbuuutSt6AQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE SPIRIT WITHIN AND THE SPIRIT UPON",
    link: "https://mega.nz/folder/uxxQBaIa#U_DLDIn5KWBd0Nihkw_t8g",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE SPIRITUAL MAN",
    link: "https://mega.nz/folder/TsRVUZhI#CmnzUgkJYRB9W5jWkt_j1g",
    image: "/the spiritual man.jpeg",
  },
  {
    title: "THE SUPERNATURAL CONFERENCE '23",
    link: "https://mega.nz/folder/LpIz3ITL#4UiCV8u0JVWVYJcBxjQBlw",
    image: "/the supernatural conference 20222",
  },
  {
    title: "THE SUPERNATURAL CONFERENCE '24.",
    link: "https://mega.nz/folder/D9h3hCxS#XTntCrtvI6W6hofjec9xQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE SUPERNATURAL CONFERENCE '25",
    link: "https://mega.nz/folder/ToxA2AII#bxIP_zyd86c7yIOEyOLy0g",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE TANGIBILITY OF GOD'S POWER",
    link: "https://mega.nz/folder/H5RVgQhY#MYA8bmjQcfmWmTxWzjF0zA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE TRAINING AND RESPONSIBILITY OF THE BELIEVER",
    link: "https://mega.nz/folder/eo4DQYDZ#UY6IgN2Fj0IlkBZ5_9TJsQ",
    image: "/the training and the responsibility of the believer.jpeg",
  },
  {
    title: "THE VISION",
    link: "https://mega.nz/folder/bxAxmaSQ#i0rutVlIzcoKAvGoyL-rlA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE WHYs AND WHY NOTs IN THOL",
    link: "https://mega.nz/folder/isAWFBZR#RI3LffE0Wb3dCaRfGDqYWQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE WORD OF GOD",
    link: "https://mega.nz/folder/W14mWJrL#QmPX51nZXl5DTrKJCPJ_xA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE WORKINGS OF GOD",
    link: "https://mega.nz/folder/Dog2zb6D#a8hsqO22fOpkp9KtiKw4oA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THE ZEALOUS AND FERVENT BELIEVER",
    link: "https://mega.nz/folder/TpIECbhD#-zqWrr1Jokr6LDRcMp8QGg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "THERE IS A LIFE WITHIN",
    link: "https://mega.nz/folder/zhZgFLiC#FLfOXvzi9qHduYZO943svw",
    image: "/there is life within.jpeg",
  },
  {
    title: "TO BE FILLED WITH THE SPIRIT",
    link: "https://mega.nz/folder/W9JxURzK#F0_Xx0nsIZhsh_xeYKSK3w",
    image: "/to be filled by the spirit.jpeg",
  },
  {
    title: "TO THE SAINT, YOU ARE A PREACHER",
    link: "https://mega.nz/folder/L9xDGASQ#SQbn-C9ZnbYWeGHGy-PhPw",
    image: "/to the saints you're a preacer.jpeg",
  },
  {
    title: "TONGUES AND INTERPRETATION",
    link: "https://mega.nz/folder/itxm1gD9#VezhkTsPTvX5vqP_wJzOHg",
    image: "/tongues and interpretation.jpeg",
  },
  {
    title: "TSC' 24",
    link: "https://mega.nz/folder/ixwFxTAK#UDH9xeL6xaaEPEUEji1Ifg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "UNDERSTANDING THE BOOK OF GENESIS",
    link: "https://mega.nz/folder/y4hnXQoD#3g7KDDiEBFxvooVCCRFMGA",
    image: "/understanding the book of genesis.jpeg",
  },
  {
    title: "VISION SUNDAY",
    link: "https://mega.nz/folder/2tITXajQ#CS9KanV3h4UGPCOFjPC5Eg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "WALKING IN LOVE",
    link: "https://mega.nz/folder/SsgmHSSb#U3Vl2RhGa1MkrH49tkm-aw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "WALKING IN THE SUPERNATURAL",
    link: "https://mega.nz/folder/nkZQlAzR#PZqmQz_-Sfsi2s6juu9-hw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "WHAT EVERY BELIEVER SHOULD KNOW",
    link: "https://mega.nz/folder/LtoFjYwQ#rRVTWWlI9oc0JTRocKXbg",
    image: "/what every believer should know.jpeg",
  },
  {
    title: "WHAT MATTERS MOST",
    link: "https://mega.nz/folder/Clp00JDb#_EdtzKMlTw8FHD5PiKMuug",
    image: "/what matters most.jpeg",
  },
  {
    title: "WHAT THE POWER OF GOD IS",
    link: "https://mega.nz/folder/r4gG2QbI#Aj9qunGixJljgX_eP9a9yg",
    image: "/What God's power is.jpeg",
  },
  {
    title: "WHEN HANDS ARE LAID",
    link: "https://mega.nz/folder/uoAikZKS#ILvN7cCnx_JLkht4jYkIw",
    image: "/when hands are laid.jpeg",
  },
  {
    title: "WHEN WE GATHER",
    link: "https://mega.nz/folder/D1ZTmKLb#YKYOg_vVH9c0WkRzK3nVNg",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "WHY TONGUES",
    link: "https://mega.nz/folder/7h4XDQBY#4vaQDm-HxskofogjLuM6VA",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "WHY WE HAVE THE LOCAL CHURCH",
    link: "https://mega.nz/folder/S84FXJKB#qjzMUnGara4_DdkrWIP9Ow",
    image: "/why we have the local church.jpeg",
  },
  {
    title: "WHY WE PRAY",
    link: "https://mega.nz/folder/KhZ12ApR#AdHEbH6h6KARQoPG9rIX5g",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "WORD CONFERENCE 2021",
    link: "https://mega.nz/folder/CwYAjLyb#bQFxnXRul01A4t3QiiqcMw",
    image: "/word conference 2021.jpeg",
  },
  {
    title: "WORD CONFERENCE 2022",
    link: "https://mega.nz/folder/XkQzRSjC#qt7PSliWvJ3X3pGKhm-XuQ",
    image: "/word conference 2022.jpeg",
  },
  {
    title: "WORD CONFERENCE 2023",
    link: "https://mega.nz/folder/r8JFFCJI#NVQxsZKwWk78YejSMTSFTw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "WORD CONFERENCE 2024",
    link: "https://mega.nz/folder/zkp3BQTI#iLSJR1ivWSDa6c8-oO4Rzw",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "WORD CONFERENCE 2025",
    link: "https://mega.nz/folder/bwAUnD5R#ZDmA7J9WMA7hOrZ0gzfM6Q",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "WORKER'S MEETING",
    link: "https://mega.nz/folder/7kRGiZ6b#skg8EuQP8kDfzTZxm67oVQ",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "WORKER'S RETREAT '23",
    link: "https://mega.nz/folder/O8ZxmZbI#l7KS10Eg3QD54XPWimO9g",
    image: "/bible-interpretatioin.png",
  },
  {
    title: "YIELDING TO INSTRUCTION",
    link: "https://mega.nz/folder/vhZjwITD#TmkfwHigJPzm04EO1elBhw",
    image: "/yielding to instructions.jpeg",
  },
  {
    title: "YOUR LEARNING",
    link: "https://mega.nz/folder/vkgFiSiJ#TIz6eJVCBGAc3jcG2584yw",
  },
]

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

function formatDate(index) {
  const baseDay = 10
  const day = baseDay + (index % 20)
  const month = monthNames[index % monthNames.length]
  return `${month} ${day}th, 25`
}

function formatDuration(index) {
  const base = 35
  const mins = base + (index % 26)
  return `${mins} mins`
}

const messages = rawMessages.map((message) => ({
  ...message,
  image: message.image ?? "/bible-interpretatioin.png",
  duration: message.duration ?? "45 mins",
  date: message.date ?? "Sep 20th 25",
}))

export default messages
