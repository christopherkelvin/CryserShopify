export function ToggleMode() {
    const Setmode = window.localStorage.getItem('mode');
    const newMode = Setmode === 'dark'? 'light' : 'dark';
    document.body.classList.toggle('dark');
    window.localStorage.setItem('mode', newMode);
}