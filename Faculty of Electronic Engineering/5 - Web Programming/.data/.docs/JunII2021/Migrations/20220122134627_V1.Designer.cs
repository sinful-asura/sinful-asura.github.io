﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Models;

namespace JunII2021.Migrations
{
    [DbContext(typeof(Context))]
    [Migration("20220122134627_V1")]
    partial class V1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.0");

            modelBuilder.Entity("Models.IspitniRok", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("IspitniRokovi");
                });

            modelBuilder.Entity("Models.Predmet", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Naziv")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Predmeti");
                });

            modelBuilder.Entity("Models.Spoj", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<int?>("IspitniRokID")
                        .HasColumnType("int");

                    b.Property<int>("Ocena")
                        .HasColumnType("int");

                    b.Property<int?>("PredmetID")
                        .HasColumnType("int");

                    b.Property<int?>("StudentID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("IspitniRokID");

                    b.HasIndex("PredmetID");

                    b.HasIndex("StudentID");

                    b.ToTable("Spojevi");
                });

            modelBuilder.Entity("Models.Student", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .UseIdentityColumn();

                    b.Property<string>("Ime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Index")
                        .HasColumnType("int");

                    b.Property<string>("Prezime")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ID");

                    b.ToTable("Studenti");
                });

            modelBuilder.Entity("Models.Spoj", b =>
                {
                    b.HasOne("Models.IspitniRok", "IspitniRok")
                        .WithMany("Spojevi")
                        .HasForeignKey("IspitniRokID");

                    b.HasOne("Models.Predmet", "Predmet")
                        .WithMany("Spojevi")
                        .HasForeignKey("PredmetID");

                    b.HasOne("Models.Student", "Student")
                        .WithMany("Spojevi")
                        .HasForeignKey("StudentID");

                    b.Navigation("IspitniRok");

                    b.Navigation("Predmet");

                    b.Navigation("Student");
                });

            modelBuilder.Entity("Models.IspitniRok", b =>
                {
                    b.Navigation("Spojevi");
                });

            modelBuilder.Entity("Models.Predmet", b =>
                {
                    b.Navigation("Spojevi");
                });

            modelBuilder.Entity("Models.Student", b =>
                {
                    b.Navigation("Spojevi");
                });
#pragma warning restore 612, 618
        }
    }
}
