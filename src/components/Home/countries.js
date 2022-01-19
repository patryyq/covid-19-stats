const countries = [
    {
        "label": "World",
        "code": "WD"
    },
    {
        "label": "USA",
        "code": "US"
    },
    {
        "label": "India",
        "code": "IN"
    },
    {
        "label": "Brazil",
        "code": "BR"
    },
    {
        "label": "UK",
        "code": "GB"
    },
    {
        "label": "France",
        "code": "FR"
    },
    {
        "label": "Russia",
        "code": "RU"
    },
    {
        "label": "Turkey",
        "code": "TR"
    },
    {
        "label": "Italy",
        "code": "IT"
    },
    {
        "label": "Germany",
        "code": "DE"
    },
    {
        "label": "Spain",
        "code": "ES"
    },
    {
        "label": "Argentina",
        "code": "AR"
    },
    {
        "label": "Iran",
        "code": "IR"
    },
    {
        "label": "Colombia",
        "code": "CO"
    },
    {
        "label": "Indonesia",
        "code": "ID"
    },
    {
        "label": "Poland",
        "code": "PL"
    },
    {
        "label": "Mexico",
        "code": "MX"
    },
    {
        "label": "Ukraine",
        "code": "UA"
    },
    {
        "label": "South Africa",
        "code": "ZA"
    },
    {
        "label": "Netherlands",
        "code": "NL"
    },
    {
        "label": "Philippines",
        "code": "PH"
    },
    {
        "label": "Malaysia",
        "code": "MY"
    },
    {
        "label": "Canada",
        "code": "CA"
    },
    {
        "label": "Czechia",
        "code": "CZ"
    },
    {
        "label": "Peru",
        "code": "PE"
    },
    {
        "label": "Belgium",
        "code": "BE"
    },
    {
        "label": "Thailand",
        "code": "TH"
    },
    {
        "label": "Iraq",
        "code": "IQ"
    },
    {
        "label": "Vietnam",
        "code": "VN"
    },
    {
        "label": "Romania",
        "code": "RO"
    },
    {
        "label": "Chile",
        "code": "CL"
    },
    {
        "label": "Japan",
        "code": "JP"
    },
    {
        "label": "Portugal",
        "code": "PT"
    },
    {
        "label": "Bangladesh",
        "code": "BD"
    },
    {
        "label": "Israel",
        "code": "IL"
    },
    {
        "label": "Greece",
        "code": "GR"
    },
    {
        "label": "Switzerland",
        "code": "CH"
    },
    {
        "label": "Sweden",
        "code": "SE"
    },
    {
        "label": "Serbia",
        "code": "RS"
    },
    {
        "label": "Austria",
        "code": "AT"
    },
    {
        "label": "Pakistan",
        "code": "PK"
    },
    {
        "label": "Hungary",
        "code": "HU"
    },
    {
        "label": "Australia",
        "code": "AU"
    },
    {
        "label": "Jordan",
        "code": "JO"
    },
    {
        "label": "Ireland",
        "code": "IE"
    },
    {
        "label": "Morocco",
        "code": "MA"
    },
    {
        "label": "Kazakhstan",
        "code": "KZ"
    },
    {
        "label": "Cuba",
        "code": "CU"
    },
    {
        "label": "Denmark",
        "code": "DK"
    },
    {
        "label": "Georgia",
        "code": "GE"
    },
    {
        "label": "Slovakia",
        "code": "SK"
    },
    {
        "label": "Nepal",
        "code": "NP"
    },
    {
        "label": "Bulgaria",
        "code": "BG"
    },
    {
        "label": "UAE",
        "code": "AE"
    },
    {
        "label": "Lebanon",
        "code": "LB"
    },
    {
        "label": "Croatia",
        "code": "HR"
    },
    {
        "label": "Tunisia",
        "code": "TN"
    },
    {
        "label": "Belarus",
        "code": "BY"
    },
    {
        "label": "Bolivia",
        "code": "BO"
    },
    {
        "label": "S. Korea",
        "code": "KR"
    },
    {
        "label": "Guatemala",
        "code": "GT"
    },
    {
        "label": "Azerbaijan",
        "code": "AZ"
    },
    {
        "label": "Costa Rica",
        "code": "CR"
    },
    {
        "label": "Sri Lanka",
        "code": "LK"
    },
    {
        "label": "Saudi Arabia",
        "code": "SA"
    },
    {
        "label": "Ecuador",
        "code": "EC"
    },
    {
        "label": "Lithuania",
        "code": "LT"
    },
    {
        "label": "Panama",
        "code": "PA"
    },
    {
        "label": "Myanmar",
        "code": "MM"
    },
    {
        "label": "Slovenia",
        "code": "SI"
    },
    {
        "label": "Paraguay",
        "code": "PY"
    },
    {
        "label": "Dominican Republic",
        "code": "DO"
    },
    {
        "label": "Uruguay",
        "code": "UY"
    },
    {
        "label": "Norway",
        "code": "NO"
    },
    {
        "label": "Ethiopia",
        "code": "ET"
    },
    {
        "label": "Venezuela",
        "code": "VE"
    },
    {
        "label": "Palestine",
        "code": "PS"
    },
    {
        "label": "Kuwait",
        "code": "KW"
    },
    {
        "label": "Mongolia",
        "code": "MN"
    },
    {
        "label": "Egypt",
        "code": "EG"
    },
    {
        "label": "Libyan Arab Jamahiriya",
        "code": "LY"
    },
    {
        "label": "Honduras",
        "code": "HN"
    },
    {
        "label": "Moldova",
        "code": "MD"
    },
    {
        "label": "Armenia",
        "code": "AM"
    },
    {
        "label": "Finland",
        "code": "FI"
    },
    {
        "label": "Kenya",
        "code": "KE"
    },
    {
        "label": "Oman",
        "code": "OM"
    },
    {
        "label": "Bosnia",
        "code": "BA"
    },
    {
        "label": "Bahrain",
        "code": "BH"
    },
    {
        "label": "Latvia",
        "code": "LV"
    },
    {
        "label": "Singapore",
        "code": "SG"
    },
    {
        "label": "Zambia",
        "code": "ZM"
    },
    {
        "label": "Qatar",
        "code": "QA"
    },
    {
        "label": "Estonia",
        "code": "EE"
    },
    {
        "label": "Nigeria",
        "code": "NG"
    },
    {
        "label": "Macedonia",
        "code": "MK"
    },
    {
        "label": "Botswana",
        "code": "BW"
    },
    {
        "label": "Zimbabwe",
        "code": "ZW"
    },
    {
        "label": "Algeria",
        "code": "DZ"
    },
    {
        "label": "Albania",
        "code": "AL"
    },
    {
        "label": "Mozambique",
        "code": "MZ"
    },
    {
        "label": "Cyprus",
        "code": "CY"
    },
    {
        "label": "Uzbekistan",
        "code": "UZ"
    },
    {
        "label": "Montenegro",
        "code": "ME"
    },
    {
        "label": "Kyrgyzstan",
        "code": "KG"
    },
    {
        "label": "Afghanistan",
        "code": "AF"
    },
    {
        "label": "Uganda",
        "code": "UG"
    },
    {
        "label": "Namibia",
        "code": "NA"
    },
    {
        "label": "Ghana",
        "code": "GH"
    },
    {
        "label": "El Salvador",
        "code": "SV"
    },
    {
        "label": "Rwanda",
        "code": "RW"
    },
    {
        "label": "Cambodia",
        "code": "KH"
    },
    {
        "label": "Lao People's Democratic Republic",
        "code": "LA"
    },
    {
        "label": "Luxembourg",
        "code": "LU"
    },
    {
        "label": "Cameroon",
        "code": "CM"
    },
    {
        "label": "Jamaica",
        "code": "JM"
    },
    {
        "label": "China",
        "code": "CN"
    },
    {
        "label": "Réunion",
        "code": "RE"
    },
    {
        "label": "Maldives",
        "code": "MV"
    },
    {
        "label": "Trinidad and Tobago",
        "code": "TT"
    },
    {
        "label": "Angola",
        "code": "AO"
    },
    {
        "label": "DRC",
        "code": "CD"
    },
    {
        "label": "Malawi",
        "code": "MW"
    },
    {
        "label": "Senegal",
        "code": "SN"
    },
    {
        "label": "Côte d'Ivoire",
        "code": "CI"
    },
    {
        "label": "Swaziland",
        "code": "SZ"
    },
    {
        "label": "French Guiana",
        "code": "GF"
    },
    {
        "label": "Malta",
        "code": "MT"
    },
    {
        "label": "Suriname",
        "code": "SR"
    },
    {
        "label": "Guadeloupe",
        "code": "GP"
    },
    {
        "label": "Fiji",
        "code": "FJ"
    },
    {
        "label": "Madagascar",
        "code": "MG"
    },
    {
        "label": "Cabo Verde",
        "code": "CV"
    },
    {
        "label": "Mauritania",
        "code": "MR"
    },
    {
        "label": "Syrian Arab Republic",
        "code": "SY"
    },
    {
        "label": "Martinique",
        "code": "MQ"
    },
    {
        "label": "Sudan",
        "code": "SD"
    },
    {
        "label": "French Polynesia",
        "code": "PF"
    },
    {
        "label": "Guyana",
        "code": "GY"
    },
    {
        "label": "Gabon",
        "code": "GA"
    },
    {
        "label": "Iceland",
        "code": "IS"
    },
    {
        "label": "Belize",
        "code": "BZ"
    },
    {
        "label": "Papua New Guinea",
        "code": "PG"
    },
    {
        "label": "Burundi",
        "code": "BI"
    },
    {
        "label": "Guinea",
        "code": "GN"
    },
    {
        "label": "Channel Islands",
        "code": "JE"
    },
    {
        "label": "Togo",
        "code": "TG"
    },
    {
        "label": "Barbados",
        "code": "BB"
    },
    {
        "label": "Mayotte",
        "code": "YT"
    },
    {
        "label": "Lesotho",
        "code": "LS"
    },
    {
        "label": "Tanzania",
        "code": "TZ"
    },
    {
        "label": "Curaçao",
        "code": "CW"
    },
    {
        "label": "Bahamas",
        "code": "BS"
    },
    {
        "label": "Seychelles",
        "code": "SC"
    },
    {
        "label": "Aruba",
        "code": "AW"
    },
    {
        "label": "Andorra",
        "code": "AD"
    },
    {
        "label": "Haiti",
        "code": "HT"
    },
    {
        "label": "Mali",
        "code": "ML"
    },
    {
        "label": "Benin",
        "code": "BJ"
    },
    {
        "label": "Mauritius",
        "code": "MU"
    },
    {
        "label": "Somalia",
        "code": "SO"
    },
    {
        "label": "Congo",
        "code": "CG"
    },
    {
        "label": "Timor-Leste",
        "code": "TL"
    },
    {
        "label": "Burkina Faso",
        "code": "BF"
    },
    {
        "label": "Nicaragua",
        "code": "NI"
    },
    {
        "label": "Taiwan",
        "code": "TW"
    },
    {
        "label": "Tajikistan",
        "code": "TJ"
    },
    {
        "label": "South Sudan",
        "code": "SS"
    },
    {
        "label": "Brunei",
        "code": "BN"
    },
    {
        "label": "Saint Lucia",
        "code": "LC"
    },
    {
        "label": "Equatorial Guinea",
        "code": "GQ"
    },
    {
        "label": "New Zealand",
        "code": "NZ"
    },
    {
        "label": "Djibouti",
        "code": "DJ"
    },
    {
        "label": "Isle of Man",
        "code": "IM"
    },
    {
        "label": "New Caledonia",
        "code": "NC"
    },
    {
        "label": "Hong Kong",
        "code": "HK"
    },
    {
        "label": "Central African Republic",
        "code": "CF"
    },
    {
        "label": "Cayman Islands",
        "code": "KY"
    },
    {
        "label": "Gambia",
        "code": "GM"
    },
    {
        "label": "Yemen",
        "code": "YE"
    },
    {
        "label": "Gibraltar",
        "code": "GI"
    },
    {
        "label": "San Marino",
        "code": "SM"
    },
    {
        "label": "Grenada",
        "code": "GD"
    },
    {
        "label": "Eritrea",
        "code": "ER"
    },
    {
        "label": "Niger",
        "code": "NE"
    },
    {
        "label": "Faroe Islands",
        "code": "FO"
    },
    {
        "label": "Bermuda",
        "code": "BM"
    },
    {
        "label": "Comoros",
        "code": "KM"
    },
    {
        "label": "Dominica",
        "code": "DM"
    },
    {
        "label": "Sierra Leone",
        "code": "SL"
    },
    {
        "label": "Liberia",
        "code": "LR"
    },
    {
        "label": "Sint Maarten",
        "code": "SX"
    },
    {
        "label": "Guinea-Bissau",
        "code": "GW"
    },
    {
        "label": "Liechtenstein",
        "code": "LI"
    },
    {
        "label": "Saint Vincent and the Grenadines",
        "code": "VC"
    },
    {
        "label": "Chad",
        "code": "TD"
    },
    {
        "label": "Monaco",
        "code": "MC"
    },
    {
        "label": "Greenland",
        "code": "GL"
    },
    {
        "label": "Saint Martin",
        "code": "MF"
    },
    {
        "label": "Antigua and Barbuda",
        "code": "AG"
    },
    {
        "label": "Sao Tome and Principe",
        "code": "ST"
    },
    {
        "label": "British Virgin Islands",
        "code": "VG"
    },
    {
        "label": "Caribbean Netherlands",
        "code": "BQ"
    },
    {
        "label": "Turks and Caicos Islands",
        "code": "TC"
    },
    {
        "label": "Saint Kitts and Nevis",
        "code": "KN"
    },
    {
        "label": "Bhutan",
        "code": "BT"
    },
    {
        "label": "St. Barth",
        "code": "BL"
    },
    {
        "label": "Anguilla",
        "code": "AI"
    },
    {
        "label": "Wallis and Futuna",
        "code": "WF"
    },
    {
        "label": "Saint Pierre Miquelon",
        "code": "PM"
    },
    {
        "label": "Montserrat",
        "code": "MS"
    },
    {
        "label": "Falkland Islands (Malvinas)",
        "code": "FK"
    },
    {
        "label": "Macao",
        "code": "MO"
    },
    {
        "label": "Palau",
        "code": "PW"
    },
    {
        "label": "Holy See (Vatican City State)",
        "code": "VA"
    },
    {
        "label": "Solomon Islands",
        "code": "SB"
    },
    {
        "label": "Western Sahara",
        "code": "EH"
    },
    {
        "label": "Marshall Islands",
        "code": "MH"
    },
    {
        "label": "Vanuatu",
        "code": "VU"
    },
    {
        "label": "Samoa",
        "code": "WS"
    },
    {
        "label": "Saint Helena",
        "code": "SH"
    },
    {
        "label": "Micronesia",
        "code": "FM"
    },
    {
        "label": "Tonga",
        "code": "TO"
    }
]

export default countries