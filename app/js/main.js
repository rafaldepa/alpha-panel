const dateDiff = () => {
  var dateStart = document.getElementById("inputDealstart").value.split('-');
  var yearStart = dateStart[0];
  var monthStart = dateStart[1];
  var dayStart = dateStart[2];

  var dateFinish = document.getElementById("inputDealfinish").value.split('-');
  var yearFinish = dateFinish[0];
  var monthFinish = dateFinish[1];
  var dayFinish = dateFinish[2];

  var dateFinishreal = document.getElementById("inputDealfinishreal").value.split('-');
  var yearFinishreal = dateFinishreal[0];
  var monthFinishreal = dateFinishreal[1];
  var dayFinishreal = dateFinishreal[2];

  var deal_duration = ((yearFinish-yearStart)*12)+(monthFinish-monthStart);
  if(dayFinish < dayStart)  deal_duration = deal_duration-1;

  var deal_duration_real = ((yearFinishreal-yearStart)*12)+(monthFinishreal-monthStart);
  if(dayFinishreal < dayStart)  deal_duration_real = deal_duration_real-1;

  var deal_diff = deal_duration - deal_duration_real;

  var claim_percent = Math.floor(((deal_diff*100)/deal_duration));
  var bank_commision = document.getElementById("inputBankcommision").value;
  var claim_amount = (bank_commision*(claim_percent/100)).toFixed(2);

  document.getElementById('inputClaimpercent').value = claim_percent;
  document.getElementById('inputClaimamount').value = claim_amount;   
}

const initDatepicker = () => {
    $(".datepicker").datepicker({ dateFormat: 'yy-mm-dd' });
}


initDatepicker();