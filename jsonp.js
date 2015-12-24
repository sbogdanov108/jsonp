/**
 * Created by Sergey on 05.09.2015.
 */

window.addEventListener( 'load', function()
{
    init();
} );

function init()
{
    document.querySelector( 'button' ).addEventListener( 'click', function()
    {
        var title = document.querySelector( 'input' ).value;

        createScript( title );
    } );
}

function createScript( title )
{
    var script = document.createElement( 'script' );

    script.src = 'http://ru.wikipedia.org/w/api.php?action=parse&page=' + title + '&prop=text&section=0&format=json&callback=kotik';

    document.head.appendChild( script );
}

function kotik( data )
{
    var contentEl = document.querySelector( '#content' ),
        content = '';

    if( data.error )
        content = data.error.info;
    else
        content = data.parse.text[ '*' ];

    contentEl.style.display = 'block';
    contentEl.innerHTML = content;
}
