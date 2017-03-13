'use strict';

var CountryList = (function () {
  function CountryList () {
    var countries = initCountries();
    
    this.forEach = Array.prototype.forEach.bind(countries);
    
    this.getCountries = function () {
      return countries;
    }
    
    return this;
  }
  
  function removeCountry (country) {
    var countries = this.getCountries(),
        index = countries.indexOf(country);
    countries.splice(index, 1);
  }
  
  function getCountriesOfContinent (continent) {
    var countries = this.getCountries();
    if (continent != 'All') {
      countries = countries.filter(country => country.isOwnContinent(continent));
    }
    return countries;
  }
  
  CountryList.prototype.removeCountry = removeCountry;
  CountryList.prototype.getCountriesOfContinent = getCountriesOfContinent;
  
  function initCountries () {
    return countriesData.split('\n').map(countryData => {
      return new Country(...countryData.split('; '));
    });
  }
  
  var countriesData = `Afghanistan; 31056997; 1677025; Asia
Albania; 3581655; 74457; Europe
Algeria; 32930091; 6168706; Africa
American Samoa; 57794; 515; Oceania
Andorra; 71201; 1212; Europe
Angola; 12127071; 3228953; Africa
Anguilla; 13477; 264; America
Antigua & Barbuda; 69108; 1147; America
Argentina; 39921833; 7166245; America
Armenia; 2976372; 77182; Asia
Aruba; 71891; 499; America
Australia; 20264082; 19908941; Oceania
Austria; 8192880; 217223; Europe
Azerbaijan; 7961619; 224294; Asia
Bahamas, The; 303770; 36104; America
Bahrain; 698585; 1722; Asia
Bangladesh; 147365352; 372960; Asia
Barbados; 279912; 1116; America
Belarus; 10293011; 537684; Asia
Belgium; 10379067; 79067; Europe
Belize; 287730; 59481; America
Benin; 7862944; 291685; Africa
Bermuda; 65773; 137; America
Bhutan; 2279723; 121730; Asia
Bolivia; 8989046; 2845322; America
Bosnia & Herzegovina; 4498976; 132424; Europe
Botswana; 1639833; 1554958; Africa
Brazil; 188078227; 22045989; America
British Virgin Is.; 23098; 396; America
Brunei; 379444; 14944; Asia
Bulgaria; 7385367; 287256; Europe
Burkina Faso; 13902972; 710178; Africa
Burma; 47382633; 1757315; Asia
Burundi; 8090068; 72079; Africa
Cambodia; 13881427; 468893; Asia
Cameroon; 17340702; 1231389; Africa
Canada; 33098932; 25860295; America
Cape Verde; 420979; 10445; Africa
Cayman Islands; 45436; 678; America
Central African Rep.; 4303356; 1613528; Africa
Chad; 9944201; 3325560; Africa
Chile; 16134219; 1960500; America
China; 1313973713; 24856126; Asia
Colombia; 43593035; 2949776; America
Comoros; 690948; 5620; Africa
Congo, Dem. Rep.; 62660551; 6074611; Africa
Congo, Repub. of the; 3702314; 885780; Africa
Cook Islands; 21388; 621; Oceania
Costa Rica; 4075261; 132349; America
Cote d'Ivoire; 17654843; 835171; Africa
Croatia; 4494749; 146443; Europe
Cuba; 11382820; 287127; America
Cyprus; 784301; 23957; Asia
Czech Republic; 10235455; 204262; Europe
Denmark; 5450661; 111613; Europe
Djibouti; 486530; 59570; Africa
Dominica; 68910; 1952; America
Dominican Republic; 9183984; 126210; America
East Timor; 1062777; 38868; Asia
Ecuador; 13547510; 734420; America
Egypt; 78887007; 2593755; Africa
El Salvador; 6822378; 54493; America
Equatorial Guinea; 540109; 72652; Africa
Eritrea; 4786994; 314218; Africa
Estonia; 1324333; 117135; Europe
Ethiopia; 74777981; 2919258; Africa
Faroe Islands; 47246; 3623; Europe
Fiji; 905949; 47319; Oceania
Finland; 5231372; 875795; Europe
France; 60876136; 1416807; Europe
French Guiana; 199509; 235690; America
French Polynesia; 274578; 10792; Oceania
Gabon; 1424906; 693257; Africa
Gambia, The; 1641564; 29267; Africa
Gaza Strip; 1428757; 932; Asia
Georgia; 4661473; 180523; Asia
Germany; 82422299; 924684; Europe
Ghana; 22409572; 620201; Africa
Gibraltar; 27928; 18; Europe
Greece; 10688058; 341724; Europe
Greenland; 56361; 5610162; America
Grenada; 89703; 890; America
Guadeloupe; 452776; 4610; America
Guam; 171019; 1401; Oceania
Guatemala; 12293545; 282025; America
Guernsey; 65409; 202; Europe
Guinea; 9690222; 636769; Africa
Guinea-Bissau; 1442029; 93550; Africa
Guyana; 767245; 556772; America
Haiti; 8308504; 71872; America
Honduras; 7326496; 290313; America
Hong Kong; 6940432; 2828; Asia
Hungary; 9981334; 240947; Europe
Iceland; 299388; 266770; Europe
India; 1095351995; 8514858; Asia
Indonesia; 245452739; 4971349; Asia
Iran; 68688433; 4268320; Asia
Iraq; 26783383; 1132016; Asia
Ireland; 4062235; 182025; Europe
Isle of Man; 75441; 1481; Europe
Israel; 6352117; 53794; Asia
Italy; 58133509; 780185; Europe
Jamaica; 2758124; 28466; America
Japan; 127463611; 978592; Asia
Jersey; 91084; 300; Europe
Jordan; 5906760; 239057; Asia
Kazakhstan; 15233244; 7037807; Asia
Kenya; 34707817; 1509063; Africa
Kiribati; 105432; 2100; Oceania
Korea, North; 23113019; 312198; Asia
Korea, South; 48846823; 255063; Asia
Kuwait; 2418393; 46153; Asia
Kyrgyzstan; 5213898; 514115; Asia
Laos; 6368481; 613312; Asia
Latvia; 2274735; 167285; Europe
Lebanon; 3874050; 26936; Asia
Lesotho; 2022331; 78619; Africa
Liberia; 3042004; 288448; Africa
Libya; 5900754; 4557208; Africa
Liechtenstein; 33987; 414; Europe
Lithuania; 3585906; 168868; Europe
Luxembourg; 474413; 6697; Europe
Macau; 453125; 72; Asia
Macedonia; 2050554; 65612; Europe
Madagascar; 18595469; 1520433; Africa
Malawi; 13013926; 306863; Africa
Malaysia; 24385858; 854052; Asia
Maldives; 359008; 777; Asia
Mali; 11716829; 3211600; Africa
Malta; 400214; 818; Europe
Marshall Islands; 60422; 30701; Oceania
Martinique; 436131; 2849; America
Mauritania; 3177388; 2669513; Africa
Mauritius; 1240827; 5283; Africa
Mayotte; 201234; 968; Africa
Mexico; 107449525; 5108904; America
Micronesia, Fed. St.; 108004; 1818; Oceania
Moldova; 4466706; 87653; Asia
Monaco; 32543; 5; Europe
Mongolia; 2832224; 4051060; Asia
Montserrat; 9439; 264; America
Morocco; 33241259; 1156564; Africa
Mozambique; 19686505; 2076118; Africa
Namibia; 2044147; 2137832; Africa
Nauru; 13287; 54; Oceania
Nepal; 28287147; 381198; Asia
Netherlands; 16491461; 107552; Europe
Netherlands Antilles; 221736; 2486; America
New Caledonia; 219246; 49365; Oceania
New Zealand; 4076140; 695881; Oceania
Nicaragua; 5570129; 335389; America
Niger; 12525094; 3281530; Africa
Nigeria; 131859731; 2392559; Africa
N. Mariana Islands; 82459; 1235; Oceania
Norway; 4610820; 838647; Europe
Oman; 3102229; 550271; Asia
Pakistan; 165803560; 2082204; Asia
Palau; 20579; 1186; Oceania
Panama; 3191319; 202538; America
Papua New Guinea; 5670544; 1198755; Oceania
Paraguay; 6506464; 1053482; America
Peru; 28302603; 3328719; America
Philippines; 89468677; 777000; Asia
Poland; 38536869; 809854; Europe
Portugal; 10605870; 239292; Europe
Puerto Rico; 3927188; 35716; America
Qatar; 885359; 29621; Asia
Reunion; 787584; 6519; Africa
Romania; 22303552; 615125; Europe
Russia; 142893540; 44224768; Asia
Rwanda; 8648248; 68215; Africa
Saint Helena; 7502; 1069; Africa
Saint Kitts & Nevis; 39129; 675; America
Saint Lucia; 168458; 1595; America
St Pierre & Miquelon; 7026; 626; America
Saint Vincent and the Grenadines; 117848; 1007; America
Samoa; 176908; 7624; Oceania
San Marino; 29251; 157; Europe
Sao Tome & Principe; 193413; 2592; Africa
Saudi Arabia; 27019731; 5077907; Asia
Senegal; 11987121; 508132; Africa
Serbia; 9396411; 228854; Europe
Seychelles; 81541; 1178; Africa
Sierra Leone; 6005250; 185806; Africa
Singapore; 4492150; 1794; Asia
Slovakia; 5439448; 126508; Europe
Slovenia; 2010347; 52507; Europe
Solomon Islands; 552438; 73685; Oceania
Somalia; 8863338; 1651531; Africa
South Africa; 44187637; 3159572; Africa
Spain; 40397842; 1307385; Europe
Sri Lanka; 20222240; 169929; Asia
Sudan; 41236378; 6490047; Africa
Suriname; 439117; 422869; America
Swaziland; 1136334; 44970; Africa
Sweden; 9016596; 1165406; Europe
Switzerland; 7523934; 106941; Europe
Syria; 18881361; 479616; Asia
Taiwan; 23036087; 93188; Asia
Tajikistan; 7320815; 370629; Asia
Tanzania; 37445392; 2447775; Africa
Thailand; 64631595; 1331260; Asia
Togo; 5548702; 147073; Africa
Tonga; 114689; 1937; Oceania
Trinidad & Tobago; 1065842; 13281; America
Tunisia; 10175014; 423749; Africa
Turkey; 70413958; 2021702; Asia
Turkmenistan; 5042920; 1264179; Asia
Turks & Caicos Is; 21152; 1113; America
Tuvalu; 11810; 67; Oceania
Uganda; 28195754; 611343; Africa
Ukraine; 46710816; 1563583; Asia
United Arab Emirates; 2602713; 214659; Asia
United Kingdom; 60609153; 634083; Europe
United States; 298444215; 24945377; America
Uruguay; 3431932; 456409; America
Uzbekistan; 27307134; 1158766; Asia
Vanuatu; 208869; 31598; Oceania
Venezuela; 25730435; 2362209; America
Vietnam; 84402966; 853560; Asia
Virgin Islands; 108605; 4946; America
Wallis and Futuna; 16025; 709; Oceania
West Bank; 2460492; 15177; Asia
Western Sahara; 273008; 688940; Africa
Yemen; 21456188; 1367442; Asia
Zambia; 11502010; 1949270; Africa
Zimbabwe; 12236805; 1011602; Africa`;

  return CountryList;
})();
