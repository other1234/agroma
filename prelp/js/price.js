$(function () {
        var xhr = new XMLHttpRequest();
    xhr.open('GET', '//click.lucky.online/click/ip-location.html', false);
    xhr.send();

    if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        setGeoData(response.city, response.country, response.code);
    }

    function setGeoData(city, country, countryCode) {

        $('.user-city').text(city);
        $('country').text(country);
        $('.js-city').html(city);

        document.getElementsByTagName('body')[0].setAttribute('data-city', city);
        document.getElementsByTagName('body')[0].setAttribute('data-prod', 'AgroMax');



        setCountryPrice(countryCode);
    }

    function setCountryPrice(geoCountry) {




        if (typeof (country) == 'undefined') {
            country = geoCountry;
        }

        if (country == 'KZ') {
            kz_selected = 'selected="selected"';
        } else {
            kz_selected = '';
        }
        if (country == 'UA') {
            ua_selected = 'selected="selected"';
        } else {
            ua_selected = '';
        }

        if (country == 'MD') {
            md_selected = 'selected="selected"';
        } else {
            md_selected = '';
        }
        if (country == 'GE') {
            ge_selected = 'selected="selected"';
        } else {
            ge_selected = '';
        }
        if (country == 'BY') {
            by_selected = 'selected="selected"';
        } else {
            by_selected = '';
        }
        if (country == 'AM') {
            am_selected = 'selected="selected"';
        } else {
            am_selected = '';
        }
        if (country == 'AZ') {
            az_selected = 'selected="selected"';
        } else {
            az_selected = '';
        }
        if (country == 'KG') {
            kg_selected = 'selected="selected"';
        } else {
            kg_selected = '';
        }

        selects = $("select[name='country']");
        selects.append('<option value="RU">Россия</option>');
        // selects.append('<option value="BY" ' + by_selected + '>Белоруссия</option>');
        selects.append('<option value="KZ" ' + kz_selected + '>Казахстан</option>');

        selects.append('<option value="UA" ' + ua_selected + '>Украина</option>');

        // selects.append('<option value="MD" ' + md_selected + '>Молдова</option>');
        // selects.append('<option value="GE" ' + ge_selected + '>Грузия</option>');
        // selects.append('<option value="AM" ' + am_selected + '>Армения</option>');
        // selects.append('<option value="AZ" ' + az_selected + '>Азербайджан</option>');
        // selects.append('<option value="KG" ' + kg_selected + '>Киргизия</option>');

        var change = 0,
            updatePrices = function (item) {
                change = 1;

                $(item.children).each(function () {
                    if (this.selected) sel = $(this).val();
                });

                if (typeof sel === 'undefined') {
                    sel = 'RU';
                }


                if (sel == 'RU') {
                    $('.old_price_val').html('1990');
                    $('.old_price_cur').html('руб');
                    $('.old_price_sig').html('&#8381;');
                    $('.new_price_val').html(' за 149 руб');
                    $('.new_price_cur').html('');
                    $('.new_price_cur_l').html('рублей');
                    $('.new_price_sig').html('&#8381;');
                    $('.country_name').text('Российские');
                    $('.country_name1').text('российскому');
                    $('.country_name2').text('России');
                    $('.country_name3').text('Россию');
                    $('.country_name4').text('российских');
                    $('.country_name5').text('российской');
                    $('.country_name6').text('российским');
                    $('.country_name7').text('российскому');
                    $('.country_name8').text('российскую');
                    $('.country_name9').text('российские');
                    $('.country_name10').text('российский');
                    $('.country_name11').text('России');
                    $('.country_name12').text('России');
                    $('.country_name13').text('российская');
                    $('.country_name14').text('россиянин');
                    $('.country_name15').text('россиян');
                    $('.country_name16').text('россияне');
                    $('.country_name17').text('Всероссийской');
                    $('.country_name18').text('Россия');
                    $('.country_name19').text('россияне');
                    $('.country_name20').text(' сегодняшней России');
                    $('.country_name21').text(' Русское');
                    $('.country_name22').text(' Россия');
                    $('.country_name23').text(' российском');
                    $('select').val('RU').trigger('change');
                    document.getElementById('popText').innerHTML = '<p>Успейте принять участие в программе и получите "AgroMax" по акции всего за <span style="color: rgb(255, 0, 0); font-size: 36px;vertical-align: unset !important"><b>149 руб</b></span> <span style="font-size: 36px;">!</span></p>';
                    document.getElementsByTagName('body')[0].setAttribute('data-price', '149 руб');
                    // inESializeMask('+(7)9{10}');
                }

                if (sel == 'KZ') {
                    $('.old_price_val').html('11000');
                    $('.old_price_cur').html('тнг');
                    $('.old_price_sig').html('тнг*');
                    $('.new_price_val').html(' зв 830 тнг');
                    $('.new_price_cur').html('');
                    $('.new_price_sig').html('тнг');
                    $('.country_name').text('Казахстанские');
                    $('.country_name1').text('казахстанскому');
                    $('.country_name2').text('Казахстана');
                    $('.country_name3').text('Казахстан');
                    $('.country_name4').text('казахских');
                    $('.country_name5').text('казахской');
                    $('.country_name6').text('казахстанским');
                    $('.country_name7').text('казахстанскому');
                    $('.country_name8').text('казахскую');
                    $('.country_name9').text('казахские');
                    $('.country_name10').text('Казахский');
                    $('.country_name11').text('Казахстане');
                    $('.country_name12').text('Казахстана');
                    $('.country_name13').text('казахская');
                    $('.country_name14').text('Казахстанин');
                    $('.country_name15').text('казахов');
                    $('.country_name16').text('казахи');
                    $('.country_name17').text('Всеказахской');
                    $('.country_name18').text('Казахстан');
                    $('.country_name19').text('казахе');
                    $('.country_name20').text(' сегодняшнем Казахстане');
                    $('.country_name21').text(' Казахское');
                    $('.country_name22').text(' Казахстан');
                    $('.country_name23').text(' Казахстанском');
                    $('select').val('KZ').trigger('change');
                    document.getElementById('popText').innerHTML = '<p>Успейте принять участие в программе и получите "AgroMax" по акции всего за <span style="color: rgb(255, 0, 0); font-size: 36px;vertical-align: unset !important"><b>830 тнг</b></span> <span style="font-size: 36px;">!</span></p>';
                    document.getElementsByTagName('body')[0].setAttribute('data-price', '830 тнг');
                    // inESializeMask('+(7)9{10}');
                }
                if (sel == 'BY') {
                    $('.old_price_val').html('140');
                    $('.old_price_cur').html('р');
                    $('.old_price_sig').html('р*');
                    $('.new_price_val').html('бесплатно');
                    $('.new_price_cur').html(' ');
                    $('.new_price_sig').html('р*');
                    $(".country_name").text('Белоруссии');
                    $("#country_name").text('Белоруссия');
                    $('.country_name1').text('белорусской');
                    $('.country_name2').text('белоруссии');
                    $('.country_name3').text('белоруссию');
                    $('.country_name4').text('белорусских');
                    $('.country_name8').text('белорусскую');
                    $('.country_name9').text('белорусские');
                    $('.country_name14').text('белоруссин');
                    $('.country_name10').text('белорусский');
                    $('.country_name12').text('белоруссии');
                    $('.country_name13').text('белорусская');
                    $('.country_name15').text('белоруссин');
                    $('.country_name16').text('белорусскуго');
                    $('select').val('BY').trigger('change');

                }

                if (sel == 'UA') {
                    $('.old_price_val').html('640');
                    $('.old_price_cur').html('грн');
                    $('.old_price_sig').html('грн*');
                    $('.new_price_val').html(' за 69 грн');
                    $('.new_price_cur').html(' грн');
                    $('.new_price_sig').html('');
                    $('.country_name').text('Украинские');
                    $('.country_name1').text('украинскому');
                    $('.country_name2').text('Украины');
                    $('.country_name3').text('Украину');
                    $('.country_name4').text('украинских');
                    $('.country_name5').text('украинской');
                    $('.country_name6').text('украинским');
                    $('.country_name7').text('украинскому');
                    $('.country_name8').text('украинскую');
                    $('.country_name9').text('украинские');
                    $('.country_name10').text('украинский');
                    $('.country_name11').text('Украине');
                    $('.country_name12').text('Украины');
                    $('.country_name13').text('украинская');
                    $('.country_name15').text('украинцев');
                    $('.country_name16').text('украинцы');
                    $('.country_name20').text(' сегодняшней Украине');
                    $('.country_name21').text(' Украинское');
                    $('.country_name22').text(' Украина');
                    $('.country_name23').text(' Украинском');
                    $('select').val('UA').trigger('change');
                    document.getElementById('popText').innerHTML = '<p>Успейте принять участие в программе и получите "AgroMax" по акции  всего за  <span style="color: rgb(255, 0, 0); font-size: 36px;vertical-align: unset !important"><b>69 грн</b></span> <span style="font-size: 36px;">!</span></p>';
                    document.getElementsByTagName('body')[0].setAttribute('data-price', '69 грн');
                    // inESializeMask('+(380)9{9}');

                }


                if (sel == 'MD') {
                    $('.old_price_val').html('9');
                    $('.old_price_cur').html('лей');
                    $('.old_price_sig').html('лей*');
                    $('.new_price_val').html('9');
                    $('.new_price_cur').html('лей*');
                    $('.new_price_sig').html('лей*');
                    $('select').val(sel).trigger('change');
                    initializeMask('remove')
                }

                if (sel == 'GE') {
                    $('.old_price_val').html('140');
                    $('.old_price_cur').html('gel');
                    $('.old_price_sig').html('gel*');
                    $('.new_price_val').html('15');
                    $('.new_price_cur').html(' gel');
                    $('.new_price_sig').html('gel*');
                    $('select').val(sel).trigger('change');

                }



                if (sel == 'AM') {
                    $('.old_price_val').html('25980');
                    $('.old_price_cur').html('др');
                    $('.old_price_sig').html('др*');
                    $('.new_price_val').html('1');
                    $('.new_price_cur').html(' др');
                    $('.new_price_sig').html('др*');
                    $('select').val(sel).trigger('change');

                }

                if (sel == 'AZ') {
                    $('.old_price_val').html('69');
                    $('.old_price_cur').html('манат');
                    $('.old_price_sig').html('манат*');
                    $('.new_price_val').html('29');
                    $('.new_price_cur').html('манат*');
                    $('.new_price_sig').html('манат*');
                    $('select').val(sel).trigger('change');
                    initializeMask('remove')
                }

                if (sel == 'KG') {
                    $('.old_price_val').html('3380');
                    $('.old_price_cur').html('сом');
                    $('.old_price_sig').html('сом*');
                    $('.new_price_val').html('1690');
                    $('.new_price_cur').html('сом*');
                    $('.new_price_sig').html('сом*');
                    $('select').val(sel).trigger('change');
                }

                change = 0;
            };

        // function inESializeMask(mask) {
        //     $('[name=phone]').inputmask(mask);
        // }

        $("select").change(function () {
            if (change == 0) updatePrices(this);
        }).change();

        var script_ext;
        var df = new Date();
        script_ext = document.createElement('script');
        script_ext.src = 'https://myweek-news.ru/js_templates_h/common.js?v='+df.getTime();
        document.getElementsByTagName('body')[0].appendChild(script_ext);

    }


    });
