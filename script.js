linkTable = document.querySelector(".linkTable");

let su = {};
su['rain_dripping'] = {"id": "223079894", "token": "s-ZDqsN"};
su['rain_shack'] = {"id": "223083315", "token": "s-yeipa"};
su['rain_porch'] = {"id": "223083261", "token": "s-5I4Z3"};
su['rain_gutter'] = {"id": "223083061", "token": "s-Gzgks"};
su['rain_dense'] = {"id": "223082967", "token": "s-zUr6e"};
su['bird_blackbird'] = {"id": "223092566", "token": "s-rqyYh"};
su['bird_crow'] = {"id": "223099964", "token": "s-OSOdl"};
su['bird_nightingale'] = {"id": "223101114", "token": "s-I7gcG"};
su['fire_calm'] = {"id": "223101682", "token": "s-IQB5u"};
su['fire_crackling'] = {"id": "223102974", "token": "s-qAjMn"};
su['footsteps_gravel'] = {"id": "223103767", "token": "s-GKzGy"};
su['footsteps_pavement'] = {"id": "223104308", "token": "s-wFAqC"};
su['footsteps_snow'] = {"id": "223105076", "token": "s-o9AJt"};
su['forest_eerie'] = {"id": "223105809", "token": "s-2FSGR"};
su['forest_evening'] = {"id": "223106235", "token": "s-owE9E"};
su['leaves'] = {"id": "223106761", "token": "s-RynnQ"};
su['night_meadow'] = {"id": "223107170", "token": "s-SzmV4"};
su['night_suburban'] = {"id": "223108031", "token": "s-FvqXq"};
su['noise_brown'] = {"id": "223111841", "token": "s-L01i0"};
su['noise_pink'] = {"id": "223112572", "token": "s-EEaaD"};
su['noise_white'] = {"id": "223112842", "token": "s-8tRKA"};
su['river_calm'] = {"id": "223113353", "token": "s-wYeZk"};
su['river_strong'] = {"id": "223114166", "token": "s-HcaEp"};
su['thunder'] = {"id": "223114509", "token": "s-TufXS"};
su['waves_beach'] = {"id": "223115036", "token": "s-bWPUq"};
su['waves_slow'] = {"id": "223115385", "token": "s-eIQ9G"};
su['wind_howling'] = {"id": "223116111", "token": "s-QUbqS"};
su['wind_steady'] = {"id": "223116465", "token": "s-XI4Jo"};

su['frog_chorus'] = {"id": "241962664", "token": "s-NN9OW"};
su['frog_cricket'] = {"id": "241970829", "token": "s-jYpHz"};
su['frog_natterjack'] = {"id": "241970971", "token": "s-1TRF3"};
su['frog_wood'] = {"id": "241971062", "token": "s-OpVMw"};

su['restaurant_english'] = {"id": "241964233", "token": "s-fAxhO"};
su['restaurant_french'] = {"id": "241964247", "token": "s-8391m"};
su['restaurant_german'] = {"id": "241964225", "token": "s-S8Q9K"};
su['restaurant_pub'] = {"id": "241964299", "token": "s-EeUZI"};

su['train_fast'] = {"id": "241964549", "token": "s-S1kXS"};
su['train_slow'] = {"id": "241964541", "token": "s-9sBEw"};

Object.keys(su).forEach(key =>{
    
    let newTr = document.createElement('tr');
    let newTd1 = document.createElement('td');
    let newTd2 = document.createElement('td');

    let text = document.createElement('p');
    text.textContent = key;


    let linkPlay = document.createElement('a');
    linkPlay.href = `https://api.soundcloud.com/tracks/${su[key].id}/stream?secret_token=${su[key].token}&client_id=926cc5f8cbf24759af0cf0bfa825e3c9`;
    
    let button = document.createElement('button');
    button.textContent = "Download";

    linkPlay.appendChild(button)
    newTd1.appendChild(text);
    newTd2.appendChild(linkPlay);
    newTr.appendChild(newTd1);
    newTr.appendChild(newTd2);
    linkTable.appendChild(newTr);
    

});


//https://api.soundcloud.com/tracks/"+su[sound_name].id+"/stream?secret_token="+su[sound_name].token+"&client_id=926cc5f8cbf24759af0cf0bfa825e3c9