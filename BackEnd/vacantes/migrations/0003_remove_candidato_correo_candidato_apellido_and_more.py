# Generated by Django 4.1.2 on 2022-10-17 04:50

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('vacantes', '0002_alter_vacante_requisitos_opcionales_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='candidato',
            name='correo',
        ),
        migrations.AddField(
            model_name='candidato',
            name='apellido',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='candidato',
            name='nacimiento',
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='candidato',
            name='pais',
            field=models.CharField(blank=True, max_length=56, null=True),
        ),
        migrations.AddField(
            model_name='candidato',
            name='ruta_foto',
            field=models.URLField(blank=True, default='http://127.0.0.1:8000/media/imagenes/fe87a865-4b33-11ed-9406-c80c0051d672.jpg', null=True),
        ),
        migrations.AddField(
            model_name='candidato',
            name='sexo',
            field=models.CharField(blank=True, max_length=1, null=True),
        ),
        migrations.AddField(
            model_name='candidato',
            name='titulo_personal',
            field=models.CharField(blank=True, max_length=60, null=True),
        ),
        migrations.AddField(
            model_name='candidato',
            name='usuario',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='solicitude',
            name='status',
            field=models.CharField(blank=True, max_length=1, null=True),
        ),
        migrations.AlterField(
            model_name='solicitude',
            name='cv_url',
            field=models.URLField(blank=True, default='http://127.0.0.1:8000/media/imagenes/f37aca8b-4b2b-11ed-8a6f-c80c0051d672-Nita_Ditch.pdf', null=True),
        ),
        migrations.CreateModel(
            name='VacantesGuardadas',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha_guardado', models.DateField(auto_now_add=True)),
                ('usuario', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('vacante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='vacantes.vacante')),
            ],
        ),
    ]
