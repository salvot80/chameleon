export interface Timezone {
  zone: string;
  offset: string;
}

export function getTimezones(): Timezone[] {
  return [
    { zone: 'Etc/GMT+12', offset: '-12:00' },
    { zone: 'Etc/GMT+11', offset: '-11:00' },
    { zone: 'Pacific/Midway', offset: '-11:00' },
    { zone: 'Pacific/Niue', offset: '-11:00' },
    { zone: 'Pacific/Pago_Pago', offset: '-11:00' },
    { zone: 'Pacific/Samoa', offset: '-11:00' },
    { zone: 'US/Samoa', offset: '-11:00' },
    { zone: 'America/Adak', offset: '-10:00' },
    { zone: 'America/Atka', offset: '-10:00' },
    { zone: 'Etc/GMT+10', offset: '-10:00' },
    { zone: 'HST', offset: '-10:00' },
    { zone: 'Pacific/Honolulu', offset: '-10:00' },
    { zone: 'Pacific/Johnston', offset: '-10:00' },
    { zone: 'Pacific/Rarotonga', offset: '-10:00' },
    { zone: 'Pacific/Tahiti', offset: '-10:00' },
    { zone: 'US/Aleutian', offset: '-10:00' },
    { zone: 'US/Hawaii', offset: '-10:00' },
    { zone: 'Pacific/Marquesas', offset: '-09:30' },
    { zone: 'America/Anchorage', offset: '-09:00' },
    { zone: 'America/Juneau', offset: '-09:00' },
    { zone: 'America/Metlakatla', offset: '-09:00' },
    { zone: 'America/Nome', offset: '-09:00' },
    { zone: 'America/Sitka', offset: '-09:00' },
    { zone: 'America/Yakutat', offset: '-09:00' },
    { zone: 'Etc/GMT+9', offset: '-09:00' },
    { zone: 'Pacific/Gambier', offset: '-09:00' },
    { zone: 'US/Alaska', offset: '-09:00' },
    { zone: 'America/Dawson', offset: '-08:00' },
    { zone: 'America/Ensenada', offset: '-08:00' },
    { zone: 'America/Los_Angeles', offset: '-08:00' },
    { zone: 'America/Santa_Isabel', offset: '-08:00' },
    { zone: 'America/Tijuana', offset: '-08:00' },
    { zone: 'America/Vancouver', offset: '-08:00' },
    { zone: 'America/Whitehorse', offset: '-08:00' },
    { zone: 'Canada/Pacific', offset: '-08:00' },
    { zone: 'Canada/Yukon', offset: '-08:00' },
    { zone: 'Etc/GMT+8', offset: '-08:00' },
    { zone: 'Mexico/BajaNorte', offset: '-08:00' },
    { zone: 'Pacific/Pitcairn', offset: '-08:00' },
    { zone: 'US/Pacific', offset: '-08:00' },
    { zone: 'America/Boise', offset: '-07:00' },
    { zone: 'America/Cambridge_Bay', offset: '-07:00' },
    { zone: 'America/Chihuahua', offset: '-07:00' },
    { zone: 'America/Creston', offset: '-07:00' },
    { zone: 'America/Dawson_Creek', offset: '-07:00' },
    { zone: 'America/Denver', offset: '-07:00' },
    { zone: 'America/Edmonton', offset: '-07:00' },
    { zone: 'America/Fort_Nelson', offset: '-07:00' },
    { zone: 'America/Hermosillo', offset: '-07:00' },
    { zone: 'America/Inuvik', offset: '-07:00' },
    { zone: 'America/Mazatlan', offset: '-07:00' },
    { zone: 'America/Ojinaga', offset: '-07:00' },
    { zone: 'America/Phoenix', offset: '-07:00' },
    { zone: 'America/Shiprock', offset: '-07:00' },
    { zone: 'America/Yellowknife', offset: '-07:00' },
    { zone: 'Canada/Mountain', offset: '-07:00' },
    { zone: 'Etc/GMT+7', offset: '-07:00' },
    { zone: 'MST', offset: '-07:00' },
    { zone: 'Mexico/BajaSur', offset: '-07:00' },
    { zone: 'US/Arizona', offset: '-07:00' },
    { zone: 'US/Mountain', offset: '-07:00' },
    { zone: 'America/Bahia_Banderas', offset: '-06:00' },
    { zone: 'America/Belize', offset: '-06:00' },
    { zone: 'America/Chicago', offset: '-06:00' },
    { zone: 'America/Costa_Rica', offset: '-06:00' },
    { zone: 'America/El_Salvador', offset: '-06:00' },
    { zone: 'America/Guatemala', offset: '-06:00' },
    { zone: 'America/Indiana/Knox', offset: '-06:00' },
    { zone: 'America/Indiana/Tell_City', offset: '-06:00' },
    { zone: 'America/Knox_IN', offset: '-06:00' },
    { zone: 'America/Managua', offset: '-06:00' },
    { zone: 'America/Matamoros', offset: '-06:00' },
    { zone: 'America/Menominee', offset: '-06:00' },
    { zone: 'America/Merida', offset: '-06:00' },
    { zone: 'America/Mexico_City', offset: '-06:00' },
    { zone: 'America/Monterrey', offset: '-06:00' },
    { zone: 'America/North_Dakota/Beulah', offset: '-06:00' },
    { zone: 'America/North_Dakota/Center', offset: '-06:00' },
    { zone: 'America/North_Dakota/New_Salem', offset: '-06:00' },
    { zone: 'America/Rainy_River', offset: '-06:00' },
    { zone: 'America/Rankin_Inlet', offset: '-06:00' },
    { zone: 'America/Regina', offset: '-06:00' },
    { zone: 'America/Resolute', offset: '-06:00' },
    { zone: 'America/Swift_Current', offset: '-06:00' },
    { zone: 'America/Tegucigalpa', offset: '-06:00' },
    { zone: 'America/Winnipeg', offset: '-06:00' },
    { zone: 'Canada/Central', offset: '-06:00' },
    { zone: 'Canada/Saskatchewan', offset: '-06:00' },
    { zone: 'Etc/GMT+6', offset: '-06:00' },
    { zone: 'Mexico/General', offset: '-06:00' },
    { zone: 'Pacific/Galapagos', offset: '-06:00' },
    { zone: 'US/Central', offset: '-06:00' },
    { zone: 'US/Indiana-Starke', offset: '-06:00' },
    { zone: 'America/Atikokan', offset: '-05:00' },
    { zone: 'America/Bogota', offset: '-05:00' },
    { zone: 'America/Cancun', offset: '-05:00' },
    { zone: 'America/Cayman', offset: '-05:00' },
    { zone: 'America/Coral_Harbour', offset: '-05:00' },
    { zone: 'America/Detroit', offset: '-05:00' },
    { zone: 'America/Eirunepe', offset: '-05:00' },
    { zone: 'America/Fort_Wayne', offset: '-05:00' },
    { zone: 'America/Grand_Turk', offset: '-05:00' },
    { zone: 'America/Guayaquil', offset: '-05:00' },
    { zone: 'America/Havana', offset: '-05:00' },
    { zone: 'America/Indiana/Indianapolis', offset: '-05:00' },
    { zone: 'America/Indiana/Marengo', offset: '-05:00' },
    { zone: 'America/Indiana/Petersburg', offset: '-05:00' },
    { zone: 'America/Indiana/Vevay', offset: '-05:00' },
    { zone: 'America/Indiana/Vincennes', offset: '-05:00' },
    { zone: 'America/Indiana/Winamac', offset: '-05:00' },
    { zone: 'America/Indianapolis', offset: '-05:00' },
    { zone: 'America/Iqaluit', offset: '-05:00' },
    { zone: 'America/Jamaica', offset: '-05:00' },
    { zone: 'America/Kentucky/Louisville', offset: '-05:00' },
    { zone: 'America/Kentucky/Monticello', offset: '-05:00' },
    { zone: 'America/Lima', offset: '-05:00' },
    { zone: 'America/Louisville', offset: '-05:00' },
    { zone: 'America/Montreal', offset: '-05:00' },
    { zone: 'America/Nassau', offset: '-05:00' },
    { zone: 'America/New_York', offset: '-05:00' },
    { zone: 'America/Nipigon', offset: '-05:00' },
    { zone: 'America/Panama', offset: '-05:00' },
    { zone: 'America/Pangnirtung', offset: '-05:00' },
    { zone: 'America/Port-au-Prince', offset: '-05:00' },
    { zone: 'America/Porto_Acre', offset: '-05:00' },
    { zone: 'America/Rio_Branco', offset: '-05:00' },
    { zone: 'America/Thunder_Bay', offset: '-05:00' },
    { zone: 'America/Toronto', offset: '-05:00' },
    { zone: 'Brazil/Acre', offset: '-05:00' },
    { zone: 'Canada/Eastern', offset: '-05:00' },
    { zone: 'Chile/EasterIsland', offset: '-05:00' },
    { zone: 'EST', offset: '-05:00' },
    { zone: 'Etc/GMT+5', offset: '-05:00' },
    { zone: 'Pacific/Easter', offset: '-05:00' },
    { zone: 'US/East-Indiana', offset: '-05:00' },
    { zone: 'US/Eastern', offset: '-05:00' },
    { zone: 'US/Michigan', offset: '-05:00' },
    { zone: 'America/Anguilla', offset: '-04:00' },
    { zone: 'America/Antigua', offset: '-04:00' },
    { zone: 'America/Aruba', offset: '-04:00' },
    { zone: 'America/Barbados', offset: '-04:00' },
    { zone: 'America/Blanc-Sablon', offset: '-04:00' },
    { zone: 'America/Boa_Vista', offset: '-04:00' },
    { zone: 'America/Campo_Grande', offset: '-04:00' },
    { zone: 'America/Caracas', offset: '-04:00' },
    { zone: 'America/Cuiaba', offset: '-04:00' },
    { zone: 'America/Curacao', offset: '-04:00' },
    { zone: 'America/Dominica', offset: '-04:00' },
    { zone: 'America/Glace_Bay', offset: '-04:00' },
    { zone: 'America/Goose_Bay', offset: '-04:00' },
    { zone: 'America/Grenada', offset: '-04:00' },
    { zone: 'America/Guadeloupe', offset: '-04:00' },
    { zone: 'America/Guyana', offset: '-04:00' },
    { zone: 'America/Halifax', offset: '-04:00' },
    { zone: 'America/Kralendijk', offset: '-04:00' },
    { zone: 'America/La_Paz', offset: '-04:00' },
    { zone: 'America/Lower_Princes', offset: '-04:00' },
    { zone: 'America/Manaus', offset: '-04:00' },
    { zone: 'America/Marigot', offset: '-04:00' },
    { zone: 'America/Martinique', offset: '-04:00' },
    { zone: 'America/Moncton', offset: '-04:00' },
    { zone: 'America/Montserrat', offset: '-04:00' },
    { zone: 'America/Port_of_Spain', offset: '-04:00' },
    { zone: 'America/Porto_Velho', offset: '-04:00' },
    { zone: 'America/Puerto_Rico', offset: '-04:00' },
    { zone: 'America/Santo_Domingo', offset: '-04:00' },
    { zone: 'America/St_Barthelemy', offset: '-04:00' },
    { zone: 'America/St_Kitts', offset: '-04:00' },
    { zone: 'America/St_Lucia', offset: '-04:00' },
    { zone: 'America/St_Thomas', offset: '-04:00' },
    { zone: 'America/St_Vincent', offset: '-04:00' },
    { zone: 'America/Thule', offset: '-04:00' },
    { zone: 'America/Tortola', offset: '-04:00' },
    { zone: 'America/Virgin', offset: '-04:00' },
    { zone: 'Atlantic/Bermuda', offset: '-04:00' },
    { zone: 'Brazil/West', offset: '-04:00' },
    { zone: 'Canada/Atlantic', offset: '-04:00' },
    { zone: 'Etc/GMT+4', offset: '-04:00' },
    { zone: 'America/St_Johns', offset: '-03:30' },
    { zone: 'Canada/Newfoundland', offset: '-03:30' },
    { zone: 'America/Araguaina', offset: '-03:00' },
    { zone: 'America/Argentina/Buenos_Aires', offset: '-03:00' },
    { zone: 'America/Argentina/Catamarca', offset: '-03:00' },
    { zone: 'America/Argentina/ComodRivadavia', offset: '-03:00' },
    { zone: 'America/Argentina/Cordoba', offset: '-03:00' },
    { zone: 'America/Argentina/Jujuy', offset: '-03:00' },
    { zone: 'America/Argentina/La_Rioja', offset: '-03:00' },
    { zone: 'America/Argentina/Mendoza', offset: '-03:00' },
    { zone: 'America/Argentina/Rio_Gallegos', offset: '-03:00' },
    { zone: 'America/Argentina/Salta', offset: '-03:00' },
    { zone: 'America/Argentina/San_Juan', offset: '-03:00' },
    { zone: 'America/Argentina/San_Luis', offset: '-03:00' },
    { zone: 'America/Argentina/Tucuman', offset: '-03:00' },
    { zone: 'America/Argentina/Ushuaia', offset: '-03:00' },
    { zone: 'America/Asuncion', offset: '-03:00' },
    { zone: 'America/Bahia', offset: '-03:00' },
    { zone: 'America/Belem', offset: '-03:00' },
    { zone: 'America/Buenos_Aires', offset: '-03:00' },
    { zone: 'America/Catamarca', offset: '-03:00' },
    { zone: 'America/Cayenne', offset: '-03:00' },
    { zone: 'America/Cordoba', offset: '-03:00' },
    { zone: 'America/Fortaleza', offset: '-03:00' },
    { zone: 'America/Godthab', offset: '-03:00' },
    { zone: 'America/Jujuy', offset: '-03:00' },
    { zone: 'America/Maceio', offset: '-03:00' },
    { zone: 'America/Mendoza', offset: '-03:00' },
    { zone: 'America/Miquelon', offset: '-03:00' },
    { zone: 'America/Montevideo', offset: '-03:00' },
    { zone: 'America/Paramaribo', offset: '-03:00' },
    { zone: 'America/Punta_Arenas', offset: '-03:00' },
    { zone: 'America/Recife', offset: '-03:00' },
    { zone: 'America/Rosario', offset: '-03:00' },
    { zone: 'America/Santarem', offset: '-03:00' },
    { zone: 'America/Santiago', offset: '-03:00' },
    { zone: 'America/Sao_Paulo', offset: '-03:00' },
    { zone: 'Antarctica/Palmer', offset: '-03:00' },
    { zone: 'Antarctica/Rothera', offset: '-03:00' },
    { zone: 'Atlantic/Stanley', offset: '-03:00' },
    { zone: 'Brazil/East', offset: '-03:00' },
    { zone: 'Chile/Continental', offset: '-03:00' },
    { zone: 'Etc/GMT+3', offset: '-03:00' },
    { zone: 'America/Noronha', offset: '-02:00' },
    { zone: 'Atlantic/South_Georgia', offset: '-02:00' },
    { zone: 'Brazil/DeNoronha', offset: '-02:00' },
    { zone: 'Etc/GMT+2', offset: '-02:00' },
    { zone: 'America/Scoresbysund', offset: '-01:00' },
    { zone: 'Atlantic/Azores', offset: '-01:00' },
    { zone: 'Atlantic/Cape_Verde', offset: '-01:00' },
    { zone: 'Etc/GMT+1', offset: '-01:00' },
    { zone: 'Africa/Abidjan', offset: '0:00' },
    { zone: 'Africa/Accra', offset: '0:00' },
    { zone: 'Africa/Bamako', offset: '0:00' },
    { zone: 'Africa/Banjul', offset: '0:00' },
    { zone: 'Africa/Bissau', offset: '0:00' },
    { zone: 'Africa/Conakry', offset: '0:00' },
    { zone: 'Africa/Dakar', offset: '0:00' },
    { zone: 'Africa/Freetown', offset: '0:00' },
    { zone: 'Africa/Lome', offset: '0:00' },
    { zone: 'Africa/Monrovia', offset: '0:00' },
    { zone: 'Africa/Nouakchott', offset: '0:00' },
    { zone: 'Africa/Ouagadougou', offset: '0:00' },
    { zone: 'Africa/Sao_Tome', offset: '0:00' },
    { zone: 'Africa/Timbuktu', offset: '0:00' },
    { zone: 'America/Danmarkshavn', offset: '0:00' },
    { zone: 'Antarctica/Troll', offset: '0:00' },
    { zone: 'Atlantic/Canary', offset: '0:00' },
    { zone: 'Atlantic/Faeroe', offset: '0:00' },
    { zone: 'Atlantic/Faroe', offset: '0:00' },
    { zone: 'Atlantic/Madeira', offset: '0:00' },
    { zone: 'Atlantic/Reykjavik', offset: '0:00' },
    { zone: 'Atlantic/St_Helena', offset: '0:00' },
    { zone: 'Etc/GMT', offset: '0:00' },
    { zone: 'Etc/Greenwich', offset: '0:00' },
    { zone: 'Etc/UCT', offset: '0:00' },
    { zone: 'Etc/UTC', offset: '0:00' },
    { zone: 'Etc/Universal', offset: '0:00' },
    { zone: 'Etc/Zulu', offset: '0:00' },
    { zone: 'Europe/Belfast', offset: '0:00' },
    { zone: 'Europe/Dublin', offset: '0:00' },
    { zone: 'Europe/Guernsey', offset: '0:00' },
    { zone: 'Europe/Isle_of_Man', offset: '0:00' },
    { zone: 'Europe/Jersey', offset: '0:00' },
    { zone: 'Europe/Lisbon', offset: '0:00' },
    { zone: 'Europe/London', offset: '0:00' },
    { zone: 'GMT', offset: '0:00' },
    { zone: 'WET', offset: '0:00' },
    { zone: 'Africa/Algiers', offset: '+01:00' },
    { zone: 'Africa/Bangui', offset: '+01:00' },
    { zone: 'Africa/Brazzaville', offset: '+01:00' },
    { zone: 'Africa/Casablanca', offset: '+01:00' },
    { zone: 'Africa/Ceuta', offset: '+01:00' },
    { zone: 'Africa/Douala', offset: '+01:00' },
    { zone: 'Africa/El_Aaiun', offset: '+01:00' },
    { zone: 'Africa/Kinshasa', offset: '+01:00' },
    { zone: 'Africa/Lagos', offset: '+01:00' },
    { zone: 'Africa/Libreville', offset: '+01:00' },
    { zone: 'Africa/Luanda', offset: '+01:00' },
    { zone: 'Africa/Malabo', offset: '+01:00' },
    { zone: 'Africa/Ndjamena', offset: '+01:00' },
    { zone: 'Africa/Niamey', offset: '+01:00' },
    { zone: 'Africa/Porto-Novo', offset: '+01:00' },
    { zone: 'Africa/Tunis', offset: '+01:00' },
    { zone: 'Arctic/Longyearbyen', offset: '+01:00' },
    { zone: 'Atlantic/Jan_Mayen', offset: '+01:00' },
    { zone: 'CET', offset: '+01:00' },
    { zone: 'Etc/GMT-1', offset: '+01:00' },
    { zone: 'Europe/Amsterdam', offset: '+01:00' },
    { zone: 'Europe/Andorra', offset: '+01:00' },
    { zone: 'Europe/Belgrade', offset: '+01:00' },
    { zone: 'Europe/Berlin', offset: '+01:00' },
    { zone: 'Europe/Bratislava', offset: '+01:00' },
    { zone: 'Europe/Brussels', offset: '+01:00' },
    { zone: 'Europe/Budapest', offset: '+01:00' },
    { zone: 'Europe/Busingen', offset: '+01:00' },
    { zone: 'Europe/Copenhagen', offset: '+01:00' },
    { zone: 'Europe/Gibraltar', offset: '+01:00' },
    { zone: 'Europe/Ljubljana', offset: '+01:00' },
    { zone: 'Europe/Luxembourg', offset: '+01:00' },
    { zone: 'Europe/Madrid', offset: '+01:00' },
    { zone: 'Europe/Malta', offset: '+01:00' },
    { zone: 'Europe/Monaco', offset: '+01:00' },
    { zone: 'Europe/Oslo', offset: '+01:00' },
    { zone: 'Europe/Paris', offset: '+01:00' },
    { zone: 'Europe/Podgorica', offset: '+01:00' },
    { zone: 'Europe/Prague', offset: '+01:00' },
    { zone: 'Europe/Rome', offset: '+01:00' },
    { zone: 'Europe/San_Marino', offset: '+01:00' },
    { zone: 'Europe/Sarajevo', offset: '+01:00' },
    { zone: 'Europe/Skopje', offset: '+01:00' },
    { zone: 'Europe/Stockholm', offset: '+01:00' },
    { zone: 'Europe/Tirane', offset: '+01:00' },
    { zone: 'Europe/Vaduz', offset: '+01:00' },
    { zone: 'Europe/Vatican', offset: '+01:00' },
    { zone: 'Europe/Vienna', offset: '+01:00' },
    { zone: 'Europe/Warsaw', offset: '+01:00' },
    { zone: 'Europe/Zagreb', offset: '+01:00' },
    { zone: 'Europe/Zurich', offset: '+01:00' },
    { zone: 'MET', offset: '+01:00' },
    { zone: 'Africa/Blantyre', offset: '+02:00' },
    { zone: 'Africa/Bujumbura', offset: '+02:00' },
    { zone: 'Africa/Cairo', offset: '+02:00' },
    { zone: 'Africa/Gaborone', offset: '+02:00' },
    { zone: 'Africa/Harare', offset: '+02:00' },
    { zone: 'Africa/Johannesburg', offset: '+02:00' },
    { zone: 'Africa/Khartoum', offset: '+02:00' },
    { zone: 'Africa/Kigali', offset: '+02:00' },
    { zone: 'Africa/Lubumbashi', offset: '+02:00' },
    { zone: 'Africa/Lusaka', offset: '+02:00' },
    { zone: 'Africa/Maputo', offset: '+02:00' },
    { zone: 'Africa/Maseru', offset: '+02:00' },
    { zone: 'Africa/Mbabane', offset: '+02:00' },
    { zone: 'Africa/Tripoli', offset: '+02:00' },
    { zone: 'Africa/Windhoek', offset: '+02:00' },
    { zone: 'Asia/Amman', offset: '+02:00' },
    { zone: 'Asia/Beirut', offset: '+02:00' },
    { zone: 'Asia/Damascus', offset: '+02:00' },
    { zone: 'Asia/Famagusta', offset: '+02:00' },
    { zone: 'Asia/Gaza', offset: '+02:00' },
    { zone: 'Asia/Hebron', offset: '+02:00' },
    { zone: 'Asia/Jerusalem', offset: '+02:00' },
    { zone: 'Asia/Nicosia', offset: '+02:00' },
    { zone: 'Asia/Tel_Aviv', offset: '+02:00' },
    { zone: 'EET', offset: '+02:00' },
    { zone: 'Etc/GMT-2', offset: '+02:00' },
    { zone: 'Europe/Athens', offset: '+02:00' },
    { zone: 'Europe/Bucharest', offset: '+02:00' },
    { zone: 'Europe/Chisinau', offset: '+02:00' },
    { zone: 'Europe/Helsinki', offset: '+02:00' },
    { zone: 'Europe/Kaliningrad', offset: '+02:00' },
    { zone: 'Europe/Kiev', offset: '+02:00' },
    { zone: 'Europe/Mariehamn', offset: '+02:00' },
    { zone: 'Europe/Nicosia', offset: '+02:00' },
    { zone: 'Europe/Riga', offset: '+02:00' },
    { zone: 'Europe/Sofia', offset: '+02:00' },
    { zone: 'Europe/Tallinn', offset: '+02:00' },
    { zone: 'Europe/Tiraspol', offset: '+02:00' },
    { zone: 'Europe/Uzhgorod', offset: '+02:00' },
    { zone: 'Europe/Vilnius', offset: '+02:00' },
    { zone: 'Europe/Zaporozhye', offset: '+02:00' },
    { zone: 'Africa/Addis_Ababa', offset: '+03:00' },
    { zone: 'Africa/Asmara', offset: '+03:00' },
    { zone: 'Africa/Asmera', offset: '+03:00' },
    { zone: 'Africa/Dar_es_Salaam', offset: '+03:00' },
    { zone: 'Africa/Djibouti', offset: '+03:00' },
    { zone: 'Africa/Juba', offset: '+03:00' },
    { zone: 'Africa/Kampala', offset: '+03:00' },
    { zone: 'Africa/Mogadishu', offset: '+03:00' },
    { zone: 'Africa/Nairobi', offset: '+03:00' },
    { zone: 'Antarctica/Syowa', offset: '+03:00' },
    { zone: 'Asia/Aden', offset: '+03:00' },
    { zone: 'Asia/Baghdad', offset: '+03:00' },
    { zone: 'Asia/Bahrain', offset: '+03:00' },
    { zone: 'Asia/Istanbul', offset: '+03:00' },
    { zone: 'Asia/Kuwait', offset: '+03:00' },
    { zone: 'Asia/Qatar', offset: '+03:00' },
    { zone: 'Asia/Riyadh', offset: '+03:00' },
    { zone: 'Etc/GMT-3', offset: '+03:00' },
    { zone: 'Europe/Istanbul', offset: '+03:00' },
    { zone: 'Europe/Kirov', offset: '+03:00' },
    { zone: 'Europe/Minsk', offset: '+03:00' },
    { zone: 'Europe/Moscow', offset: '+03:00' },
    { zone: 'Europe/Simferopol', offset: '+03:00' },
    { zone: 'Indian/Antananarivo', offset: '+03:00' },
    { zone: 'Indian/Comoro', offset: '+03:00' },
    { zone: 'Indian/Mayotte', offset: '+03:00' },
    { zone: 'Asia/Tehran', offset: '+03:30' },
    { zone: 'Asia/Baku', offset: '+04:00' },
    { zone: 'Asia/Dubai', offset: '+04:00' },
    { zone: 'Asia/Muscat', offset: '+04:00' },
    { zone: 'Asia/Tbilisi', offset: '+04:00' },
    { zone: 'Asia/Yerevan', offset: '+04:00' },
    { zone: 'Etc/GMT-4', offset: '+04:00' },
    { zone: 'Europe/Astrakhan', offset: '+04:00' },
    { zone: 'Europe/Samara', offset: '+04:00' },
    { zone: 'Europe/Saratov', offset: '+04:00' },
    { zone: 'Europe/Ulyanovsk', offset: '+04:00' },
    { zone: 'Europe/Volgograd', offset: '+04:00' },
    { zone: 'Indian/Mahe', offset: '+04:00' },
    { zone: 'Indian/Mauritius', offset: '+04:00' },
    { zone: 'Indian/Reunion', offset: '+04:00' },
    { zone: 'Asia/Kabul', offset: '+04:30' },
    { zone: 'Antarctica/Mawson', offset: '+05:00' },
    { zone: 'Asia/Aqtau', offset: '+05:00' },
    { zone: 'Asia/Aqtobe', offset: '+05:00' },
    { zone: 'Asia/Ashgabat', offset: '+05:00' },
    { zone: 'Asia/Ashkhabad', offset: '+05:00' },
    { zone: 'Asia/Atyrau', offset: '+05:00' },
    { zone: 'Asia/Dushanbe', offset: '+05:00' },
    { zone: 'Asia/Karachi', offset: '+05:00' },
    { zone: 'Asia/Oral', offset: '+05:00' },
    { zone: 'Asia/Qyzylorda', offset: '+05:00' },
    { zone: 'Asia/Samarkand', offset: '+05:00' },
    { zone: 'Asia/Tashkent', offset: '+05:00' },
    { zone: 'Asia/Yekaterinburg', offset: '+05:00' },
    { zone: 'Etc/GMT-5', offset: '+05:00' },
    { zone: 'Indian/Kerguelen', offset: '+05:00' },
    { zone: 'Indian/Maldives', offset: '+05:00' },
    { zone: 'Asia/Calcutta', offset: '+05:30' },
    { zone: 'Asia/Colombo', offset: '+05:30' },
    { zone: 'Asia/Kolkata', offset: '+05:30' },
    { zone: 'Asia/Kathmandu', offset: '+05:45' },
    { zone: 'Asia/Katmandu', offset: '+05:45' },
    { zone: 'Antarctica/Vostok', offset: '+06:00' },
    { zone: 'Asia/Almaty', offset: '+06:00' },
    { zone: 'Asia/Bishkek', offset: '+06:00' },
    { zone: 'Asia/Dacca', offset: '+06:00' },
    { zone: 'Asia/Dhaka', offset: '+06:00' },
    { zone: 'Asia/Kashgar', offset: '+06:00' },
    { zone: 'Asia/Omsk', offset: '+06:00' },
    { zone: 'Asia/Qostanay', offset: '+06:00' },
    { zone: 'Asia/Thimbu', offset: '+06:00' },
    { zone: 'Asia/Thimphu', offset: '+06:00' },
    { zone: 'Asia/Urumqi', offset: '+06:00' },
    { zone: 'Etc/GMT-6', offset: '+06:00' },
    { zone: 'Indian/Chagos', offset: '+06:00' },
    { zone: 'Asia/Rangoon', offset: '+06:30' },
    { zone: 'Asia/Yangon', offset: '+06:30' },
    { zone: 'Indian/Cocos', offset: '+06:30' },
    { zone: 'Antarctica/Davis', offset: '+07:00' },
    { zone: 'Asia/Bangkok', offset: '+07:00' },
    { zone: 'Asia/Barnaul', offset: '+07:00' },
    { zone: 'Asia/Ho_Chi_Minh', offset: '+07:00' },
    { zone: 'Asia/Hovd', offset: '+07:00' },
    { zone: 'Asia/Jakarta', offset: '+07:00' },
    { zone: 'Asia/Krasnoyarsk', offset: '+07:00' },
    { zone: 'Asia/Novokuznetsk', offset: '+07:00' },
    { zone: 'Asia/Novosibirsk', offset: '+07:00' },
    { zone: 'Asia/Phnom_Penh', offset: '+07:00' },
    { zone: 'Asia/Pontianak', offset: '+07:00' },
    { zone: 'Asia/Saigon', offset: '+07:00' },
    { zone: 'Asia/Tomsk', offset: '+07:00' },
    { zone: 'Asia/Vientiane', offset: '+07:00' },
    { zone: 'Etc/GMT-7', offset: '+07:00' },
    { zone: 'Indian/Christmas', offset: '+07:00' },
    { zone: 'Antarctica/Casey', offset: '+08:00' },
    { zone: 'Asia/Brunei', offset: '+08:00' },
    { zone: 'Asia/Choibalsan', offset: '+08:00' },
    { zone: 'Asia/Chongqing', offset: '+08:00' },
    { zone: 'Asia/Chungking', offset: '+08:00' },
    { zone: 'Asia/Harbin', offset: '+08:00' },
    { zone: 'Asia/Hong_Kong', offset: '+08:00' },
    { zone: 'Asia/Irkutsk', offset: '+08:00' },
    { zone: 'Asia/Kuala_Lumpur', offset: '+08:00' },
    { zone: 'Asia/Kuching', offset: '+08:00' },
    { zone: 'Asia/Macao', offset: '+08:00' },
    { zone: 'Asia/Macau', offset: '+08:00' },
    { zone: 'Asia/Makassar', offset: '+08:00' },
    { zone: 'Asia/Manila', offset: '+08:00' },
    { zone: 'Asia/Shanghai', offset: '+08:00' },
    { zone: 'Asia/Singapore', offset: '+08:00' },
    { zone: 'Asia/Taipei', offset: '+08:00' },
    { zone: 'Asia/Ujung_Pandang', offset: '+08:00' },
    { zone: 'Asia/Ulaanbaatar', offset: '+08:00' },
    { zone: 'Asia/Ulan_Bator', offset: '+08:00' },
    { zone: 'Australia/Perth', offset: '+08:00' },
    { zone: 'Australia/West', offset: '+08:00' },
    { zone: 'Etc/GMT-8', offset: '+08:00' },
    { zone: 'Australia/Eucla', offset: '+08:45' },
    { zone: 'Asia/Chita', offset: '+09:00' },
    { zone: 'Asia/Dili', offset: '+09:00' },
    { zone: 'Asia/Jayapura', offset: '+09:00' },
    { zone: 'Asia/Khandyga', offset: '+09:00' },
    { zone: 'Asia/Pyongyang', offset: '+09:00' },
    { zone: 'Asia/Seoul', offset: '+09:00' },
    { zone: 'Asia/Tokyo', offset: '+09:00' },
    { zone: 'Asia/Yakutsk', offset: '+09:00' },
    { zone: 'Etc/GMT-9', offset: '+09:00' },
    { zone: 'Pacific/Palau', offset: '+09:00' },
    { zone: 'Australia/Darwin', offset: '+09:30' },
    { zone: 'Australia/North', offset: '+09:30' },
    { zone: 'Antarctica/DumontDUrville', offset: '+10:00' },
    { zone: 'Asia/Ust-Nera', offset: '+10:00' },
    { zone: 'Asia/Vladivostok', offset: '+10:00' },
    { zone: 'Australia/Brisbane', offset: '+10:00' },
    { zone: 'Australia/Lindeman', offset: '+10:00' },
    { zone: 'Australia/Queensland', offset: '+10:00' },
    { zone: 'Etc/GMT-10', offset: '+10:00' },
    { zone: 'Pacific/Chuuk', offset: '+10:00' },
    { zone: 'Pacific/Guam', offset: '+10:00' },
    { zone: 'Pacific/Port_Moresby', offset: '+10:00' },
    { zone: 'Pacific/Saipan', offset: '+10:00' },
    { zone: 'Pacific/Truk', offset: '+10:00' },
    { zone: 'Pacific/Yap', offset: '+10:00' },
    { zone: 'Australia/Adelaide', offset: '+10:30' },
    { zone: 'Australia/Broken_Hill', offset: '+10:30' },
    { zone: 'Australia/South', offset: '+10:30' },
    { zone: 'Australia/Yancowinna', offset: '+10:30' },
    { zone: 'Antarctica/Macquarie', offset: '+11:00' },
    { zone: 'Asia/Magadan', offset: '+11:00' },
    { zone: 'Asia/Sakhalin', offset: '+11:00' },
    { zone: 'Asia/Srednekolymsk', offset: '+11:00' },
    { zone: 'Australia/ACT', offset: '+11:00' },
    { zone: 'Australia/Canberra', offset: '+11:00' },
    { zone: 'Australia/Currie', offset: '+11:00' },
    { zone: 'Australia/Hobart', offset: '+11:00' },
    { zone: 'Australia/LHI', offset: '+11:00' },
    { zone: 'Australia/Lord_Howe', offset: '+11:00' },
    { zone: 'Australia/Melbourne', offset: '+11:00' },
    { zone: 'Australia/NSW', offset: '+11:00' },
    { zone: 'Australia/Sydney', offset: '+11:00' },
    { zone: 'Australia/Tasmania', offset: '+11:00' },
    { zone: 'Australia/Victoria', offset: '+11:00' },
    { zone: 'Etc/GMT-11', offset: '+11:00' },
    { zone: 'Pacific/Bougainville', offset: '+11:00' },
    { zone: 'Pacific/Efate', offset: '+11:00' },
    { zone: 'Pacific/Guadalcanal', offset: '+11:00' },
    { zone: 'Pacific/Kosrae', offset: '+11:00' },
    { zone: 'Pacific/Norfolk', offset: '+11:00' },
    { zone: 'Pacific/Noumea', offset: '+11:00' },
    { zone: 'Pacific/Pohnpei', offset: '+11:00' },
    { zone: 'Pacific/Ponape', offset: '+11:00' },
    { zone: 'Asia/Anadyr', offset: '+12:00' },
    { zone: 'Asia/Kamchatka', offset: '+12:00' },
    { zone: 'Etc/GMT-12', offset: '+12:00' },
    { zone: 'Pacific/Fiji', offset: '+12:00' },
    { zone: 'Pacific/Funafuti', offset: '+12:00' },
    { zone: 'Pacific/Kwajalein', offset: '+12:00' },
    { zone: 'Pacific/Majuro', offset: '+12:00' },
    { zone: 'Pacific/Nauru', offset: '+12:00' },
    { zone: 'Pacific/Tarawa', offset: '+12:00' },
    { zone: 'Pacific/Wake', offset: '+12:00' },
    { zone: 'Pacific/Wallis', offset: '+12:00' },
    { zone: 'Antarctica/McMurdo', offset: '+13:00' },
    { zone: 'Antarctica/South_Pole', offset: '+13:00' },
    { zone: 'Etc/GMT-13', offset: '+13:00' },
    { zone: 'Pacific/Auckland', offset: '+13:00' },
    { zone: 'Pacific/Enderbury', offset: '+13:00' },
    { zone: 'Pacific/Fakaofo', offset: '+13:00' },
    { zone: 'Pacific/Tongatapu', offset: '+13:00' },
    { zone: 'Pacific/Chatham', offset: '+13:45' },
    { zone: 'Etc/GMT-14', offset: '+14:00' },
    { zone: 'Pacific/Apia', offset: '+14:00' },
    { zone: 'Pacific/Kiritimati', offset: '+14:00' },
  ];
}
