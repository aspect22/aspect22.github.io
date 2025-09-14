function copyText(text) {
    // Use navigator.clipboard if available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            alert("Copied: " + text);
        }).catch(err => {
            console.error("Clipboard write failed:", err);
        });
    } else {
        // Fallback for insecure contexts
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";  // avoid scrolling
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand("copy");
            alert("Copied: " + text);
        } catch (err) {
            console.error("Fallback copy failed:", err);
        }
        document.body.removeChild(textarea);
    }
}
