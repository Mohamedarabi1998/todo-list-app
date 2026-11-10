// بيانات الترجمة
        const translations = {
            ar: {
                appTitle: "تطبيق المهام",
                appSubtitle: "نظّم مهامك واتخذ الخطوة الأولى نحو الإنجاز",
                addTaskTitle: "أضف مهمة جديدة...",
                taskInputPlaceholder: "اكتب مهمة جديدة هنا...",
                addButtonText: "إضافة",
                activeTasksTitle: "المهام الحالية",
                completedTasksTitle: "المهام المكتملة",
                emptyActiveText: "لا توجد مهام حالية. أضف مهمة جديدة لتبدأ!",
                emptyCompletedText: "لا توجد مهام مكتملة بعد. ابدأ بإنجاز مهامك!",
                footerText: "تطبيق المهام &copy; 2023 - نظم وقتك، حقق أهدافك",
                extendTooltip: "تمديد",
                completeTooltip: "تحديد كمكتمل",
                undoCompleteTooltip: "إلغاء الإكمال",
                deleteTooltip: "حذف",
                addSuccess: "تمت إضافة المهمة بنجاح",
                extendSuccess: "تم تأجيل المهمة",
                deleteSuccess: "تم حذف المهمة بنجاح",
                toggleSuccess: "تم تغيير حالة المهمة",
                deleteConfirm: "هل أنت متأكد من حذف هذه المهمة؟",
                emptyTaskAlert: "يرجى إدخال نص المهمة",
                loadingText: "جاري تغيير اللغة...",
                switchToEnglish: "التبديل إلى الإنجليزية",
                timeNow: "الآن",
                timeLater: "مجدول لاحقاً",
                timeCompleted: "مكتمل",
                timeResumed: "مستأنف",
                statusCompleted: "مكتملة",
                statusIncomplete: "غير مكتملة",
                darkModeTooltip: "تفعيل وضع الليل",
                lightModeTooltip: "تفعيل وضع النهار",
                darkModeNotification: "تم تفعيل وضع الليل",
                lightModeNotification: "تم تفعيل وضع النهار",
                languageNotification: "تم تغيير اللغة إلى العربية"
            },
            en: {
                appTitle: "Tasks app",
                appSubtitle: "Organize your tasks and take the first step towards achievement",
                addTaskTitle: "Add a new task...",
                taskInputPlaceholder: "Type a new task here...",
                addButtonText: "Add",
                activeTasksTitle: "Current Tasks",
                completedTasksTitle: "Completed Tasks",
                emptyActiveText: "No current tasks. Add a new task to get started!",
                emptyCompletedText: "No completed tasks yet. Start completing your tasks!",
                footerText: "task app &copy; 2023 - Organize your time, achieve your goals",
                extendTooltip: "Extend",
                completeTooltip: "Mark as complete",
                undoCompleteTooltip: "Undo completion",
                deleteTooltip: "Delete",
                addSuccess: "Task added successfully",
                extendSuccess: "Task postponed",
                deleteSuccess: "Task deleted successfully",
                toggleSuccess: "Task status changed",
                deleteConfirm: "Are you sure you want to delete this task?",
                emptyTaskAlert: "Please enter task text",
                loadingText: "Changing language...",
                switchToEnglish: "Switch to Arabic",
                timeNow: "Now",
                timeLater: "Scheduled later",
                timeCompleted: "Completed",
                timeResumed: "Resumed",
                statusCompleted: "completed",
                statusIncomplete: "incomplete",
                darkModeTooltip: "Enable dark mode",
                lightModeTooltip: "Enable light mode",
                darkModeNotification: "Dark mode enabled",
                lightModeNotification: "Light mode enabled",
                languageNotification: "Language changed to English"
            }
        };

        // بيانات المهام الافتراضية باللغتين
        const initialTasks = {
            ar: [
                { id: 1, text: "أكمل واجب البرمجة", time: "مضى 2 يوم", completed: false },
                { id: 2, text: "قراءة مقالة تقنية", time: "مضى 1 يوم", completed: false },
                { id: 3, text: "الذهاب إلى النادي الرياضي", time: "اليوم", completed: false },
                { id: 4, text: "تجربة فكرة جديدة للمشروع", time: "مضى 3 أيام", completed: true },
                { id: 5, text: "مراجعة خطة العمل الأسبوعية", time: "مضى 5 أيام", completed: true }
            ],
            en: [
                { id: 1, text: "Complete programming assignment", time: "2 days ago", completed: false },
                { id: 2, text: "Read technical article", time: "1 day ago", completed: false },
                { id: 3, text: "Go to the gym", time: "Today", completed: false },
                { id: 4, text: "Try a new project idea", time: "3 days ago", completed: true },
                { id: 5, text: "Review weekly work plan", time: "5 days ago", completed: true }
            ]
        };

        // اللغة الحالية والوضع الحالي
        let currentLang = localStorage.getItem('appLanguage') || 'ar';
        let isDarkMode = localStorage.getItem('darkMode') === 'true';
        let tasks = JSON.parse(localStorage.getItem('airTasks')) || initialTasks[currentLang];

        // عناصر DOM
        const body = document.body;
        const taskInput = document.getElementById('taskInput');
        const addTaskBtn = document.getElementById('addTaskBtn');
        const activeTasksList = document.getElementById('activeTasks');
        const completedTasksList = document.getElementById('completedTasks');
        const emptyActiveTasks = document.getElementById('emptyActiveTasks');
        const emptyCompletedTasks = document.getElementById('emptyCompletedTasks');
        const languageToggle = document.getElementById('languageToggle');
        const themeToggle = document.getElementById('themeToggle');
        const languageLoader = document.getElementById('languageLoader');
        const loaderText = document.getElementById('loaderText');

        // عناصر النص للترجمة
        const textElements = {
            appTitle: document.getElementById('appTitle'),
            appSubtitle: document.getElementById('appSubtitle'),
            addTaskTitle: document.getElementById('addTaskTitle'),
            addButtonText: document.getElementById('addButtonText'),
            activeTasksTitle: document.getElementById('activeTasksTitle'),
            completedTasksTitle: document.getElementById('completedTasksTitle'),
            emptyActiveText: document.getElementById('emptyActiveText'),
            emptyCompletedText: document.getElementById('emptyCompletedText'),
            footerText: document.getElementById('footerText')
        };

        // تهيئة التطبيق
        document.addEventListener('DOMContentLoaded', function () {
            // تطبيق اللغة المحفوظة
            applyLanguage(currentLang);

            // تطبيق وضع السمة المحفوظ
            if (isDarkMode) {
                enableDarkMode();
            } else {
                enableLightMode();
            }

            // إضافة مهمة عند النقر على زر الإضافة
            addTaskBtn.addEventListener('click', addNewTask);

            // إضافة مهمة عند الضغط على Enter
            taskInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    addNewTask();
                }
            });

            // تبديل اللغة
            languageToggle.addEventListener('click', toggleLanguage);

            // تبديل الوضع
            themeToggle.addEventListener('click', toggleTheme);
        });

        // تطبيق اللغة المحددة
        function applyLanguage(lang) {
            // تغيير اتجاه الصفحة
            if (lang === 'en') {
                body.classList.add('english');
                document.documentElement.setAttribute('dir', 'ltr');
                document.documentElement.setAttribute('lang', 'en');
                languageToggle.setAttribute('title', translations[lang].switchToEnglish);
            } else {
                body.classList.remove('english');
                document.documentElement.setAttribute('dir', 'rtl');
                document.documentElement.setAttribute('lang', 'ar');
                languageToggle.setAttribute('title', translations[lang].switchToEnglish);
            }

            // تحديث النصوص
            for (const [key, element] of Object.entries(textElements)) {
                if (element) {
                    element.textContent = translations[lang][key];
                }
            }

            // تحديث placeholder
            taskInput.placeholder = translations[lang].taskInputPlaceholder;

            // تحديث المهام إذا تم تغيير اللغة
            if (localStorage.getItem('appLanguage') !== lang) {
                // تحويل المهام الحالية إلى اللغة الجديدة
                const oldLang = localStorage.getItem('appLanguage') || 'ar';
                const taskTexts = tasks.map(task => task.text);

                // في تطبيق حقيقي، قد يكون هناك نظام ترجمة أكثر تقدمًا
                // هنا نستخدم المهام الافتراضية للغة الجديدة
                tasks = JSON.parse(JSON.stringify(initialTasks[lang]));

                // نحاول الحفاظ على حالة المهام (مكتملة/غير مكتملة) عند تغيير اللغة
                const oldTasks = JSON.parse(localStorage.getItem('airTasks')) || initialTasks[oldLang];
                if (oldTasks.length === tasks.length) {
                    for (let i = 0; i < tasks.length; i++) {
                        tasks[i].completed = oldTasks[i]?.completed || false;
                    }
                }

                saveTasks();
            }

            // حفظ اللغة المختارة
            localStorage.setItem('appLanguage', lang);

            // تحديث عنوان زر الوضع الداكن
            updateThemeButtonTitle();

            // إعادة عرض المهام
            renderTasks();
        }

        // تفعيل الوضع الداكن
        function enableDarkMode() {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('darkMode', 'true');
            isDarkMode = true;
            updateThemeButtonTitle();
        }

        // تفعيل الوضع الفاتح
        function enableLightMode() {
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', 'false');
            isDarkMode = false;
            updateThemeButtonTitle();
        }

        // تحديث عنوان زر تبديل الوضع
        function updateThemeButtonTitle() {
            if (isDarkMode) {
                themeToggle.setAttribute('title', translations[currentLang].lightModeTooltip);
            } else {
                themeToggle.setAttribute('title', translations[currentLang].darkModeTooltip);
            }
        }

        // تبديل الوضع بين الداكن والفاتح
        function toggleTheme() {
            if (body.classList.contains('dark-mode')) {
                enableLightMode();
                showNotification(translations[currentLang].lightModeNotification);
            } else {
                enableDarkMode();
                showNotification(translations[currentLang].darkModeNotification);
            }
        }

        // تبديل اللغة بين العربية والإنجليزية
        function toggleLanguage() {
            // عرض محمل اللغة
            loaderText.textContent = translations[currentLang].loadingText;
            languageLoader.classList.add('active');

            // محاكاة وقت التحميل
            setTimeout(() => {
                // تبديل اللغة
                currentLang = currentLang === 'ar' ? 'en' : 'ar';
                applyLanguage(currentLang);

                // إخفاء محمل اللغة
                languageLoader.classList.remove('active');

                // عرض إشعار
                showNotification(translations[currentLang].languageNotification);
            }, 800);
        }

        // إضافة مهمة جديدة
        function addNewTask() {
            const taskText = taskInput.value.trim();

            if (taskText === '') {
                alert(translations[currentLang].emptyTaskAlert);
                taskInput.focus();
                return;
            }

            // إنشاء مهمة جديدة
            const newTask = {
                id: Date.now(),
                text: taskText,
                time: translations[currentLang].timeNow,
                completed: false
            };

            // إضافة المهمة إلى القائمة
            tasks.unshift(newTask);
            saveTasks();
            renderTasks();

            // تفريغ حقل الإدخال
            taskInput.value = '';
            taskInput.focus();

            // إظهار رسالة نجاح
            showNotification(`${translations[currentLang].addSuccess}: "${taskText}"`);
        }

        // تمديد المهمة (إعادة جدولتها)
        function extendTask(taskId) {
            const task = tasks.find(t => t.id === taskId);
            if (task) {
                task.time = translations[currentLang].timeLater;

                saveTasks();
                renderTasks();

                showNotification(`${translations[currentLang].extendSuccess}: "${task.text}"`);
            }
        }

        // حذف المهمة
        function deleteTask(taskId) {
            if (confirm(translations[currentLang].deleteConfirm)) {
                const task = tasks.find(t => t.id === taskId);
                tasks = tasks.filter(task => task.id !== taskId);
                saveTasks();
                renderTasks();

                showNotification(translations[currentLang].deleteSuccess);
            }
        }

        // تغيير حالة المهمة (مكتملة/غير مكتملة)
        function toggleTaskCompletion(taskId) {
            const task = tasks.find(t => t.id === taskId);
            if (task) {
                task.completed = !task.completed;
                task.time = task.completed ? translations[currentLang].timeCompleted : translations[currentLang].timeResumed;

                saveTasks();
                renderTasks();

                const status = task.completed ? translations[currentLang].statusCompleted : translations[currentLang].statusIncomplete;
                showNotification(`${translations[currentLang].toggleSuccess} to ${status}`);
            }
        }

        // عرض المهام
        function renderTasks() {
            // تفريغ القوائم
            activeTasksList.innerHTML = '';
            completedTasksList.innerHTML = '';

            // تصنيف المهام
            const activeTasks = tasks.filter(task => !task.completed);
            const completedTasks = tasks.filter(task => task.completed);

            // عرض حالة القوائم الفارغة
            emptyActiveTasks.style.display = activeTasks.length === 0 ? 'block' : 'none';
            emptyCompletedTasks.style.display = completedTasks.length === 0 ? 'block' : 'none';

            // عرض المهام النشطة
            activeTasks.forEach(task => {
                const taskElement = createTaskElement(task);
                activeTasksList.appendChild(taskElement);
            });

            // عرض المهام المكتملة
            completedTasks.forEach(task => {
                const taskElement = createTaskElement(task);
                completedTasksList.appendChild(taskElement);
            });
        }

        // إنشاء عنصر مهمة
        function createTaskElement(task) {
            const li = document.createElement('li');
            li.className = `task-item ${task.completed ? 'completed' : ''}`;
            li.dataset.id = task.id;

            li.innerHTML = `
                <div class="task-info">
                    <div class="task-text">${task.text}</div>
                    <div class="task-time">${task.time}</div>
                </div>
                <div class="task-actions">
                    ${!task.completed ?
                    `<button class="action-btn extend-btn" title="${translations[currentLang].extendTooltip}">
                            <i class="fas fa-clock"></i>
                        </button>` :
                    ''
                }
                    <button class="action-btn complete-btn" title="${task.completed ?
                    translations[currentLang].undoCompleteTooltip :
                    translations[currentLang].completeTooltip}">
                        <i class="fas ${task.completed ? 'fa-undo' : 'fa-check'}"></i>
                    </button>
                    <button class="action-btn delete-btn" title="${translations[currentLang].deleteTooltip}">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;

            // إضافة مستمعي الأحداث للأزرار
            const extendBtn = li.querySelector('.extend-btn');
            const completeBtn = li.querySelector('.complete-btn');
            const deleteBtn = li.querySelector('.delete-btn');

            if (extendBtn) {
                extendBtn.addEventListener('click', () => extendTask(task.id));
            }

            completeBtn.addEventListener('click', () => toggleTaskCompletion(task.id));
            deleteBtn.addEventListener('click', () => deleteTask(task.id));

            return li;
        }

        // حفظ المهام في localStorage
        function saveTasks() {
            localStorage.setItem('airTasks', JSON.stringify(tasks));
        }

        // عرض إشعار
        function showNotification(message) {
            // إنشاء عنصر الإشعار
            const notification = document.createElement('div');

            // تحديد موقع الإشعار حسب اللغة
            const positionStyle = currentLang === 'ar'
                ? 'left: 50%; transform: translateX(-50%);'
                : 'right: 50%; transform: translateX(50%);';

            notification.style.cssText = `
                position: fixed;
                top: 20px;
                ${positionStyle}
                background: linear-gradient(to right, #4b6cb7, #182848);
                color: white;
                padding: 15px 25px;
                border-radius: 10px;
                box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                z-index: 1000;
                font-weight: 600;
                animation: fadeInOut 3s ease-in-out;
            `;

            // في الوضع الداكن، تغيير لون الإشعار
            if (body.classList.contains('dark-mode')) {
                notification.style.background = 'linear-gradient(to right, #5a7bc8, #2a3a6a)';
            }

            // إضافة أنيميشن للإشعار
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes fadeInOut {
                    0% { opacity: 0; top: 0; }
                    15% { opacity: 1; top: 20px; }
                    85% { opacity: 1; top: 20px; }
                    100% { opacity: 0; top: 0; }
                }
            `;
            document.head.appendChild(style);

            notification.textContent = message;
            document.body.appendChild(notification);

            // إزالة الإشعار بعد 3 ثوان
            setTimeout(() => {
                notification.remove();
                style.remove();
            }, 3000);
        }