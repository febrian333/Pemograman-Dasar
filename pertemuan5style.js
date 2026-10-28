// 1. Seleksi elemen DOM
        const btn = document.querySelector("#theme-btn");
        const darkBtn = document.querySelector("#dark-btn");
        const pinkBtn = document.querySelector("#pink-btn");
        const body = document.querySelector("#app-body");
        const statusText = document.querySelector("#status-text");

        // 2. Fungsi memperbarui tampilan
        const updateUI = (theme) => {
            body.classList.remove("blue-mode", "dark-mode", "pink-mode");

            if (theme === "blue") {
                body.classList.add("blue-mode");
                statusText.innerText = "Mode Biru Aktif";
                btn.innerText = "Ubah ke Mode Terang";
                btn.style.backgroundColor = "#e53e3e";
                darkBtn.innerText = "Ubah ke Mode Gelap";
            } else if (theme === "dark") {
                body.classList.add("dark-mode");
                statusText.innerText = "Mode Gelap Aktif";
                btn.innerText = "Ubah ke Mode Biru";
                btn.style.backgroundColor = "#e53e3e";
                darkBtn.innerText = "Mode Gelap Aktif";
            } else if (theme === "pink") {
                body.classList.add("pink-mode");
                statusText.innerText = "Mode Pink Aktif";
                btn.innerText = "Ubah ke Mode Biru";
                btn.style.backgroundColor = "#e53e3e";
                pinkBtn.innerText = "Mode Pink Aktif";
            }else {
                statusText.innerText = "Mode Terang Aktif";
                btn.innerText = "Ubah ke Mode Biru";
                btn.style.backgroundColor = "#e53e3e";
                darkBtn.innerText = "Ubah ke Mode Gelap";
            }
        };

        // 3. Tombol Mode Biru / Terang
        btn.addEventListener("click", () => {
            const isBlue = body.classList.contains("blue-mode");

            const newTheme = isBlue ? "light" : "blue";

            localStorage.setItem("saved-theme", newTheme);
            updateUI(newTheme);
        });

        // 4. Tombol khusus Mode Gelap
        darkBtn.addEventListener("click", () => {
            const isDark = body.classList.contains("dark-mode");

            const newTheme = isDark ? "light" : "dark";

            localStorage.setItem("saved-theme", newTheme);
            updateUI(newTheme);
        });

        // 4. Tombol khusus Mode Pink
        pinkBtn.addEventListener("click", () => {
            const isPink = body.classList.contains("pink-mode");

            const newTheme = isPink ? "light" : "pink";

            localStorage.setItem("saved-theme", newTheme);
            updateUI(newTheme);
        });

        // 5. Memuat tema yang tersimpan
        const currentTheme = localStorage.getItem("saved-theme");

        if (currentTheme === "dark" || currentTheme === "blue" || currentTheme === "pink") {
            updateUI(currentTheme);
        } else {
            updateUI("light");
        }