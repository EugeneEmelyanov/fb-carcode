


function checkWidget() {
    var el = document.getElementById("CarcodeWidgetHubWidgetsHubButton");
    if (el) {
        enhanceFunctionality();
    } else {
        setTimeout(checkWidget, 1000);
    }
}

function enhanceFunctionality() {
    var el = document.getElementById("CarcodeWidgetHubWidgetsHubButton");
    el.onclick = function() {
        var old_element = document.getElementById("CarcodeWidgetHubWidgetsLiveChatButton");
        var new_element = old_element.cloneNode(true);
        old_element.parentNode.replaceChild(new_element, old_element);
        new_element.onclick = function() {
            window.open("https://console.activengage.com/chat?b=eyJzaXRlSWQiOiIyXzIyMDUiLCJzZXNzaW9uIjoiOTg1LTE0NzgxMDgxNzcyMTIiLCJzaXRlIjoid3d3LmF1dG9uYXRpb25mb3JkbGl0dGxldG9uLmNvbSIsInNpdGVEaXNwbGF5TmFtZSI6IkF1dG9OYXRpb24gRm9yZCBMaXR0bGV0b24iLCJzaXRlSW5kdXN0cnkiOiJBdXRvbW90aXZlIiwidmlzaXRvckNvdW50cnkiOiJVbml0ZWQgU3RhdGVzIiwidmlzaXRvclJlZ2lvbiI6IiIsInBhZ2VUaXRsZSI6IkZvcmQgRGVhbGVyc2hpcCBOZWFyIE1lIExpdHRsZXRvbiwgQ08gfCBBdXRvTmF0aW9uIEZvcmQgTGl0dGxldG9uIiwicGFnZUNvbXBhdE1vZGUiOiJDU1MxQ29tcGF0IiwicmVmZXJyaW5nVXJsIjoiIiwic2l0ZVVybCI6Imh0dHA6Ly93d3cuYXV0b25hdGlvbmZvcmRsaXR0bGV0b24uY29tLz93dGs9MDAwMDAxNDkwJmdjbGlkPUNNR0Vrb0xPaXRBQ0ZaU0RmZ29kN2hJSzRnIiwiY2hhdFNpdGVEb21haW4iOiIiLCJ2aXNpdElkIjoiVmlzaXQvMl8yMjA1Xzk4NS0xNDc4MTA4MTc3Ml84LjQxLjM1LjMzIiwicGFnZUdyb3VwIjoiRGVmYXVsdCJ9&x-launchsource=button&x-availability=100", "Autonation Chat", "popup");
        }
    }
}
