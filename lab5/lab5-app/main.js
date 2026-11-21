const hostname = document.getElementById('hostname');
const ip = document.getElementById('ip');
const dbms = document.getElementById('dbms');
const port = document.getElementById('port');
const tpl = document.getElementById('student-record-tpl');
const recordContainer = document.getElementById('student-record-container');
const config = await (await fetch('/api/config')).json();
const res = await (await fetch('/api/student-record')).json();

hostname.textContent = config.hostname;
ip.textContent = config.ips.join(', ')
dbms.textContent = config.dbDriver;
port.textContent = config.port;

res.map((r) => {
    const clone = tpl.content.cloneNode(true);
    clone.querySelector('.student-record-id').textContent = r.id;
    clone.querySelector('.student-record-full-name').textContent = r.full_name;
    clone.querySelector('.student-record-group-code').textContent = r.group_code;
    recordContainer.appendChild(clone);
});