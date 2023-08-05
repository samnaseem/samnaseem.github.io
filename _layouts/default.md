---
layout: root
---
<div class="container-fluid g-0">
    <img class="image-default page-image" src="{{page.page-image}}" width="100%" height="100px" />
</div>
<div class="container mw-lg p-4">
    {% include breadcrumbs.html hidelast=page.breadcrumbs-hidelast %}
    <div class="liquid-content columns">
        {{content}}
    </div>
    <hr class="mt-5 d-none d-sm-block"/>
</div>
