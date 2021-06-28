const countries = [
  {
    country: "Worldwide",
    countryInfo: {
      flag: "https://cdn3.iconfinder.com/data/icons/faticons/32/globe-01-512.png",
    },
  },
  {
    country: "Afghanistan",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/af.png",
    },
  },
  {
    country: "Albania",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/al.png",
    },
  },
  {
    country: "Algeria",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/dz.png",
    },
  },
  {
    country: "Andorra",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/ad.png",
    },
  },
  {
    country: "Angola",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/ao.png",
    },
  },
  {
    country: "Anguilla",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/ai.png",
    },
  },
  {
    country: "Antigua and Barbuda",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/ag.png",
    },
  },
  {
    country: "Argentina",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/ar.png",
    },
  },
  {
    country: "Armenia",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/am.png",
    },
  },
  {
    country: "Aruba",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/aw.png",
    },
  },
  {
    country: "Australia",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/au.png",
    },
  },
  {
    country: "Austria",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/at.png",
    },
  },
  {
    country: "Azerbaijan",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/az.png" },
  },
  {
    country: "Bahamas",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/bs.png" },
  },
  {
    country: "Bahrain",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/bh.png" },
  },
  {
    country: "Bangladesh",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/bd.png" },
  },
  {
    country: "Barbados",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/bb.png",
    },
  },
  {
    country: "Belarus",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/by.png" },
  },
  {
    country: "Belgium",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/be.png" },
  },
  {
    country: "Belize",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/bz.png",
    },
  },

  {
    country: "Benin",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/bj.png" },
  },
  {
    country: "Bermuda",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/bm.png",
    },
  },
  {
    country: "Bhutan",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/bt.png" },
  },
  {
    country: "Bolivia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/bo.png" },
  },
  {
    country: "Bosnia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ba.png" },
  },
  {
    country: "Botswana",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/bw.png" },
  },
  {
    country: "Brazil",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/br.png" },
  },
  {
    country: "British Virgin Islands",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/vg.png" },
  },
  {
    country: "Brunei",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/bn.png",
    },
  },
  {
    country: "Bulgaria",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/bg.png" },
  },
  {
    country: "Burkina Faso",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/bf.png" },
  },
  {
    country: "Burundi",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/bi.png" },
  },
  {
    country: "Cabo Verde",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/cv.png" },
  },
  {
    country: "Cambodia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/kh.png" },
  },
  {
    country: "Cameroon",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/cm.png" },
  },
  {
    country: "Canada",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ca.png" },
  },
  {
    country: "Caribbean Netherlands",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/bq.png",
    },
  },
  {
    country: "Cayman Islands",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/ky.png",
    },
  },
  {
    country: "Central African Republic",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/cf.png" },
  },
  {
    country: "Chad",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/td.png" },
  },
  {
    country: "Channel Islands",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/je.png",
    },
  },
  {
    country: "Chile",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/cl.png" },
  },
  {
    country: "China",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/cn.png" },
  },
  {
    country: "Colombia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/co.png" },
  },
  {
    country: "Comoros",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/km.png",
    },
  },
  {
    country: "Congo",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/cg.png" },
  },
  {
    country: "Costa Rica",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/cr.png" },
  },
  {
    country: "Croatia",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/hr.png",
    },
  },
  {
    country: "Cuba",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/cu.png" },
  },
  {
    country: "Curaçao",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/cw.png",
    },
  },
  {
    country: "Cyprus",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/cy.png" },
  },
  {
    country: "Czechia",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/cz.png",
    },
  },
  {
    country: "Côte d'Ivoire",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ci.png" },
  },
  {
    country: "DRC",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/cd.png" },
  },
  {
    country: "Denmark",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/dk.png" },
  },
  {
    country: "Diamond Princess",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/unknown.png" },
  },
  {
    country: "Djibouti",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/dj.png" },
  },
  {
    country: "Dominica",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/dm.png",
    },
  },
  {
    country: "Dominican Republic",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/do.png",
    },
  },
  {
    country: "Ecuador",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ec.png" },
  },
  {
    country: "Egypt",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/eg.png" },
  },
  {
    country: "El Salvador",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/sv.png",
    },
  },
  {
    country: "Equatorial Guinea",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/gq.png" },
  },
  {
    country: "Eritrea",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/er.png" },
  },
  {
    country: "Estonia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ee.png" },
  },
  {
    country: "Ethiopia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/et.png" },
  },
  {
    country: "Falkland Islands (Malvinas)",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/fk.png",
    },
  },
  {
    country: "Faroe Islands",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/fo.png" },
  },
  {
    country: "Fiji",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/fj.png" },
  },
  {
    country: "Finland",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/fi.png" },
  },
  {
    country: "France",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/fr.png" },
  },
  {
    country: "French Guiana",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/gf.png" },
  },
  {
    country: "French Polynesia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/pf.png" },
  },
  {
    country: "Gabon",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ga.png" },
  },
  {
    country: "Gambia",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/gm.png",
    },
  },
  {
    country: "Georgia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ge.png" },
  },
  {
    country: "Germany",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/de.png" },
  },
  {
    country: "Ghana",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/gh.png" },
  },
  {
    country: "Gibraltar",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/gi.png",
    },
  },
  {
    country: "Greece",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/gr.png" },
  },
  {
    country: "Greenland",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/gl.png" },
  },
  {
    country: "Grenada",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/gd.png",
    },
  },
  {
    country: "Guadeloupe",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/gp.png",
    },
  },
  {
    country: "Guatemala",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/gt.png",
    },
  },
  {
    country: "Guinea",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/gn.png" },
  },
  {
    country: "Guinea-Bissau",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/gw.png" },
  },
  {
    country: "Guyana",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/gy.png" },
  },
  {
    country: "Haiti",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/ht.png",
    },
  },
  {
    country: "Holy See (Vatican City State)",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/va.png",
    },
  },
  {
    country: "Honduras",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/hn.png" },
  },
  {
    country: "Hong Kong",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/hk.png",
    },
  },
  {
    country: "Hungary",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/hu.png" },
  },
  {
    country: "Iceland",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/is.png" },
  },
  {
    country: "India",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/in.png" },
  },
  {
    country: "Indonesia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/id.png" },
  },
  {
    country: "Iran",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ir.png" },
  },
  {
    country: "Iraq",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/iq.png" },
  },
  {
    country: "Ireland",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ie.png" },
  },
  {
    country: "Isle of Man",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/im.png",
    },
  },
  {
    country: "Italy",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/it.png",
    },
  },
  {
    country: "Jamaica",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/jm.png",
    },
  },
  {
    country: "Japan",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/jp.png" },
  },
  {
    country: "Jordan",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/jo.png" },
  },
  {
    country: "Kazakhstan",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/kz.png" },
  },
  {
    country: "Kenya",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ke.png" },
  },
  {
    country: "Kuwait",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/kw.png",
    },
  },
  {
    country: "Kyrgyzstan",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/kg.png" },
  },
  {
    country: "Lao People's Democratic Republic",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/la.png" },
  },
  {
    country: "Latvia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/lv.png" },
  },
  {
    country: "Lebanon",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/lb.png",
    },
  },
  {
    country: "Lesotho",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/ls.png",
    },
  },
  {
    country: "Liberia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/lr.png" },
  },
  {
    country: "Libyan Arab Jamahiriya",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ly.png" },
  },
  {
    country: "Liechtenstein",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/li.png",
    },
  },
  {
    country: "Lithuania",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/lt.png" },
  },
  {
    country: "Luxembourg",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/lu.png",
    },
  },
  {
    country: "MS Zaandam",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/unknown.png" },
  },
  {
    country: "Macao",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/mo.png",
    },
  },
  {
    country: "Macedonia",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/mk.png",
    },
  },
  {
    country: "Madagascar",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/mg.png" },
  },
  {
    country: "Malawi",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/mw.png" },
  },
  {
    country: "Malaysia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/my.png" },
  },
  {
    country: "Maldives",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/mv.png" },
  },
  {
    country: "Mali",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ml.png" },
  },
  {
    country: "Malta",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/mt.png",
    },
  },
  {
    country: "Marshall Islands",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/mh.png" },
  },
  {
    country: "Martinique",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/mq.png",
    },
  },
  {
    country: "Mauritania",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/mr.png",
    },
  },
  {
    country: "Mauritius",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/mu.png",
    },
  },
  {
    country: "Mayotte",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/yt.png",
    },
  },
  {
    country: "Mexico",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/mx.png" },
  },
  {
    country: "Micronesia",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/fm.png",
    },
  },
  {
    country: "Moldova",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/md.png" },
  },
  {
    country: "Monaco",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/mc.png",
    },
  },
  {
    country: "Mongolia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/mn.png" },
  },
  {
    country: "Montenegro",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/me.png" },
  },
  {
    country: "Montserrat",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/ms.png",
    },
  },
  {
    country: "Morocco",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ma.png" },
  },
  {
    country: "Mozambique",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/mz.png" },
  },
  {
    country: "Myanmar",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/mm.png" },
  },
  {
    country: "Namibia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/na.png" },
  },
  {
    country: "Nepal",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/np.png" },
  },
  {
    country: "Netherlands",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/nl.png" },
  },
  {
    country: "New Caledonia",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/nc.png",
    },
  },
  {
    country: "New Zealand",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/nz.png" },
  },
  {
    country: "Nicaragua",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ni.png" },
  },
  {
    country: "Niger",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ne.png" },
  },
  {
    country: "Nigeria",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ng.png" },
  },
  {
    country: "Norway",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/no.png" },
  },
  {
    country: "Oman",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/om.png" },
  },
  {
    country: "Pakistan",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/pk.png" },
  },
  {
    country: "Palestine",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ps.png" },
  },
  {
    country: "Panama",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/pa.png" },
  },
  {
    country: "Papua New Guinea",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/pg.png" },
  },
  {
    country: "Paraguay",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/py.png" },
  },
  {
    country: "Peru",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/pe.png" },
  },
  {
    country: "Philippines",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ph.png" },
  },
  {
    country: "Poland",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/pl.png" },
  },
  {
    country: "Portugal",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/pt.png" },
  },
  {
    country: "Qatar",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/qa.png",
    },
  },
  {
    country: "Romania",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ro.png" },
  },
  {
    country: "Russia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ru.png" },
  },
  {
    country: "Rwanda",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/rw.png" },
  },
  {
    country: "Réunion",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/re.png",
    },
  },
  {
    country: "S. Korea",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/kr.png" },
  },
  {
    country: "Saint Helena",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/sh.png",
    },
  },
  {
    country: "Saint Kitts and Nevis",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/kn.png",
    },
  },
  {
    country: "Saint Lucia",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/lc.png",
    },
  },
  {
    country: "Saint Martin",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/mf.png",
    },
  },
  {
    country: "Saint Pierre Miquelon",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/pm.png",
    },
  },
  {
    country: "Saint Vincent and the Grenadines",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/vc.png",
    },
  },
  {
    country: "Samoa",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/ws.png",
    },
  },
  {
    country: "San Marino",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/sm.png",
    },
  },
  {
    country: "Sao Tome and Principe",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/st.png" },
  },
  {
    country: "Saudi Arabia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/sa.png" },
  },
  {
    country: "Senegal",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/sn.png" },
  },
  {
    country: "Serbia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/rs.png" },
  },
  {
    country: "Seychelles",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/sc.png",
    },
  },
  {
    country: "Sierra Leone",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/sl.png" },
  },
  {
    country: "Singapore",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/sg.png",
    },
  },
  {
    country: "Sint Maarten",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/sx.png",
    },
  },
  {
    country: "Slovakia",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/sk.png",
    },
  },
  {
    country: "Slovenia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/si.png" },
  },
  {
    country: "Solomon Islands",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/sb.png" },
  },
  {
    country: "Somalia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/so.png" },
  },
  {
    country: "South Africa",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/za.png" },
  },
  {
    country: "South Sudan",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/ss.png",
    },
  },
  {
    country: "Spain",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/es.png" },
  },
  {
    country: "Sri Lanka",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/lk.png" },
  },
  {
    country: "Sudan",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/sd.png" },
  },
  {
    country: "Suriname",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/sr.png" },
  },
  {
    country: "Swaziland",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/sz.png",
    },
  },
  {
    country: "Sweden",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/se.png" },
  },
  {
    country: "Switzerland",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ch.png" },
  },
  {
    country: "Syrian Arab Republic",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/sy.png" },
  },
  {
    country: "Taiwan",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/tw.png" },
  },
  {
    country: "Tajikistan",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/tj.png" },
  },
  {
    country: "Tanzania",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/tz.png" },
  },
  {
    country: "Thailand",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/th.png" },
  },
  {
    country: "Timor-Leste",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/tl.png",
    },
  },
  {
    country: "Togo",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/tg.png" },
  },
  {
    country: "Trinidad and Tobago",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/tt.png" },
  },
  {
    country: "Tunisia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/tn.png" },
  },
  {
    country: "Turkey",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/tr.png" },
  },
  {
    country: "Turks and Caicos Islands",
    countryInfo: {
      flag: "https://disease.sh/assets/img/flags/tc.png",
    },
  },
  {
    country: "UAE",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ae.png" },
  },
  {
    country: "UK",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/gb.png" },
  },
  {
    country: "USA",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/us.png" },
  },
  {
    country: "Uganda",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ug.png" },
  },
  {
    country: "Ukraine",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ua.png" },
  },
  {
    country: "Uruguay",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/uy.png" },
  },
  {
    country: "Uzbekistan",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/uz.png" },
  },
  {
    country: "Vanuatu",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/vu.png" },
  },
  {
    country: "Venezuela",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ve.png" },
  },
  {
    country: "Vietnam",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/vn.png" },
  },

  {
    country: "Yemen",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/ye.png" },
  },
  {
    country: "Zambia",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/zm.png" },
  },
  {
    country: "Zimbabwe",
    countryInfo: { flag: "https://disease.sh/assets/img/flags/zw.png" },
  },
];
