/**
 * Created by  on 2/1/2018.
 */

function htmlEscape(text) {
    let map = { '"': '&quot;', '&': '&amp;',
        "'": '&#39;', '<': '&lt;', '>': '&gt;' };
    return text.replace(/[\"&'<>]/g, ch => map[ch]);
}