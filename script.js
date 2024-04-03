document.addEventListener("DOMContentLoaded", function() {
    // Funkcja do wyświetlania komunikatu dla kombinacji skrótów
    function displayShortcutExplanation(shortcut) {
        const explanations = {
            "X": "Ctrl + X — wycinanie",
            "C": "Ctrl + C (lub Ctrl + Insert) — kopiowanie",
            "V": "Ctrl + V (lub Shift + Insert) — wklejanie",
            "Z": "Ctrl + Z — cofnięcie ostatnio wykonanej czynności",
            "Y": "Ctrl + Y — powtórzenie ostatnio wykonanej czynności",
            "F": "Ctrl + F lub G — wyświetlenie okna wyszukiwania wyrazów lub fraz",
            "N": "Ctrl + N — utworzenie nowego pliku lub folderu",
            "S": "Ctrl + S — zapisywanie",
            "A": "Ctrl + A — zaznaczenie całego tekstu lub wszystkich elementów używanego programu",
            "D": "Ctrl + D (lub Delete) — skasowanie (przeniesienie do kosza)" + "Klawisz Windows + D — pokazanie i chowanie pulpitu",
            "R": "Ctrl + R (lub F5) — odświeżenie",
            "T": "Ctrl + T — Otwórz nową kartę",
            "W": "Ctrl + W — Zamknij aktywną kartę",
            "Tab": "Ctrl + Tab — Przejdź do następnej karty" + "Alt + Tab — przełączanie między otwartymi programami",
            "L": "Ctrl + L — Przejdź do paska adresu" + "Klawisz Windows + L — uśpienie komputera",
            "ArrowRight": "Ctrl + strzałka w prawo — przejście kursorem na początek następnego wyrazu w dokumencie",
            "ArrowLeft": "Ctrl + strzałka w lewo — przejście kursorem na początek poprzedniego wyrazu w dokumencie",
            "ArrowDown": "Ctrl + strzałka w dół — przejście kursorem na początek następnego akapitu tekstu",
            "ArrowUp": "Ctrl + strzałka w górę — przejście kursorem na początek poprzedniego akapitu tekstu",
            "Alt": "Ctrl + Alt + klawisz Tab — włączenie strzałek do przełączania się między otwartymi programami",
            "Start": "Ctrl + klawisze strzałek — powiększenie lub zmniejszenie menu Start (gdy go używasz)",
            "Space": "Ctrl + klawisz strzałki + spacja — zaznaczanie pojedynczych elementów w oknie programu albo na pulpicie" + "Alt + spacja — wyświetlenie menu skrótów używanego programu",
            "Shift": "Ctrl + Shift z klawiszem strzałki — zaznaczenie bloku tekstu",
            "Escape": "Ctrl + Esc — otwarcie menu Start" + "Alt + Esc — przełączanie pomiędzy programami od otwartego najwcześniej",
            "ShiftEsc": "Ctrl + Shift + Esc — otwarcie Menedżera zadań",
            "ShiftKey": "Ctrl + Shift — zmiana układu klawiatury",
            "Enter": "Alt + Enter — pokazanie okna z właściwościami"
            
        };

        if (explanations.hasOwnProperty(shortcut)) {
            alert(explanations[shortcut]);
        } else {
            alert("Brak wyjaśnienia dla tego skrótu.");
        }
    }

    // Funkcja obsługująca kliknięcie na przyciski
    document.querySelectorAll('.key').forEach(key => {
        key.addEventListener('click', function() {
            const shortcut = this.textContent;
            displayShortcutExplanation(shortcut);
        });
    });
});
