function selectType(){
    var sel = document.getElementById("selectType");
    var val = sel.options[sel.selectedIndex].value;
    
    if ( val == "def" ){
        document.getElementById('default').style.display='none';
        
    }
    
    if( val == "rt" ){
        document.getElementById('default').style.display='block';
        document.getElementById('rtID').style.display='block';
        document.getElementById('stID').style.display='none';
        document.getElementById('ktID').style.display='none';
        document.getElementById('ptID').style.display='none';
        document.getElementById('atID').style.display='none';
        document.getElementById('itID').style.display='none';
    }
    
    if( val == "it" ){
        document.getElementById('default').style.display='block';
        document.getElementById('rtID').style.display='none';
        document.getElementById('stID').style.display='none';
        document.getElementById('ktID').style.display='none';
        document.getElementById('ptID').style.display='none';
        document.getElementById('atID').style.display='none';
        document.getElementById('itID').style.display='block';
    }
    
    if( val == "st" ){
        document.getElementById('default').style.display='block';
        document.getElementById('rtID').style.display='none';
        document.getElementById('stID').style.display='block';
        document.getElementById('ktID').style.display='none';
        document.getElementById('ptID').style.display='none';
        document.getElementById('atID').style.display='none';
        document.getElementById('itID').style.display='none';
    }
    
    if( val == "kt" ){
        document.getElementById('default').style.display='block';
        document.getElementById('rtID').style.display='none';
        document.getElementById('stID').style.display='none';
        document.getElementById('ktID').style.display='block';
        document.getElementById('ptID').style.display='none';
        document.getElementById('atID').style.display='none';
        document.getElementById('itID').style.display='none';
    }
    
    if( val == "pt" ){
        document.getElementById('default').style.display='block';
        document.getElementById('rtID').style.display='none';
        document.getElementById('stID').style.display='none';
        document.getElementById('ktID').style.display='none';
        document.getElementById('ptID').style.display='block';
        document.getElementById('atID').style.display='none';
        document.getElementById('itID').style.display='none';
    }
    
    if( val == "at" ){
        document.getElementById('default').style.display='block';
        document.getElementById('rtID').style.display='none';
        document.getElementById('stID').style.display='none';
        document.getElementById('ktID').style.display='none';
        document.getElementById('ptID').style.display='none';
        document.getElementById('atID').style.display='block';
        document.getElementById('itID').style.display='none';
    }
}


function select_rt(){
    var sel = document.getElementById("select_rt");
    var val = sel.options[sel.selectedIndex].value;

    if( val == "VUZ" ){
        document.getElementById('VUZ_rt').style.display='block';
        document.getElementById('SPO_rt').style.display='none';
    }
    if( val == "SPO" ){
        document.getElementById('SPO_rt').style.display='block';
        document.getElementById('VUZ_rt').style.display='none';
    }
    if( val == "def" ){
        document.getElementById('VUZ_rt').style.display='none';
        document.getElementById('SPO_rt').style.display='none';
    }
}

function select_it(){
    var sel = document.getElementById("select_it");
    var val = sel.options[sel.selectedIndex].value;

    if( val == "VUZ" ){
        document.getElementById('VUZ_it').style.display='block';
        document.getElementById('SPO_it').style.display='none';
    }
    if( val == "SPO" ){
        document.getElementById('SPO_it').style.display='block';
        document.getElementById('VUZ_it').style.display='none';
    }
    if( val == "def" ){
        document.getElementById('VUZ_it').style.display='none';
        document.getElementById('SPO_it').style.display='none';
    }
}

function select_st(){
    var sel = document.getElementById("select_st");
    var val = sel.options[sel.selectedIndex].value;

    if( val == "VUZ" ){
        document.getElementById('VUZ_st').style.display='block';
        document.getElementById('SPO_st').style.display='none';
    }
    if( val == "SPO" ){
        document.getElementById('SPO_st').style.display='block';
        document.getElementById('VUZ_st').style.display='none';
    }
    if( val == "def" ){
        document.getElementById('VUZ_st').style.display='none';
        document.getElementById('SPO_st').style.display='none';
    }
}

function select_kt(){
    var sel = document.getElementById("select_kt");
    var val = sel.options[sel.selectedIndex].value;

    if( val == "VUZ" ){
        document.getElementById('VUZ_kt').style.display='block';
        document.getElementById('SPO_kt').style.display='none';
    }
    if( val == "SPO" ){
        document.getElementById('SPO_kt').style.display='block';
        document.getElementById('VUZ_kt').style.display='none';
    }
    if( val == "def" ){
        document.getElementById('VUZ_kt').style.display='none';
        document.getElementById('SPO_kt').style.display='none';
    }
}

function select_pt(){
    var sel = document.getElementById("select_pt");
    var val = sel.options[sel.selectedIndex].value;

    if( val == "VUZ" ){
        document.getElementById('VUZ_pt').style.display='block';
        document.getElementById('SPO_pt').style.display='none';
    }
    if( val == "SPO" ){
        document.getElementById('SPO_pt').style.display='block';
        document.getElementById('VUZ_pt').style.display='none';
    }
    if( val == "def" ){
        document.getElementById('VUZ_pt').style.display='none';
        document.getElementById('SPO_pt').style.display='none';
    }
}

function select_at(){
    var sel = document.getElementById("select_at");
    var val = sel.options[sel.selectedIndex].value;

    if( val == "VUZ" ){
        document.getElementById('VUZ_at').style.display='block';
        document.getElementById('SPO_at').style.display='none';
    }
    if( val == "SPO" ){
        document.getElementById('SPO_at').style.display='block';
        document.getElementById('VUZ_at').style.display='none';
    }
    if( val == "def" ){
        document.getElementById('VUZ_at').style.display='none';
        document.getElementById('SPO_at').style.display='none';
    }
}