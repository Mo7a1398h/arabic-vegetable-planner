const vegetableData = {
    // الورقيات
    lettuce: {
        name: 'خس',
        plantingSeason: ['سبتمبر', 'أكتوبر', 'فبراير', 'مارس'],
        growthPeriod: '45-55 يوم',
        careInstructions: [
            'ري منتظم مع الحفاظ على رطوبة التربة',
            'تجنب الري فوق الأوراق',
            'إزالة الأوراق المصفرة',
            'حماية من أشعة الشمس القوية',
            'حصاد عند اكتمال حجم الرأس'
        ]
    },
    spinach: {
        name: 'سبانخ',
        plantingSeason: ['سبتمبر', 'أكتوبر', 'فبراير'],
        growthPeriod: '40-50 يوم',
        careInstructions: [
            'ري منتظم',
            'تربة غنية بالمواد العضوية',
            'إزالة الأعشاب الضارة',
            'حصاد الأوراق الخارجية أولاً',
            'تجنب الزراعة في الصيف الحار'
        ]
    },
    parsley: {
        name: 'بقدونس',
        plantingSeason: ['سبتمبر', 'أكتوبر', 'فبراير', 'مارس'],
        growthPeriod: '70-80 يوم',
        careInstructions: [
            'نقع البذور قبل الزراعة',
            'ري خفيف ومنتظم',
            'تربة جيدة الصرف',
            'قص الأوراق بانتظام لتشجيع النمو',
            'حصاد عند وصول الأوراق للحجم المناسب'
        ]
    },
    mint: {
        name: 'نعناع',
        plantingSeason: ['مارس', 'أبريل', 'سبتمبر'],
        growthPeriod: '30-40 يوم',
        careInstructions: [
            'ري منتظم',
            'تربة رطبة دائماً',
            'قص القمم لتشجيع التفرع',
            'تقليم النباتات بانتظام',
            'زراعة في حاويات لمنع الانتشار'
        ]
    },
    basil: {
        name: 'ريحان',
        plantingSeason: ['مارس', 'أبريل', 'مايو'],
        growthPeriod: '30-40 يوم',
        careInstructions: [
            'مكان مشمس',
            'ري منتظم',
            'إزالة البراعم الزهرية',
            'قص الأوراق بانتظام',
            'حماية من البرد'
        ]
    },
    // الخضروات
    carrot: {
        name: 'جزر',
        plantingSeason: ['سبتمبر', 'أكتوبر', 'فبراير'],
        growthPeriod: '70-80 يوم',
        careInstructions: [
            'تربة عميقة وخفيفة',
            'ري منتظم',
            'تخفيف النباتات',
            'إزالة الأعشاب الضارة',
            'حصاد عند الوصول للحجم المناسب'
        ]
    },
    potato: {
        name: 'بطاطس',
        plantingSeason: ['يناير', 'فبراير', 'سبتمبر'],
        growthPeriod: '90-120 يوم',
        careInstructions: [
            'تربة عميقة وخصبة',
            'تغطية الدرنات بالتربة',
            'ري منتظم',
            'حماية من الصقيع',
            'حصاد عند جفاف الأوراق'
        ]
    },
    onion: {
        name: 'بصل',
        plantingSeason: ['سبتمبر', 'أكتوبر'],
        growthPeriod: '120-150 يوم',
        careInstructions: [
            'تربة جيدة الصرف',
            'ري معتدل',
            'إزالة الأعشاب الضارة',
            'تقليل الري قبل الحصاد',
            'حصاد عند سقوط الأوراق'
        ]
    },
    garlic: {
        name: 'ثوم',
        plantingSeason: ['سبتمبر', 'أكتوبر'],
        growthPeriod: '180-210 يوم',
        careInstructions: [
            'تربة غنية وجيدة الصرف',
            'زراعة الفصوص بعمق مناسب',
            'ري معتدل',
            'إزالة البراعم الزهرية',
            'حصاد عند جفاف الأوراق'
        ]
    },
    // الفواكه الإضافية
    olive: {
        name: 'زيتون',
        plantingSeason: ['فبراير', 'مارس'],
        growthPeriod: '180-240 يوم',
        careInstructions: [
            'مكان مشمس تماماً',
            'تربة جيدة الصرف',
            'ري معتدل',
            'تقليم سنوي',
            'حصاد عند تغير لون الثمار'
        ]
    },
    kiwi: {
        name: 'كيوي',
        plantingSeason: ['مارس', 'أبريل'],
        growthPeriod: '150-180 يوم',
        careInstructions: [
            'دعامات للتسلق',
            'تربة حمضية',
            'ري منتظم',
            'تقليم شتوي',
            'حصاد عند اكتمال النمو'
        ]
    },
    // الفواكه
    watermelon: {
        name: 'بطيخ',
        plantingSeason: ['مارس', 'أبريل'],
        growthPeriod: '80-100 يوم',
        careInstructions: [
            'تحتاج إلى مساحة كبيرة للنمو',
            'ري غزير ومنتظم',
            'تربة خصبة وجيدة الصرف',
            'تحتاج إلى شمس كاملة',
            'حصاد عند جفاف المحلاق وصدور صوت أجوف'
        ]
    },
    cantaloupe: {
        name: 'شمام',
        plantingSeason: ['مارس', 'أبريل'],
        growthPeriod: '70-90 يوم',
        careInstructions: [
            'تحتاج إلى تربة خصبة وجيدة الصرف',
            'ري منتظم مع تجنب الري فوق الأوراق',
            'تسميد متوازن كل أسبوعين',
            'تقليل الري قبل النضج لتحسين الطعم',
            'حصاد عند تغير لون القشرة إلى الأصفر'
        ]
    },
    strawberry: {
        name: 'فراولة',
        plantingSeason: ['سبتمبر', 'أكتوبر'],
        growthPeriod: '90-120 يوم',
        careInstructions: [
            'تحتاج إلى تربة حمضية قليلاً',
            'ري منتظم مع تجنب تبليل الأوراق',
            'إزالة السيقان الجارية لتركيز النمو',
            'تغطية التربة بالقش لحماية الثمار',
            'حصاد الثمار عندما تصبح حمراء بالكامل'
        ]
    },
    fig: {
        name: 'تين',
        plantingSeason: ['فبراير', 'مارس'],
        growthPeriod: '120-180 يوم',
        careInstructions: [
            'تحتاج إلى مكان مشمس تماماً',
            'ري منتظم خلال موسم النمو',
            'تقليم الأغصان الميتة في الشتاء',
            'تسميد عضوي مرتين في السنة',
            'حماية الثمار من الطيور'
        ]
    },
    pomegranate: {
        name: 'رمان',
        plantingSeason: ['فبراير', 'مارس'],
        growthPeriod: '150-180 يوم',
        careInstructions: [
            'تحتاج إلى شمس كاملة',
            'ري منتظم خاصة أثناء تكوين الثمار',
            'تقليم سنوي لتشجيع نمو الثمار',
            'تسميد متوازن في الربيع',
            'حصاد عندما يصبح لون الثمرة أحمر غامق'
        ]
    },
    grape: {
        name: 'عنب',
        plantingSeason: ['فبراير', 'مارس'],
        growthPeriod: '150-180 يوم',
        careInstructions: [
            'تحتاج إلى دعامات أو معرشات',
            'ري منتظم مع تجنب الري فوق الأوراق',
            'تقليم شتوي وصيفي',
            'رش وقائي ضد الفطريات',
            'خف العناقيد لتحسين جودة الثمار'
        ]
    },
    mango: {
        name: 'مانجو',
        plantingSeason: ['مارس', 'أبريل'],
        growthPeriod: '120-150 يوم',
        careInstructions: [
            'تحتاج إلى مكان دافئ ومشمس',
            'ري منتظم مع تجنب الإفراط',
            'تسميد غني بالبوتاسيوم أثناء تكوين الثمار',
            'تقليم سنوي لتشجيع النمو',
            'حصاد عندما يصبح لون الثمرة ذهبياً'
        ]
    },
    apple: {
        name: 'تفاح',
        plantingSeason: ['فبراير', 'مارس'],
        growthPeriod: '150-180 يوم',
        careInstructions: [
            'تحتاج إلى فترة برودة كافية',
            'ري منتظم خاصة أثناء تكوين الثمار',
            'تقليم شتوي لتشكيل الشجرة',
            'رش وقائي ضد الأمراض الفطرية',
            'خف الثمار لتحسين الجودة'
        ]
    },
    apricot: {
        name: 'مشمش',
        plantingSeason: ['فبراير', 'مارس'],
        growthPeriod: '120-150 يوم',
        careInstructions: [
            'تحتاج إلى شمس كاملة',
            'ري منتظم مع تجنب الري الزائد',
            'تقليم بعد الحصاد',
            'تسميد متوازن في الربيع',
            'حصاد عندما تصبح الثمار ذهبية اللون'
        ]
    },
    peach: {
        name: 'خوخ',
        plantingSeason: ['فبراير', 'مارس'],
        growthPeriod: '140-170 يوم',
        careInstructions: [
            'تحتاج إلى تربة جيدة الصرف',
            'ري منتظم خاصة أثناء نمو الثمار',
            'تقليم شتوي لتشكيل الشجرة',
            'خف الثمار للحصول على حجم جيد',
            'حصاد عندما تصبح الثمار لينة قليلاً'
        ]
    },
    banana: {
        name: 'موز',
        plantingSeason: ['مارس', 'أبريل'],
        growthPeriod: '270-300 يوم',
        careInstructions: [
            'تحتاج إلى مناخ دافئ ورطب',
            'ري غزير ومنتظم',
            'تسميد غني بالبوتاسيوم',
            'حماية من الرياح القوية',
            'حصاد عندما تمتلئ الثمار'
        ]
    },
    orange: {
        name: 'برتقال',
        plantingSeason: ['فبراير', 'مارس'],
        growthPeriod: '240-270 يوم',
        careInstructions: [
            'تحتاج إلى شمس كاملة',
            'ري منتظم مع تجنب الغمر',
            'تسميد متوازن كل 3 أشهر',
            'تقليم سنوي لتهوية الشجرة',
            'حصاد عند اكتمال اللون البرتقالي'
        ]
    },
    lemon: {
        name: 'ليمون',
        plantingSeason: ['فبراير', 'مارس'],
        growthPeriod: '200-240 يوم',
        careInstructions: [
            'تحتاج إلى تربة حمضية قليلاً',
            'ري منتظم وجيد الصرف',
            'تسميد غني بالنيتروجين',
            'حماية من الصقيع',
            'حصاد عند اكتمال الحجم واللون'
        ]
    },
    guava: {
        name: 'جوافة',
        plantingSeason: ['مارس', 'أبريل'],
        growthPeriod: '180-210 يوم',
        careInstructions: [
            'تحتاج إلى مكان مشمس ودافئ',
            'ري منتظم خاصة في فترة النمو',
            'تسميد عضوي مرتين في السنة',
            'تقليم لتشكيل الشجرة',
            'حصاد عندما تصبح الثمار طرية قليلاً'
        ]
    },
    plum: {
        name: 'برقوق',
        plantingSeason: ['فبراير', 'مارس'],
        growthPeriod: '150-180 يوم',
        careInstructions: [
            'تحتاج إلى فترة برودة',
            'ري منتظم خاصة أثناء نمو الثمار',
            'تقليم شتوي لتشكيل الشجرة',
            'خف الثمار لتحسين الجودة',
            'حصاد عندما تصبح الثمار طرية'
        ]
    },
    date: {
        name: 'تمر',
        plantingSeason: ['فبراير', 'مارس'],
        growthPeriod: '180-200 يوم',
        careInstructions: [
            'تحتاج إلى مناخ حار وجاف',
            'ري غزير مع تجنب الرطوبة الزائدة',
            'تلقيح يدوي للحصول على ثمار جيدة',
            'تسميد عضوي مرتين في السنة',
            'حصاد عندما يتغير لون الثمار إلى البني'
        ]
    },
    
    // الورقيات
    lettuce: {
        name: 'خس',
        plantingSeason: ['سبتمبر', 'أكتوبر', 'نوفمبر', 'فبراير', 'مارس'],
        growthPeriod: '45-55 يوم',
        careInstructions: [
            'ري خفيف ومنتظم مع الحفاظ على رطوبة التربة',
            'يمكن زراعته في الظل الجزئي',
            'التسميد مرة واحدة عند الزراعة',
            'إزالة الأوراق الصفراء باستمرار',
            'يفضل زراعته في الجو المعتدل'
        ]
    },
    spinach: {
        name: 'سبانخ',
        plantingSeason: ['سبتمبر', 'أكتوبر', 'نوفمبر', 'فبراير'],
        growthPeriod: '40-50 يوم',
        careInstructions: [
            'ري منتظم مع تجنب الإفراط',
            'تحتاج إلى تربة غنية بالمواد العضوية',
            'يمكن زراعتها في الظل الجزئي',
            'حصاد الأوراق الخارجية أولاً للسماح باستمرار النمو',
            'مقاومة للبرودة النسبية'
        ]
    },
    arugula: {
        name: 'جرجير',
        plantingSeason: ['سبتمبر', 'أكتوبر', 'فبراير', 'مارس'],
        growthPeriod: '30-40 يوم',
        careInstructions: [
            'ري خفيف ومنتظم',
            'يمكن زراعته في أواني صغيرة',
            'يتحمل الظل الجزئي',
            'قص الأوراق عند ارتفاع 10-15 سم',
            'سريع النمو ويمكن زراعته على دفعات'
        ]
    },
    parsley: {
        name: 'بقدونس',
        plantingSeason: ['سبتمبر', 'أكتوبر', 'فبراير', 'مارس'],
        growthPeriod: '70-80 يوم',
        careInstructions: [
            'ري منتظم مع تجنب تشبع التربة',
            'يحتاج إلى تربة جيدة الصرف',
            'يمكن زراعته في الشمس أو الظل الجزئي',
            'قص السيقان القديمة لتشجيع نمو جديد',
            'يتحمل درجات الحرارة المختلفة'
        ]
    },
    coriander: {
        name: 'كزبرة',
        plantingSeason: ['سبتمبر', 'أكتوبر', 'فبراير'],
        growthPeriod: '45-60 يوم',
        careInstructions: [
            'ري معتدل مع تجنب الإفراط',
            'تفضل الشمس الكاملة أو الظل الجزئي',
            'تحتاج إلى تربة جيدة الصرف',
            'يمكن حصاد الأوراق باستمرار',
            'تزرع على عمق 1-2 سم'
        ]
    },
    // الخضروات الثمرية
    eggplant: {
        name: 'باذنجان',
        plantingSeason: ['مارس', 'أبريل', 'مايو'],
        growthPeriod: '70-80 يوم',
        careInstructions: [
            'تحتاج إلى 6-8 ساعات من ضوء الشمس يومياً',
            'ري منتظم وغزير خاصة أثناء تكوين الثمار',
            'تسميد منتظم كل 3-4 أسابيع',
            'تحتاج إلى دعامات لحمل الثمار',
            'حصاد الثمار عندما تصبح لامعة'
        ]
    },
    pepper: {
        name: 'فلفل',
        plantingSeason: ['مارس', 'أبريل'],
        growthPeriod: '60-90 يوم',
        careInstructions: [
            'تحتاج إلى شمس كاملة',
            'ري منتظم مع تجنب الإفراط',
            'تسميد متوازن كل أسبوعين',
            'تحتاج إلى دعم للنباتات المثقلة بالثمار',
            'حصاد الثمار عند اكتمال اللون'
        ]
    },
    zucchini: {
        name: 'كوسة',
        plantingSeason: ['مارس', 'أبريل', 'مايو'],
        growthPeriod: '50-70 يوم',
        careInstructions: [
            'تحتاج إلى مكان مشمس تماماً',
            'ري منتظم وغزير نسبياً',
            'تسميد متوازن كل أسبوعين',
            'حصاد الثمار صغيرة لزيادة الإنتاج',
            'مراقبة الآفات والأمراض الفطرية'
        ]
    },
    okra: {
        name: 'بامية',
        plantingSeason: ['مارس', 'أبريل', 'مايو'],
        growthPeriod: '50-65 يوم',
        careInstructions: [
            'تحتاج إلى حرارة عالية وشمس كاملة',
            'ري منتظم مع تجنب الغمر',
            'تسميد متوازن كل 3 أسابيع',
            'حصاد الثمار صغيرة وبشكل منتظم',
            'إزالة الثمار الناضجة لتشجيع الإنتاج'
        ]
    },
    squash: {
        name: 'قرع',
        plantingSeason: ['مارس', 'أبريل'],
        growthPeriod: '70-100 يوم',
        careInstructions: [
            'تحتاج إلى مساحة كبيرة للنمو',
            'ري عميق ومنتظم',
            'تسميد غني بالبوتاسيوم',
            'مراقبة الآفات وخاصة البياض الدقيقي',
            'حصاد الثمار عند اكتمال النضج'
        ]
    },
    chard: {
        name: 'سلق',
        plantingSeason: ['سبتمبر', 'أكتوبر', 'فبراير', 'مارس'],
        growthPeriod: '50-60 يوم',
        careInstructions: [
            'ري منتظم للحفاظ على رطوبة التربة',
            'يتحمل الحرارة والبرودة المعتدلة',
            'تسميد خفيف كل 3-4 أسابيع',
            'قطف الأوراق الخارجية أولاً',
            'يمكن أن يستمر في الإنتاج لعدة أشهر'
        ]
    },
    
    tomato: {
        name: 'طماطم',
        plantingSeason: ['مارس', 'أبريل', 'مايو'],
        growthPeriod: '70-80 يوم',
        careInstructions: [
            'الري المنتظم مع تجنب الإفراط',
            'تحتاج إلى 6-8 ساعات من ضوء الشمس يومياً',
            'التسميد كل 4-6 أسابيع',
            'دعم النباتات باستخدام العصي أو الأقفاص'
        ]
    },
    cucumber: {
        name: 'خيار',
        plantingSeason: ['مارس', 'أبريل'],
        growthPeriod: '50-70 يوم',
        careInstructions: [
            'الري المنتظم مع الحفاظ على رطوبة التربة',
            'تحتاج إلى الكثير من الشمس',
            'التسميد كل 3 أسابيع',
            'توفير دعامات للتسلق'
        ]
    },
    lettuce: {
        name: 'خس',
        plantingSeason: ['سبتمبر', 'أكتوبر', 'نوفمبر'],
        growthPeriod: '45-55 يوم',
        careInstructions: [
            'ري خفيف ومنتظم',
            'يمكن زراعته في الظل الجزئي',
            'التسميد مرة واحدة عند الزراعة',
            'إزالة الأوراق الصفراء باستمرار'
        ]
    },
    carrot: {
        name: 'جزر',
        plantingSeason: ['سبتمبر', 'أكتوبر'],
        growthPeriod: '70-80 يوم',
        careInstructions: [
            'الري بانتظام مع تجنب الإفراط',
            'تحتاج إلى تربة عميقة وغير حجرية',
            'لا تحتاج إلى تسميد كثير',
            'تخفيف النباتات للسماح بالنمو الجيد'
        ]
    },
    potato: {
        name: 'بطاطس',
        plantingSeason: ['يناير', 'فبراير'],
        growthPeriod: '90-120 يوم',
        careInstructions: [
            'الري المنتظم خاصة أثناء تكوين الدرنات',
            'تغطية الدرنات بالتربة عند ظهورها',
            'التسميد مرتين خلال موسم النمو',
            'حماية النباتات من الصقيع'
        ]
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const vegetableSelect = document.getElementById('vegetable');
    const plantingTimeElement = document.getElementById('plantingTime');
    const growthPeriodElement = document.getElementById('growthPeriod');
    const harvestTimeElement = document.getElementById('harvestTime');
    const careListElement = document.getElementById('careList');

    function getGrowthDays(growthPeriod) {
        // تحويل فترة النمو من نص إلى رقم
        const match = growthPeriod.match(/(\d+)-(\d+)/);
        if (!match) return null;

        const min = parseInt(match[1]);
        const max = parseInt(match[2]);

        // التحقق من صحة الأرقام
        if (isNaN(min) || isNaN(max) || min > max) return null;

        return { min, max };
    }

    function calculateHarvestRange(plantingDateStr, growthPeriod) {
        const days = getGrowthDays(growthPeriod);
        if (!days) return null;

        // تحويل تاريخ الزراعة إلى كائن Date
        const plantingDate = new Date(plantingDateStr);
        if (isNaN(plantingDate.getTime())) return null;

        // حساب تاريخ بداية الحصاد
        const minDate = new Date(plantingDate);
        minDate.setDate(plantingDate.getDate() + days.min);

        // حساب تاريخ نهاية الحصاد
        const maxDate = new Date(plantingDate);
        maxDate.setDate(plantingDate.getDate() + days.max);

        return { minDate, maxDate };
    }

    function calculateDaysRemaining(harvestDate) {
        const today = new Date();
        const diffTime = harvestDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }

    function updateHarvestInfo() {
        const selectedVegetable = vegetableData[vegetableSelect.value];
        const plantingDateValue = document.getElementById('plantingDate').value;
        const harvestResult = document.getElementById('harvestResult');
        
        if (!plantingDateValue) {
            harvestResult.style.display = 'none';
            return;
        }

        const harvestRange = calculateHarvestRange(plantingDateValue, selectedVegetable.growthPeriod);
        if (!harvestRange) {
            harvestResult.style.display = 'none';
            return;
        }

        // تنسيق التاريخ بالشكل المطلوب
        const formatDate = (date) => {
            const gregorian = date.toLocaleDateString('ar-EG', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit'
            });
            return gregorian.replace(/‏/g, '');
        };

        // عرض تواريخ الحصاد
        document.getElementById('harvestTimeMin').textContent = formatDate(harvestRange.minDate);
        document.getElementById('harvestTimeMax').textContent = formatDate(harvestRange.maxDate);

        // حساب الأيام المتبقية
        const today = new Date();
        const minDaysRemaining = Math.ceil((harvestRange.minDate - today) / (1000 * 60 * 60 * 24));
        const maxDaysRemaining = Math.ceil((harvestRange.maxDate - today) / (1000 * 60 * 60 * 24));
        
        const daysRemainingElement = document.getElementById('daysRemaining');

        if (minDaysRemaining > 0) {
            // لم يبدأ موسم الحصاد بعد
            daysRemainingElement.textContent = `${minDaysRemaining} يوم حتى بداية موسم الحصاد`;
            daysRemainingElement.style.color = '#2c5530';
        } else if (maxDaysRemaining >= 0) {
            // في موسم الحصاد
            daysRemainingElement.textContent = 'حان موسم الحصاد!';
            daysRemainingElement.style.color = '#e63946';
        } else {
            // انتهى موسم الحصاد
            daysRemainingElement.textContent = 'تم تجاوز موسم الحصاد';
            daysRemainingElement.style.color = '#e63946';
        }
        
        harvestResult.style.display = 'block';
    }

    function updatePlantingInfo() {
        const selectedVegetable = vegetableData[vegetableSelect.value];
        
        // عرض موسم الزراعة
        plantingTimeElement.textContent = `أفضل وقت للزراعة: ${selectedVegetable.plantingSeason.join(' أو ')}`;
        
        // عرض فترة النمو
        growthPeriodElement.textContent = `${selectedVegetable.growthPeriod}`;
        
        // حساب موعد الحصاد المتوقع
        const growthDays = parseInt(selectedVegetable.growthPeriod);
        const harvestDate = new Date();
        harvestDate.setDate(harvestDate.getDate() + growthDays);
        harvestTimeElement.textContent = `حوالي ${harvestDate.toLocaleDateString('ar-SA')}`;
        
        // عرض تعليمات العناية
        careListElement.innerHTML = '';
        selectedVegetable.careInstructions.forEach(instruction => {
            const li = document.createElement('li');
            li.textContent = instruction;
            careListElement.appendChild(li);
        });
    }

    // إضافة مستمعي الأحداث
    vegetableSelect.addEventListener('change', () => {
        updatePlantingInfo();
        updateHarvestInfo();
    });

    document.getElementById('plantingDate').addEventListener('change', updateHarvestInfo);
    document.getElementById('calculateHarvest').addEventListener('click', updateHarvestInfo);

    // تحديث المعلومات عند تحميل الصفحة
    updatePlantingInfo();
    document.getElementById('harvestResult').style.display = 'none';
});
