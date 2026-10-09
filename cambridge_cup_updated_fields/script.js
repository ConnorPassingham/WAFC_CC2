// Fixtures and field allocations supplied by Warkworth AFC.
const teams = ["U8", "U9", "U10 Red", "U10 Black", "U12/13 Girls"];
const days = [{label:"Saturday 24 October",short:"Sat 24 Oct"},{label:"Sunday 25 October",short:"Sun 25 Oct"},{label:"Monday 26 October",short:"Mon 26 Oct"}];
const fixtures = [
  {day:0, time:'9:00 AM', team:'U10 Black', opponent:'Christchurch', pitch:'Field 5'},
  {day:0, time:'10:00 AM', team:'U8', opponent:'90+', pitch:'Field 17'},
  {day:0, time:'10:00 AM', team:'U12/13 Girls', opponent:'Havelock North', pitch:'Field 13'},
  {day:0, time:'11:05 AM', team:'U10 Black', opponent:'Franklin', pitch:'Field 6'},
  {day:0, time:'1:00 PM', team:'U10 Red', opponent:'Cambridge Black', pitch:'Field 15'},
  {day:0, time:'1:00 PM', team:'U8', opponent:'Waitara', pitch:'Field 16'},
  {day:0, time:'1:00 PM', team:'U10 Black', opponent:'FFC Blue', pitch:'Field 5'},
  {day:0, time:'1:00 PM', team:'U12/13 Girls', opponent:'Hamilton Wanderers', pitch:'Field 11'},
  {day:0, time:'2:00 PM', team:'U9', opponent:'90+ White', pitch:'Field 15'},
  {day:0, time:'3:00 PM', team:'U8', opponent:'Taupo', pitch:'Field 17'},
  {day:0, time:'3:00 PM', team:'U10 Red', opponent:'90+', pitch:'Field 14'},
  {day:0, time:'4:00 PM', team:'U9', opponent:'All Stars', pitch:'Field 14'},
  {day:0, time:'5:00 PM', team:'U10 Red', opponent:'Pro Project White', pitch:'Field 14'},
  {day:1, time:'8:00 AM', team:'U10 Red', opponent:'New Plymouth Rangers', pitch:'Field 6'},
  {day:1, time:'9:00 AM', team:'U12/13 Girls', opponent:'Cambridge', pitch:'Field 12'},
  {day:1, time:'10:00 AM', team:'U9', opponent:'Patagonia', pitch:'Field 15'},
  {day:1, time:'11:00 AM', team:'U12/13 Girls', opponent:'UFA TE PUKE', pitch:'Field 4'},
  {day:1, time:'12:00 PM', team:'U8', opponent:'Omokoroa', pitch:'Field 17'},
  {day:1, time:'2:00 PM', team:'U8', opponent:'Cambridge A', pitch:'Field 16'},
  {day:1, time:'2:00 PM', team:'U12/13 Girls', opponent:'Two Touch Football', pitch:'Field 13'},
  {day:2, time:'9:00 AM', team:'U8', opponent:'Cambridge B', pitch:'Field 16'},
 ];
function miniFixtures(team){
  return days.map((day, dayIndex) => {
    const matches = fixtures.filter(f => f.day === dayIndex && f.team === team);
    const rows = matches.length ? matches.map(f => `<div class="mini-game"><strong>${f.time}</strong><span>vs ${f.opponent} · ${f.pitch || 'Pitch TBC'}</span></div>`).join('') : '<div class="mini-game"><strong>TBC</strong><span>Later fixtures depend on group standings</span></div>';
    return `<div class="mini-day"><div class="mini-day-title">${day.label}</div>${rows}</div>`;
  }).join('');
}
document.querySelectorAll('.team-card').forEach((card, index) => {
  const el = card.querySelector('.mini-days');
  if (el) el.innerHTML = miniFixtures(teams[index]);
});
function renderSchedule(dayIndex=0){
  const matches = fixtures.filter(f => f.day === dayIndex);
  const rows = matches.map(f => `<tr><td>${f.time}</td><td><strong>${f.team}</strong></td><td>${f.team} vs ${f.opponent}</td><td>${f.opponent}</td><td><span class="tbc">${f.pitch || 'Pitch TBC'}</span></td></tr>`);
  document.querySelector('#full-schedule').innerHTML = `<table class="schedule-table"><thead><tr><th>Kick-off</th><th>Warkworth Team</th><th>Fixture</th><th>Opponent</th><th>Pitch</th></tr></thead><tbody>${rows.join('')}</tbody></table><p class="schedule-notice">Later fixtures and finals: TBC depending on group standings. Later progression fixtures will be confirmed once group standings are known.</p>`;
}
renderSchedule();
document.querySelectorAll('.day-tab').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.day-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderSchedule(Number(btn.dataset.day));
}));
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('#nav');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
