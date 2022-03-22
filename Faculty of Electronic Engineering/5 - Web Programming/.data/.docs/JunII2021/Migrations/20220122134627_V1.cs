using Microsoft.EntityFrameworkCore.Migrations;

namespace JunII2021.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "IspitniRokovi",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_IspitniRokovi", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Predmeti",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Naziv = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Predmeti", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Studenti",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Index = table.Column<int>(type: "int", nullable: false),
                    Ime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Prezime = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Studenti", x => x.ID);
                });

            migrationBuilder.CreateTable(
                name: "Spojevi",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudentID = table.Column<int>(type: "int", nullable: true),
                    IspitniRokID = table.Column<int>(type: "int", nullable: true),
                    PredmetID = table.Column<int>(type: "int", nullable: true),
                    Ocena = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Spojevi", x => x.ID);
                    table.ForeignKey(
                        name: "FK_Spojevi_IspitniRokovi_IspitniRokID",
                        column: x => x.IspitniRokID,
                        principalTable: "IspitniRokovi",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Spojevi_Predmeti_PredmetID",
                        column: x => x.PredmetID,
                        principalTable: "Predmeti",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Spojevi_Studenti_StudentID",
                        column: x => x.StudentID,
                        principalTable: "Studenti",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Spojevi_IspitniRokID",
                table: "Spojevi",
                column: "IspitniRokID");

            migrationBuilder.CreateIndex(
                name: "IX_Spojevi_PredmetID",
                table: "Spojevi",
                column: "PredmetID");

            migrationBuilder.CreateIndex(
                name: "IX_Spojevi_StudentID",
                table: "Spojevi",
                column: "StudentID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Spojevi");

            migrationBuilder.DropTable(
                name: "IspitniRokovi");

            migrationBuilder.DropTable(
                name: "Predmeti");

            migrationBuilder.DropTable(
                name: "Studenti");
        }
    }
}
