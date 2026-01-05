// Список всех стран ISO 3166-1 alpha-2, отсортированный по алфавиту
// Используется для заполнения select в checkout.html

const COUNTRIES = [
    { code: 'AF', name: 'Afghanistan' },
    { code: 'AL', name: 'Albania' },
    { code: 'DZ', name: 'Algeria' },
    { code: 'AD', name: 'Andorra' },
    { code: 'AO', name: 'Angola' },
    { code: 'AR', name: 'Argentina' },
    { code: 'AM', name: 'Armenia' },
    { code: 'AU', name: 'Australia' },
    { code: 'AT', name: 'Austria' },
    { code: 'AZ', name: 'Azerbaijan' },
    { code: 'BS', name: 'Bahamas' },
    { code: 'BH', name: 'Bahrain' },
    { code: 'BD', name: 'Bangladesh' },
    { code: 'BB', name: 'Barbados' },
    { code: 'BY', name: 'Belarus' },
    { code: 'BE', name: 'Belgium' },
    { code: 'BZ', name: 'Belize' },
    { code: 'BJ', name: 'Benin' },
    { code: 'BT', name: 'Bhutan' },
    { code: 'BO', name: 'Bolivia' },
    { code: 'BA', name: 'Bosnia and Herzegovina' },
    { code: 'BW', name: 'Botswana' },
    { code: 'BR', name: 'Brazil' },
    { code: 'BN', name: 'Brunei' },
    { code: 'BG', name: 'Bulgaria' },
    { code: 'BF', name: 'Burkina Faso' },
    { code: 'BI', name: 'Burundi' },
    { code: 'CV', name: 'Cape Verde' },
    { code: 'KH', name: 'Cambodia' },
    { code: 'CM', name: 'Cameroon' },
    { code: 'CA', name: 'Canada' },
    { code: 'CF', name: 'Central African Republic' },
    { code: 'TD', name: 'Chad' },
    { code: 'CL', name: 'Chile' },
    { code: 'CN', name: 'China' },
    { code: 'CO', name: 'Colombia' },
    { code: 'KM', name: 'Comoros' },
    { code: 'CG', name: 'Republic of the Congo' },
    { code: 'CD', name: 'Democratic Republic of the Congo' },
    { code: 'CR', name: 'Costa Rica' },
    { code: 'CI', name: 'Ivory Coast' },
    { code: 'HR', name: 'Croatia' },
    { code: 'CU', name: 'Cuba' },
    { code: 'CY', name: 'Cyprus' },
    { code: 'CZ', name: 'Czech Republic' },
    { code: 'DK', name: 'Denmark' },
    { code: 'DJ', name: 'Djibouti' },
    { code: 'DM', name: 'Dominica' },
    { code: 'DO', name: 'Dominican Republic' },
    { code: 'EC', name: 'Ecuador' },
    { code: 'EG', name: 'Egypt' },
    { code: 'SV', name: 'El Salvador' },
    { code: 'GQ', name: 'Equatorial Guinea' },
    { code: 'ER', name: 'Eritrea' },
    { code: 'EE', name: 'Estonia' },
    { code: 'SZ', name: 'Eswatini' },
    { code: 'ET', name: 'Ethiopia' },
    { code: 'FJ', name: 'Fiji' },
    { code: 'FI', name: 'Finland' },
    { code: 'FR', name: 'France' },
    { code: 'GA', name: 'Gabon' },
    { code: 'GM', name: 'Gambia' },
    { code: 'GE', name: 'Georgia' },
    { code: 'DE', name: 'Germany' },
    { code: 'GH', name: 'Ghana' },
    { code: 'GR', name: 'Greece' },
    { code: 'GD', name: 'Grenada' },
    { code: 'GT', name: 'Guatemala' },
    { code: 'GN', name: 'Guinea' },
    { code: 'GW', name: 'Guinea-Bissau' },
    { code: 'GY', name: 'Guyana' },
    { code: 'HT', name: 'Haiti' },
    { code: 'HN', name: 'Honduras' },
    { code: 'HK', name: 'Hong Kong' },
    { code: 'HU', name: 'Hungary' },
    { code: 'IS', name: 'Iceland' },
    { code: 'IN', name: 'India' },
    { code: 'ID', name: 'Indonesia' },
    { code: 'IR', name: 'Iran' },
    { code: 'IQ', name: 'Iraq' },
    { code: 'IE', name: 'Ireland' },
    { code: 'IL', name: 'Israel' },
    { code: 'IT', name: 'Italy' },
    { code: 'JM', name: 'Jamaica' },
    { code: 'JP', name: 'Japan' },
    { code: 'JO', name: 'Jordan' },
    { code: 'KZ', name: 'Kazakhstan' },
    { code: 'KE', name: 'Kenya' },
    { code: 'KI', name: 'Kiribati' },
    { code: 'XK', name: 'Kosovo' },
    { code: 'KW', name: 'Kuwait' },
    { code: 'KG', name: 'Kyrgyzstan' },
    { code: 'LA', name: 'Laos' },
    { code: 'LV', name: 'Latvia' },
    { code: 'LB', name: 'Lebanon' },
    { code: 'LS', name: 'Lesotho' },
    { code: 'LR', name: 'Liberia' },
    { code: 'LY', name: 'Libya' },
    { code: 'LI', name: 'Liechtenstein' },
    { code: 'LT', name: 'Lithuania' },
    { code: 'LU', name: 'Luxembourg' },
    { code: 'MO', name: 'Macau' },
    { code: 'MG', name: 'Madagascar' },
    { code: 'MW', name: 'Malawi' },
    { code: 'MY', name: 'Malaysia' },
    { code: 'MV', name: 'Maldives' },
    { code: 'ML', name: 'Mali' },
    { code: 'MT', name: 'Malta' },
    { code: 'MH', name: 'Marshall Islands' },
    { code: 'MR', name: 'Mauritania' },
    { code: 'MU', name: 'Mauritius' },
    { code: 'MX', name: 'Mexico' },
    { code: 'FM', name: 'Micronesia' },
    { code: 'MD', name: 'Moldova' },
    { code: 'MC', name: 'Monaco' },
    { code: 'MN', name: 'Mongolia' },
    { code: 'ME', name: 'Montenegro' },
    { code: 'MA', name: 'Morocco' },
    { code: 'MZ', name: 'Mozambique' },
    { code: 'MM', name: 'Myanmar' },
    { code: 'NA', name: 'Namibia' },
    { code: 'NR', name: 'Nauru' },
    { code: 'NP', name: 'Nepal' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'NZ', name: 'New Zealand' },
    { code: 'NI', name: 'Nicaragua' },
    { code: 'NE', name: 'Niger' },
    { code: 'NG', name: 'Nigeria' },
    { code: 'KP', name: 'North Korea' },
    { code: 'MK', name: 'North Macedonia' },
    { code: 'NO', name: 'Norway' },
    { code: 'OM', name: 'Oman' },
    { code: 'PK', name: 'Pakistan' },
    { code: 'PW', name: 'Palau' },
    { code: 'PS', name: 'Palestine' },
    { code: 'PA', name: 'Panama' },
    { code: 'PG', name: 'Papua New Guinea' },
    { code: 'PY', name: 'Paraguay' },
    { code: 'PE', name: 'Peru' },
    { code: 'PH', name: 'Philippines' },
    { code: 'PL', name: 'Poland' },
    { code: 'PT', name: 'Portugal' },
    { code: 'QA', name: 'Qatar' },
    { code: 'RO', name: 'Romania' },
    { code: 'RU', name: 'Russia' },
    { code: 'RW', name: 'Rwanda' },
    { code: 'KN', name: 'Saint Kitts and Nevis' },
    { code: 'LC', name: 'Saint Lucia' },
    { code: 'VC', name: 'Saint Vincent and the Grenadines' },
    { code: 'WS', name: 'Samoa' },
    { code: 'SM', name: 'San Marino' },
    { code: 'ST', name: 'São Tomé and Príncipe' },
    { code: 'SA', name: 'Saudi Arabia' },
    { code: 'SN', name: 'Senegal' },
    { code: 'RS', name: 'Serbia' },
    { code: 'SC', name: 'Seychelles' },
    { code: 'SL', name: 'Sierra Leone' },
    { code: 'SG', name: 'Singapore' },
    { code: 'SK', name: 'Slovakia' },
    { code: 'SI', name: 'Slovenia' },
    { code: 'SB', name: 'Solomon Islands' },
    { code: 'SO', name: 'Somalia' },
    { code: 'ZA', name: 'South Africa' },
    { code: 'KR', name: 'South Korea' },
    { code: 'SS', name: 'South Sudan' },
    { code: 'ES', name: 'Spain' },
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'SD', name: 'Sudan' },
    { code: 'SR', name: 'Suriname' },
    { code: 'SE', name: 'Sweden' },
    { code: 'CH', name: 'Switzerland' },
    { code: 'SY', name: 'Syria' },
    { code: 'TW', name: 'Taiwan' },
    { code: 'TJ', name: 'Tajikistan' },
    { code: 'TZ', name: 'Tanzania' },
    { code: 'TH', name: 'Thailand' },
    { code: 'TL', name: 'Timor-Leste' },
    { code: 'TG', name: 'Togo' },
    { code: 'TO', name: 'Tonga' },
    { code: 'TT', name: 'Trinidad and Tobago' },
    { code: 'TN', name: 'Tunisia' },
    { code: 'TR', name: 'Turkey' },
    { code: 'TM', name: 'Turkmenistan' },
    { code: 'TV', name: 'Tuvalu' },
    { code: 'UG', name: 'Uganda' },
    { code: 'UA', name: 'Ukraine' },
    { code: 'AE', name: 'United Arab Emirates' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'US', name: 'United States' },
    { code: 'UY', name: 'Uruguay' },
    { code: 'UZ', name: 'Uzbekistan' },
    { code: 'VU', name: 'Vanuatu' },
    { code: 'VA', name: 'Vatican City' },
    { code: 'VE', name: 'Venezuela' },
    { code: 'VN', name: 'Vietnam' },
    { code: 'YE', name: 'Yemen' },
    { code: 'ZM', name: 'Zambia' },
    { code: 'ZW', name: 'Zimbabwe' }
];

// Тарифы доставки по странам (USD)
const SHIPPING_RATES = {
    'SG': 5.00,   // Singapore
    'US': 15.00,  // United States
    'GB': 12.00,  // United Kingdom
    'DE': 10.00,  // Germany
    'FR': 10.00,  // France
    'RU': 8.00,   // Russia
    'KZ': 8.00,   // Kazakhstan
    'UA': 8.00,   // Ukraine
    'BY': 8.00,   // Belarus
    'PL': 10.00,  // Poland
    'CN': 7.00,   // China
    'JP': 12.00,  // Japan
    'KR': 10.00,  // South Korea
    'AU': 20.00,  // Australia
    'CA': 15.00,  // Canada
    'MX': 12.00,  // Mexico
    'BR': 18.00,  // Brazil
    'IN': 6.00,   // India
    'AE': 10.00,  // United Arab Emirates
    'SA': 12.00,  // Saudi Arabia
    'TR': 9.00,   // Turkey
    'IT': 10.00,  // Italy
    'ES': 10.00,  // Spain
    'NL': 10.00,  // Netherlands
    'BE': 10.00,  // Belgium
    'CH': 12.00,  // Switzerland
    'AT': 10.00,  // Austria
    'SE': 12.00,  // Sweden
    'NO': 15.00,  // Norway
    'DK': 12.00,  // Denmark
    'FI': 12.00,  // Finland
    'IE': 10.00,  // Ireland
    'PT': 10.00,  // Portugal
    'GR': 10.00,  // Greece
    'CZ': 9.00,   // Czech Republic
    'HU': 9.00,   // Hungary
    'RO': 8.00,   // Romania
    'BG': 8.00,   // Bulgaria
    'HR': 9.00,   // Croatia
    'SK': 9.00,   // Slovakia
    'SI': 9.00,   // Slovenia
    'EE': 10.00,  // Estonia
    'LV': 10.00,  // Latvia
    'LT': 10.00,  // Lithuania
    'LU': 10.00,  // Luxembourg
    'MT': 10.00,  // Malta
    'CY': 10.00,  // Cyprus
    'IS': 15.00,  // Iceland
    'LI': 12.00,  // Liechtenstein
    'MC': 12.00,  // Monaco
    'SM': 12.00,  // San Marino
    'VA': 12.00,  // Vatican City
    'AD': 12.00,  // Andorra
    'AL': 8.00,   // Albania
    'BA': 8.00,   // Bosnia and Herzegovina
    'MK': 8.00,   // North Macedonia
    'ME': 8.00,   // Montenegro
    'RS': 8.00,   // Serbia
    'XK': 8.00,   // Kosovo
    'MD': 8.00,   // Moldova
    'AM': 8.00,   // Armenia
    'AZ': 8.00,   // Azerbaijan
    'GE': 8.00,   // Georgia
    'IL': 10.00,  // Israel
    'JO': 10.00,  // Jordan
    'LB': 10.00,  // Lebanon
    'IQ': 10.00,  // Iraq
    'IR': 10.00,  // Iran
    'KW': 10.00,  // Kuwait
    'OM': 10.00,  // Oman
    'QA': 10.00,  // Qatar
    'BH': 10.00,  // Bahrain
    'YE': 12.00,  // Yemen
    'EG': 10.00,  // Egypt
    'MA': 10.00,  // Morocco
    'DZ': 10.00,  // Algeria
    'TN': 10.00,  // Tunisia
    'LY': 12.00,  // Libya
    'SD': 12.00,  // Sudan
    'ET': 15.00,  // Ethiopia
    'KE': 15.00,  // Kenya
    'ZA': 18.00,  // South Africa
    'NG': 15.00,  // Nigeria
    'GH': 15.00,  // Ghana
    'TZ': 15.00,  // Tanzania
    'UG': 15.00,  // Uganda
    'RW': 15.00,  // Rwanda
    'MW': 15.00,  // Malawi
    'ZM': 18.00,  // Zambia
    'ZW': 18.00,  // Zimbabwe
    'BW': 18.00,  // Botswana
    'NA': 18.00,  // Namibia
    'MZ': 18.00,  // Mozambique
    'AO': 18.00,  // Angola
    'CM': 15.00,  // Cameroon
    'SN': 15.00,  // Senegal
    'CI': 15.00,  // Ivory Coast
    'ML': 15.00,  // Mali
    'BF': 15.00,  // Burkina Faso
    'NE': 15.00,  // Niger
    'TD': 18.00,  // Chad
    'MR': 15.00,  // Mauritania
    'GM': 15.00,  // Gambia
    'GW': 15.00,  // Guinea-Bissau
    'GN': 15.00,  // Guinea
    'SL': 15.00,  // Sierra Leone
    'LR': 15.00,  // Liberia
    'TG': 15.00,  // Togo
    'BJ': 15.00,  // Benin
    'GA': 15.00,  // Gabon
    'CG': 15.00,  // Republic of the Congo
    'CD': 18.00,  // Democratic Republic of the Congo
    'CF': 18.00,  // Central African Republic
    'GQ': 15.00,  // Equatorial Guinea
    'ST': 18.00,  // São Tomé and Príncipe
    'DJ': 15.00,  // Djibouti
    'ER': 15.00,  // Eritrea
    'SO': 18.00,  // Somalia
    'SS': 18.00,  // South Sudan
    'BI': 15.00,  // Burundi
    'KM': 18.00,  // Comoros
    'MU': 18.00,  // Mauritius
    'SC': 18.00,  // Seychelles
    'CV': 15.00,  // Cape Verde
    'LS': 18.00,  // Lesotho
    'SZ': 18.00   // Eswatini
};

// Функция для получения тарифа доставки (по умолчанию 15.00)
function getShippingRate(countryCode) {
    return SHIPPING_RATES[countryCode] || 15.00;
}

