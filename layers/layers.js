ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32631").setExtent([367678.841111, 786448.539074, 402167.187936, 803503.970291]);
var wms_layers = [];

var format_Lim_com_0 = new ol.format.GeoJSON();
var features_Lim_com_0 = format_Lim_com_0.readFeatures(json_Lim_com_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Lim_com_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lim_com_0.addFeatures(features_Lim_com_0);
var lyr_Lim_com_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lim_com_0, 
                style: style_Lim_com_0,
                interactive: true,
                title: '<img src="styles/legend/Lim_com_0.png" /> Lim_com'
            });
var format_Sant_1 = new ol.format.GeoJSON();
var features_Sant_1 = format_Sant_1.readFeatures(json_Sant_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Sant_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sant_1.addFeatures(features_Sant_1);
var lyr_Sant_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sant_1, 
                style: style_Sant_1,
                interactive: true,
                title: '<img src="styles/legend/Sant_1.png" /> Santé'
            });
var format_Route_vrai_2 = new ol.format.GeoJSON();
var features_Route_vrai_2 = format_Route_vrai_2.readFeatures(json_Route_vrai_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Route_vrai_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Route_vrai_2.addFeatures(features_Route_vrai_2);
var lyr_Route_vrai_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Route_vrai_2, 
                style: style_Route_vrai_2,
                interactive: true,
    title: 'Route_vrai<br />\
    <img src="styles/legend/Route_vrai_2_0.png" /> BITUME<br />\
    <img src="styles/legend/Route_vrai_2_1.png" /> PAVE<br />\
    <img src="styles/legend/Route_vrai_2_2.png" /> NON_REVETU<br />'
        });
var format_Pointeau_3 = new ol.format.GeoJSON();
var features_Pointeau_3 = format_Pointeau_3.readFeatures(json_Pointeau_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Pointeau_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pointeau_3.addFeatures(features_Pointeau_3);
var lyr_Pointeau_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointeau_3, 
                style: style_Pointeau_3,
                interactive: true,
                title: '<img src="styles/legend/Pointeau_3.png" /> Point eau'
            });
var format_LOC_4 = new ol.format.GeoJSON();
var features_LOC_4 = format_LOC_4.readFeatures(json_LOC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_LOC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOC_4.addFeatures(features_LOC_4);
var lyr_LOC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LOC_4, 
                style: style_LOC_4,
                interactive: true,
    title: 'LOC<br />\
    <img src="styles/legend/LOC_4_0.png" /> VILLAGE<br />\
    <img src="styles/legend/LOC_4_1.png" /> VILLE<br />'
        });
var format_Lim_admi_5 = new ol.format.GeoJSON();
var features_Lim_admi_5 = format_Lim_admi_5.readFeatures(json_Lim_admi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Lim_admi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lim_admi_5.addFeatures(features_Lim_admi_5);
var lyr_Lim_admi_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lim_admi_5, 
                style: style_Lim_admi_5,
                interactive: true,
                title: '<img src="styles/legend/Lim_admi_5.png" /> Lim_admi'
            });
var format_Ligne_elec_6 = new ol.format.GeoJSON();
var features_Ligne_elec_6 = format_Ligne_elec_6.readFeatures(json_Ligne_elec_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Ligne_elec_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ligne_elec_6.addFeatures(features_Ligne_elec_6);
var lyr_Ligne_elec_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ligne_elec_6, 
                style: style_Ligne_elec_6,
                interactive: true,
                title: '<img src="styles/legend/Ligne_elec_6.png" /> Ligne_elec'
            });
var format_Eau_7 = new ol.format.GeoJSON();
var features_Eau_7 = format_Eau_7.readFeatures(json_Eau_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Eau_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eau_7.addFeatures(features_Eau_7);
var lyr_Eau_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Eau_7, 
                style: style_Eau_7,
                interactive: true,
                title: '<img src="styles/legend/Eau_7.png" /> Eau'
            });
var format_Borne_geo_8 = new ol.format.GeoJSON();
var features_Borne_geo_8 = format_Borne_geo_8.readFeatures(json_Borne_geo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32631'});
var jsonSource_Borne_geo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Borne_geo_8.addFeatures(features_Borne_geo_8);
var lyr_Borne_geo_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Borne_geo_8, 
                style: style_Borne_geo_8,
                interactive: true,
                title: '<img src="styles/legend/Borne_geo_8.png" /> Borne_geo'
            });

lyr_Lim_com_0.setVisible(true);lyr_Sant_1.setVisible(true);lyr_Route_vrai_2.setVisible(true);lyr_Pointeau_3.setVisible(true);lyr_LOC_4.setVisible(true);lyr_Lim_admi_5.setVisible(true);lyr_Ligne_elec_6.setVisible(true);lyr_Eau_7.setVisible(true);lyr_Borne_geo_8.setVisible(true);
var layersList = [lyr_Lim_com_0,lyr_Sant_1,lyr_Route_vrai_2,lyr_Pointeau_3,lyr_LOC_4,lyr_Lim_admi_5,lyr_Ligne_elec_6,lyr_Eau_7,lyr_Borne_geo_8];
lyr_Lim_com_0.set('fieldAliases', {'nom_com': 'nom_com', 'population': 'population', 'code_com': 'code_com', 'source': 'source', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Sant_1.set('fieldAliases', {'type': 'type', 'nature': 'nature', 'source': 'source', 'nom_san': 'nom_san', 'remarque': 'remarque', });
lyr_Route_vrai_2.set('fieldAliases', {'num_route': 'num_route', 'type': 'type', 'cl_admin': 'cl_admin', 'revetement': 'revetement', 'praticab': 'praticab', 'chaussee_s': 'chaussee_s', 'voie_local': 'voie_local', 'franchisst': 'franchisst', 'source': 'source', 'shape_leng': 'shape_leng', });
lyr_Pointeau_3.set('fieldAliases', {'type': 'type', 'source': 'source', 'nom_pe': 'nom_pe', });
lyr_LOC_4.set('fieldAliases', {'nom_loc': 'nom_loc', 'type': 'type', 'statut_adm': 'statut_adm', 'commune': 'commune', 'arrondisst': 'arrondisst', 'village_ad': 'village_ad', 'nom_enq': 'nom_enq', 'nom_50k': 'nom_50k', 'nom_200k': 'nom_200k', 'nom_600k': 'nom_600k', 'nom_assemb': 'nom_assemb', 'nom_sbee': 'nom_sbee', 'nom_dgeau': 'nom_dgeau', 'nom_insae': 'nom_insae', 'autre_nom': 'autre_nom', 'gendarm': 'gendarm', 'police': 'police', 'pompiers': 'pompiers', 'douane': 'douane', 'hopital': 'hopital', 'autre_san': 'autre_san', 'code_geo': 'code_geo', 'source': 'source', 'ens_sup': 'ens_sup', 'ens_sec': 'ens_sec', 'marche': 'marche', 'poste': 'poste', 'population': 'population', });
lyr_Lim_admi_5.set('fieldAliases', {'type': 'type', 'source': 'source', 'shape_leng': 'shape_leng', });
lyr_Ligne_elec_6.set('fieldAliases', {'type': 'type', 'puissance': 'puissance', 'source': 'source', 'shape_leng': 'shape_leng', });
lyr_Eau_7.set('fieldAliases', {'nom_ce': 'nom_ce', 'nom_50k': 'nom_50k', 'nom_200k': 'nom_200k', 'nom_enq': 'nom_enq', 'autre_nom': 'autre_nom', 'type': 'type', 'regime': 'regime', 'arbres': 'arbres', 'source': 'source', 'nom_600k': 'nom_600k', 'shape_leng': 'shape_leng', 'trace': 'trace', });
lyr_Borne_geo_8.set('fieldAliases', {'type': 'type', 'methode': 'methode', 'x': 'x', 'y': 'y', 'z': 'z', 'source': 'source', 'nom_bor': 'nom_bor', });
lyr_Lim_com_0.set('fieldImages', {'nom_com': 'TextEdit', 'population': 'TextEdit', 'code_com': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Sant_1.set('fieldImages', {'type': 'TextEdit', 'nature': 'TextEdit', 'source': 'TextEdit', 'nom_san': 'TextEdit', 'remarque': 'TextEdit', });
lyr_Route_vrai_2.set('fieldImages', {'num_route': 'TextEdit', 'type': 'TextEdit', 'cl_admin': 'TextEdit', 'revetement': 'TextEdit', 'praticab': 'TextEdit', 'chaussee_s': 'TextEdit', 'voie_local': 'TextEdit', 'franchisst': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Pointeau_3.set('fieldImages', {'type': 'TextEdit', 'source': 'TextEdit', 'nom_pe': 'TextEdit', });
lyr_LOC_4.set('fieldImages', {'nom_loc': 'TextEdit', 'type': 'TextEdit', 'statut_adm': 'TextEdit', 'commune': 'TextEdit', 'arrondisst': 'TextEdit', 'village_ad': 'TextEdit', 'nom_enq': 'TextEdit', 'nom_50k': 'TextEdit', 'nom_200k': 'TextEdit', 'nom_600k': 'TextEdit', 'nom_assemb': 'TextEdit', 'nom_sbee': 'TextEdit', 'nom_dgeau': 'TextEdit', 'nom_insae': 'TextEdit', 'autre_nom': 'TextEdit', 'gendarm': 'TextEdit', 'police': 'TextEdit', 'pompiers': 'TextEdit', 'douane': 'TextEdit', 'hopital': 'TextEdit', 'autre_san': 'TextEdit', 'code_geo': 'TextEdit', 'source': 'TextEdit', 'ens_sup': 'TextEdit', 'ens_sec': 'TextEdit', 'marche': 'TextEdit', 'poste': 'TextEdit', 'population': 'TextEdit', });
lyr_Lim_admi_5.set('fieldImages', {'type': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Ligne_elec_6.set('fieldImages', {'type': 'TextEdit', 'puissance': 'TextEdit', 'source': 'TextEdit', 'shape_leng': 'TextEdit', });
lyr_Eau_7.set('fieldImages', {'nom_ce': 'TextEdit', 'nom_50k': 'TextEdit', 'nom_200k': 'TextEdit', 'nom_enq': 'TextEdit', 'autre_nom': 'TextEdit', 'type': 'TextEdit', 'regime': 'TextEdit', 'arbres': 'TextEdit', 'source': 'TextEdit', 'nom_600k': 'TextEdit', 'shape_leng': 'TextEdit', 'trace': 'TextEdit', });
lyr_Borne_geo_8.set('fieldImages', {'type': 'TextEdit', 'methode': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'z': 'TextEdit', 'source': 'TextEdit', 'nom_bor': 'TextEdit', });
lyr_Lim_com_0.set('fieldLabels', {'nom_com': 'no label', 'population': 'no label', 'code_com': 'no label', 'source': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_Sant_1.set('fieldLabels', {'type': 'no label', 'nature': 'no label', 'source': 'no label', 'nom_san': 'no label', 'remarque': 'no label', });
lyr_Route_vrai_2.set('fieldLabels', {'num_route': 'no label', 'type': 'no label', 'cl_admin': 'no label', 'revetement': 'no label', 'praticab': 'no label', 'chaussee_s': 'no label', 'voie_local': 'no label', 'franchisst': 'no label', 'source': 'no label', 'shape_leng': 'no label', });
lyr_Pointeau_3.set('fieldLabels', {'type': 'no label', 'source': 'no label', 'nom_pe': 'no label', });
lyr_LOC_4.set('fieldLabels', {'nom_loc': 'no label', 'type': 'no label', 'statut_adm': 'no label', 'commune': 'no label', 'arrondisst': 'no label', 'village_ad': 'no label', 'nom_enq': 'no label', 'nom_50k': 'no label', 'nom_200k': 'no label', 'nom_600k': 'no label', 'nom_assemb': 'no label', 'nom_sbee': 'no label', 'nom_dgeau': 'no label', 'nom_insae': 'no label', 'autre_nom': 'no label', 'gendarm': 'no label', 'police': 'no label', 'pompiers': 'no label', 'douane': 'no label', 'hopital': 'no label', 'autre_san': 'no label', 'code_geo': 'no label', 'source': 'no label', 'ens_sup': 'no label', 'ens_sec': 'no label', 'marche': 'no label', 'poste': 'no label', 'population': 'no label', });
lyr_Lim_admi_5.set('fieldLabels', {'type': 'no label', 'source': 'no label', 'shape_leng': 'no label', });
lyr_Ligne_elec_6.set('fieldLabels', {'type': 'no label', 'puissance': 'no label', 'source': 'no label', 'shape_leng': 'no label', });
lyr_Eau_7.set('fieldLabels', {'nom_ce': 'no label', 'nom_50k': 'no label', 'nom_200k': 'no label', 'nom_enq': 'no label', 'autre_nom': 'no label', 'type': 'no label', 'regime': 'no label', 'arbres': 'no label', 'source': 'no label', 'nom_600k': 'no label', 'shape_leng': 'no label', 'trace': 'no label', });
lyr_Borne_geo_8.set('fieldLabels', {'type': 'no label', 'methode': 'no label', 'x': 'no label', 'y': 'no label', 'z': 'no label', 'source': 'no label', 'nom_bor': 'no label', });
lyr_Borne_geo_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});