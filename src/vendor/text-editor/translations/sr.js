(function(d){	const l = d['sr'] = d['sr'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 of %1","Align center":"Централно равнанје","Align left":"Лево равнање","Align right":"Десно равнање",Big:"Велико","Block quote":"Цитат","Blue marker":"Плави маркер",Bold:"Подебљано","Bulleted List":"Листа са тачкама",Cancel:"Одустани","Choose heading":"Одреди стил","Decrease indent":"Смањи увлачење",Default:"Основни",Downloadable:"Могуће преузимање","Dropdown toolbar":"Падајућа трака са алаткама","Edit link":"Исправи линк","Editor toolbar":"Уређивач трака са алаткама","Font Family":"Фонт","Font Size":"Величина фонта","Green marker":"Зелени маркер","Green pen":"Зелена оловка",Heading:"Стилови","Heading 1":"Наслов 1","Heading 2":"Наслов 2","Heading 3":"Наслов 3","Heading 4":"Наслов 4","Heading 5":"Наслов 5","Heading 6":"Наслов 6",Highlight:"Истицање",Huge:"Огромно","Increase indent":"Повећај увлачење",Italic:"Курзив",Justify:"Обострано равнање",Link:"Линк","Link URL":"УРЛ линк",Next:"Следећи","Numbered List":"Листа са бројевима","Open in a new tab":"Отвори у новој картици","Open link in new tab":"Отвори линк у новом прозору",Paragraph:"Пасус","Pink marker":"Роза маркер",Previous:"Претходни","Red pen":"Црвена оловка",Redo:"Поново","Remove highlight":"Уклони истицање","Rich Text Editor, %0":"Проширени уређивач текста, %0",Save:"Сачувај","Show more items":"Прикажи још ставки",Small:"Мало","Text alignment":"Равнање текста","Text alignment toolbar":"Алатке за равнање текста","Text highlight toolbar":"Алатке за маркирање текста","This link has no URL":"Линк не садржи УРЛ",Tiny:"Ситно",Undo:"Повлачење",Unlink:"Отклони линк","Yellow marker":"Жути маркер"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));