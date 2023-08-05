---
layout: root
---
<div class="container-fluid g-0">
    <img class="image-default" src="{{page.page-image}}" width="100%" height="300px" />
</div>
<div class="container mw-lg p-4">
    {% include breadcrumbs.html hidelast=page.breadcrumbs-hidelast %}
    {{content}}
</div>