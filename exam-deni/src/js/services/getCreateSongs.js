

export function filterSong( props_obj, filter_param) {

        var result = props_obj.filter(function( obj ) {

        return obj.title.toLowerCase() == filter_param.toLowerCase();
    });
    return result;
}