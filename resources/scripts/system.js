function copyToClipboard(value)
{
    navigator.clipboard.writeText(value);
}

// Provided via DOM element
function validateInputRange(inputEl, min, max)
{
    inputEl.value = clamp(inputEl.value, min, max);

    localStorage.setItem(inputEl.id, inputEl.value);
}