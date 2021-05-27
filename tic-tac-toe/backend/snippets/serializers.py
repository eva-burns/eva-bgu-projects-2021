from rest_framework import serializers

from snippets.models import Snippet


class SnippetSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Snippet
        fields = ['id', 'winner']
        # fields = ('url', 'id', 'highlight', 'owner', 'title', 'code',
        #           'linenos', 'language', 'style')
