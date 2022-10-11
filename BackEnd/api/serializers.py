from rest_framework import serializers

from vacantes.models import Categoria, Empresa, Vacante, Candidato, Solicitude

class Categoria_Serializer(serializers.ModelSerializer):

    class Meta:
        model = Categoria
        fields = '__all__'

class Empresa_Serializer(serializers.ModelSerializer):

    class Meta:
        model = Empresa
        fields = '__all__'

class Vacante_Serializer(serializers.ModelSerializer):

    class Meta:
        model = Vacante
        fields = '__all__'

class Obtener_Vacantes_Serializer(serializers.ModelSerializer):

    categoria = serializers.StringRelatedField()
    empresa = serializers.StringRelatedField()

    class Meta:
        model = Vacante
        fields = [
            "id",
            "nombre_puesto",
            "categoria",
            "empresa",
            "tipo_trabajo",
            "forma_trabajo",
            "experiencia",
            "responsabilidades_puesto",
            "requisitos_obligatorios",
            "requisitos_opcionales",
            "salario_min",
            "salario_max",
            "beneficios",
            "horario_trabajo",
            "fecha_hora"
        ]

class Candidato_Serializer(serializers.ModelSerializer):

    class Meta:
        model = Candidato
        fields = '__all__'

class Solicitude_Serializer(serializers.ModelSerializer):

    class Meta:
        model = Solicitude
        fields = '__all__'

class Solicitude_Vacante_Serializer(serializers.ModelSerializer):

    vacante = serializers.StringRelatedField()
    candidato = serializers.StringRelatedField()

    class Meta:
        model = Solicitude
        fields = '__all__'